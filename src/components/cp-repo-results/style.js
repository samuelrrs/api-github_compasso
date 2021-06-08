import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../styles/colors";

const useStyles = makeStyles(() => ({
  repoResults__container: {
    maxWidth: "1100px",
    width: "100%",
    padding: 25,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginTop: 25,
    marginBottom: 25,
    "@media (max-width: 740px)": {
      flexDirection: "column",
    },
  },
  repoResults__info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  repoResults__userInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    color: COLORS.WHITE,
    "@media (max-width: 1050px)": {
      flexDirection: "column",
    },
  },
  repoResults__accordion: {
    backgroundColor: COLORS.ACCORDION_COLOR,
    color: COLORS.WHITE,
    "& .MuiSvgIcon-root": {
      color: COLORS.WHITE,
    },
  },
  repoResults__accordionDescription: {
    cursor: "pointer",
  },
  repoResults__accordionDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  repoResults__accordionRepoInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
    "@media (max-width: 440px)": {
      gap: 20,
      flexDirection: "column",
    },
  },
  repoResults__iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
}));

export default useStyles;
