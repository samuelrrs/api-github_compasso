import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../styles/colors";

const useStyles = makeStyles(() => ({
  userResults__container: {
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
  userResults__avatar: {
    width: 150,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  userResults__info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  userResults__userInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    color: COLORS.WHITE,
  },
  userResults__userName: {
    fontSize: 35,
  },
}));

export default useStyles;
