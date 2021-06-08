import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../styles/colors";

const useStyles = makeStyles(() => ({
  resultsDetails__container: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    marginTop: 25,
  },
  resultsDetails__userDetails: {
    borderRadius: 5,
    padding: 15,
    border: "1px solid",
    backgroundColor: COLORS.BG_TRANSPARENT,
  },
  resultsDetails__userInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    color: COLORS.WHITE,
    "@media (max-width: 440px)": {
      flexDirection: "column",
    },
  },
  resultsDetails__avatar: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundSize: "cover",
  },
  resultsDetails__fullName: {
    fontSize: 35,
    fontWeight: "bold",
  },
  resultsDetails__userName: {
    cursor: "pointer",
    marginTop: 5,
  },
  resultsDetails__description: {
    marginTop: 5,
  },
  resultsDetails__actionButtons: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  resultsDetails__listRepo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  resultsDetails__list: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    maxWidth: "40%",
    "@media (max-width: 440px)": {
      maxWidth: "90%",
    },
  },
  resultsDetails__itemList: {
    border: "1px solid",
    borderColor: COLORS.TEXT_GRAY,
    color: COLORS.TEXT_GRAY,
    borderRadius: 10,
    padding: 10,
    backgroundColor: COLORS.WHITE,
  },
  resultsDetails__repoContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resultsDetails__accordion: {
    backgroundColor: COLORS.ACCORDION_COLOR,
    color: COLORS.WHITE,
    "& .MuiSvgIcon-root": {
      color: COLORS.WHITE,
    },
  },
  resultsDetails__accordionDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  resultsDetails__accordionRepoInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
  },
  resultsDetails__iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
}));

export default useStyles;
