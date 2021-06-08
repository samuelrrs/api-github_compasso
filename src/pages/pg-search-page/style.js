import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../styles/colors";

const useStyles = makeStyles(() => ({
  searhPage__container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    marginTop: 25,
    width: "100%",
  },
  searhPage__title: {
    color: COLORS.WHITE,
    zIndex: 20,
    marginTop: "25px",
    fontWeight: "bold",
  },
  searchPage__containerForm: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginBottom: 20,
  },
  searhPage__content: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "50%",
    backgroundColor: COLORS.BG_TRANSPARENT,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    "@media (max-width: 740px)": {
      width: "80%",
    },
  },
  searchPage__input: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      backgroundColor: COLORS.BG_TRANSPARENT,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiInputLabel-outlined": {
      color: "white",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "white",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "white",
    },
  },
  searchPage__switch: {
    "& .MuiTypography-body1": {
      color: COLORS.SWITCH_TEXT,
    },
  },
}));

export default useStyles;
