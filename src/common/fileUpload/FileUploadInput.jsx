import ImagePreviewComponent from "../../ImagePreviewComponent";

export const FileUploadInput = (props) => {
  const { label, handleChange, data, schema, path } = props;

  const onInputChange = (file) => {
    handleChange(path, file);
  };

  return (
    <ImagePreviewComponent
      previewImage={typeof data === "string" ? data : ""}
      saveUpdatedImage={onInputChange}
      title={label}
      subTitle={schema?.meta?.subTitle}
      requiredAspectRatio={schema?.meta?.requiredAspectRatio}
      requiredHeight={schema?.meta?.requiredHeight}
      requiredWidth={schema?.meta?.requiredWidth}
      previewImageHeight={schema?.meta?.previewImageHeight}
      previewImageWidth={schema?.meta?.previewImageWidth}
    />
  );
};
