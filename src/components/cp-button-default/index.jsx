import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const ButtonDefault = ({ children, type, onClick }) => {
  const styles = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      type={type}
      className={styles.buttonDefault__btn_global}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonDefault;
