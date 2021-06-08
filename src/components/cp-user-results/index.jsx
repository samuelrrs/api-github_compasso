import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import GitHubIcon from "@material-ui/icons/GitHub";
import ButtonDefault from "../cp-button-default";
import { useHistory } from "react-router";

const UserResults = ({ userData }) => {
  const styles = useStyles();
  let history = useHistory();

  const sendToDetails = () => {
    history.push(`/users/${userData.data.login}`);
  };

  return (
    <div className={styles.userResults__container}>
      <div>
        <img
          src={userData.data.avatar_url}
          alt="avatar"
          className={styles.userResults__avatar}
        />
      </div>
      <div className={styles.userResults__info}>
        <div className={styles.userResults__userInfo}>
          <GitHubIcon />
          <Typography className={styles.userResults__userName}>
            {userData.data.login}
          </Typography>
        </div>

        <ButtonDefault
          variant="contained"
          color="primary"
          onClick={sendToDetails}
          type={"submit"}
        >
          Acessar
        </ButtonDefault>
      </div>
    </div>
  );
};

export default UserResults;
