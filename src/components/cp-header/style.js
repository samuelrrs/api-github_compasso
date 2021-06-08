import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../styles/colors";

const useStyles = makeStyles(() => ({
  header: {
    width: "100%",
    backgroundColor: COLORS.WHITE,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0px 10px 0px",
    color: COLORS.BLACK,
    cursor: "pointer",
  },
  header__icon: {
    width: 200,
  },
}));

export default useStyles;
