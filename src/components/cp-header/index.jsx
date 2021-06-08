import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import useStyles from "./style";
import { Tooltip } from "@material-ui/core";

const Header = () => {
  const styles = useStyles();

  const handleHome = () => {
    window.open(
      "https://github.com/samuelrrs/",
      "_blank"
    );
  };

  return (
    <div className={styles.header}>
      <Tooltip title="Meu Github" placement="bottom">
        <GitHubIcon className={styles.header__icon} onClick={handleHome} />
      </Tooltip>
    </div>
  );
};

export default Header;
