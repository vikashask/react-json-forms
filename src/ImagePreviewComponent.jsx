import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CropIcon from "@mui/icons-material/Crop";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import UploadIcon from "@mui/icons-material/Upload";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import imgPlaceHolder from "assets/images/image-placeholder.jpg";
import PropTypes from "prop-types";
import { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { FormattedMessage } from "react-intl";
import getCroppedImg from "./getCroppedImage";
import "./styles.scss";

const ImagePreviewComponent = ({
  previewImage,
  saveUpdatedImage,
  title,
  subTitle,
  viewOnly,
  requiredAspectRatio,
  requiredHeight,
  requiredWidth,
  previewImageHeight,
  previewImageWidth,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [uploadedImage, setUploadedImage] =
    useState(
      null
    ); /* uploadedImage image is the Image uploaded by dropping or file upload. */
  const [uploadedImageName, setUploadedImageName] =
    useState(
      ""
    ); /* uploadedImageName is the uploaded image name which needs to be sent to create asset api */
  const [updatedImage, setUpdatedImage] =
    useState(null); /* Updated image is the cropped Image */
  const [error, setError] = useState("");
  const fileUploadRef = useRef(null);
  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    if (image.type === "image/jpeg" || image.type === "image/png") {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          if (img.width < requiredWidth || img.height < requiredHeight) {
            setUploadedImage(null);
            setUploadedImageName(null);
            setUpdatedImage(null);
            setError(
              `Image dimensions must be at least ${requiredWidth} x ${requiredHeight} pixels`
            );
          } else {
            setError("");
            setZoom(1);
            const imageUrl = URL.createObjectURL(image);
            setUploadedImageName(image.name);
            setUploadedImage(imageUrl);
            if (imageUrl && updatedImage) {
              setUpdatedImage(null);
            }
          }
        };
      };
      e.target.value = "";
      reader.readAsDataURL(image);
      setCrop({ x: 0, y: 0 });
    } else setError("Image format should be of jpeg/png format.");
  };

  console.log("previewImage is ", previewImage);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const image = e.dataTransfer.files[0];
    if (image.type === "image/jpeg" || image.type === "image/png") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          if (img.width < requiredWidth || img.height < requiredHeight) {
            setUploadedImage(null);
            setUploadedImageName(null);
            setUpdatedImage(null);
            setError(
              `Image dimensions must be at least ${requiredWidth} x ${requiredHeight} pixels`
            );
          } else {
            setError("");
            setZoom(1);
            const imageUrl = URL.createObjectURL(image);
            setUploadedImageName(image.name);
            setUploadedImage(imageUrl);
            if (imageUrl && updatedImage) {
              setUpdatedImage(null);
            }
          }
          e.target.value = "";
        };
      };
      reader.readAsDataURL(image);
      setCrop({ x: 0, y: 0 });
    } else setError("Image format should be of jpeg/png format.");
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleZoom = (e) => {
    e.stopPropagation();
    if (e.currentTarget.id === "zoomIn" && zoom < 3) {
      setZoom((prev) => prev + 0.1);
    } else if (e.currentTarget.id === "zoomOut" && zoom > 1) {
      setZoom((prev) => prev - 0.1);
    } else e.preventDefault();
  };
  /*  ***********  This functions helps to generated cropped Image and send the base64 value.*************  */
  const showCroppedImage = useCallback(async () => {
    const file = {};
    try {
      const updatedImage = await getCroppedImg(
        uploadedImage,
        croppedAreaPixels
      );
      Object.assign(file, {
        base64Value: updatedImage,
        path: uploadedImageName,
      });
      setUpdatedImage(updatedImage);
      saveUpdatedImage(file);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, uploadedImage]);

  return (
    <Grid container width="100%">
      <Grid item mb={2} width="100%">
        <div className="cropped-image-container">
          {updatedImage ? (
            <img
              style={{ height: previewImageHeight, width: previewImageWidth }}
              src={updatedImage}
              alt="updatedImage"
            />
          ) : (
            !uploadedImage && (
              <img
                style={{ height: previewImageHeight, width: previewImageWidth }}
                src={previewImage ? previewImage : imgPlaceHolder}
                alt="defaultImage"
              />
            )
          )}
        </div>
      </Grid>
      <Grid item mb={2} width="100%">
        <div
          className="container"
          style={{
            display:
              uploadedImage === null || updatedImage !== null
                ? "none"
                : "block",
            width:
              uploadedImage === null || updatedImage !== null ? "0" : "100%",
          }}
        >
          <div style={{ width: "100%", height: "347px" }}>
            <Cropper
              image={uploadedImage}
              crop={crop}
              zoom={zoom}
              zoomSpeed={2}
              maxZoom={3}
              zoomWithScroll
              showGrid
              aspect={requiredAspectRatio}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div style={{ marginTop: "10px" }} className="controls">
            <IconButton
              onClick={handleZoom}
              id="zoomIn"
              disabled={zoom >= 3}
              className="zoomButtons plus"
            >
              <AddCircleOutlineIcon />
            </IconButton>
            <IconButton
              onClick={handleZoom}
              id="zoomOut"
              disabled={zoom <= 1}
              className="zoomButtons minus"
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          </div>
        </div>
      </Grid>
      {!viewOnly && (
        <Grid item width="100%">
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
            spacing={2}
            mb={2}
          >
            <Grid item>
              <div
                className="fileUploadContainer"
                role="presentation"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onClick={() => fileUploadRef.current.click()}
              >
                <UploadIcon sx={{ fill: "#2196F3" }} />
                Choose file or drag it here
                <input
                  type="file"
                  id="file_upload"
                  name="cover"
                  ref={fileUploadRef}
                  onChange={handleImageUpload}
                  onClick={(event) => {
                    event.target.value = null;
                  }}
                  accept="image/png, image/jpeg"
                  style={{ display: "none", height: "100px", width: "200px" }}
                />
              </div>
            </Grid>
            {uploadedImage && !updatedImage ? (
              <Grid item>
                <Button variant="contained" onClick={showCroppedImage}>
                  <CropIcon sx={{ marginRight: "0.5rem" }} />
                  <FormattedMessage id="crop" />
                </Button>
              </Grid>
            ) : (
              <></>
            )}
            <Grid item xs={12}>
              {error && (
                <Typography variant="body1" color="red" fontWeight="800" mt={1}>
                  {error}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid container direction="column" spacing={1}>
            <Grid item style={{ fontSize: "16px", fontWeight: "bold" }}>
              {title}
            </Grid>
            <Grid item sx={{ fontSize: "12px" }}>
              {subTitle}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

ImagePreviewComponent.propTypes = {
  previewImage: PropTypes.string,
  saveUpdatedImage: PropTypes.func,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  viewOnly: PropTypes.bool,
  requiredAspectRatio: PropTypes.number,
  requiredHeight: PropTypes.number,
  requiredWidth: PropTypes.number,
  previewImageHeight: PropTypes.number,
  previewImageWidth: PropTypes.any,
};

export default ImagePreviewComponent;
