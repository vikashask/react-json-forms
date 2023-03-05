import makeStyles from "@mui/styles/makeStyles";

export const addMyactivityStyles = makeStyles((theme) => ({
  // dialogContainer: {
  //   "& .MuiPaper-root": {
  //     minWidth: "80%",
  //     // height: '90%',
  //     padding: 0,
  //     borderRadius: "20px !important",
  //     [theme.breakpoints.down("sm")]: {
  //       borderRadius: "0px !important",
  //       maxWidth: "100%",
  //       height: "100%",
  //     },
  //   },
  // },
  closeIcon: {
    cursor: "pointer",
  },
  dialogTitle: {
    "& .MuiDialogTitle-root": {
      // padding: '1rem !important'
    },
    borderBottom: "1px solid #EDE7F6",
    padding: "1rem",
  },
  dialogContent: {
    padding: "1rem 1rem 2rem 1rem !important",
  },
  title: {
    color: "#212121",
    fontSize: "16px",
    fontWeight: "bold",
  },
  tagsWrapper: {
    width: "100%",
    border: 0,
    borderBottom: "2px solid #2196F3",
    marginBottom: "2%",
    "& fieldset": {
      border: 0,
      borderBottom: "1px",
      borderColor: "#2196F3",
    },
    "& .MuiChip-root": {
      color: "#2196F3",
      border: "1px solid #2196F3",
      backgroundColor: "transparent",
      height: "34px",
    },
    "& .MuiIconButton-root": {
      color: "#2196F3",
    },
    "& .MuiChip-label": {
      paddingRight: "22px",
    },
  },
}));
