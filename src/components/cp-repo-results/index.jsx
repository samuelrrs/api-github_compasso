import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import GitHubIcon from "@material-ui/icons/GitHub";
import StarIcon from "@material-ui/icons/Star";
import UsbIcon from "@material-ui/icons/Usb";
import ComputerIcon from "@material-ui/icons/Computer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const RepoResults = ({ repoData }) => {
  const styles = useStyles();

  const sendToRepositorie = () => {
    window.open(`${repoData.data.html_url}`, "_blank");
  };

  return (
    <div className={styles.repoResults__container}>
      <div className={styles.repoResults__info}>
        <div className={styles.repoResults__userInfo}>
          <Tooltip
            title="Esse é o nome do repositório! Clique para ver a descrição :)"
            placement="left"
          >
            <GitHubIcon />
          </Tooltip>

          <Accordion className={styles.repoResults__accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={repoData.data.id}
            >
              <Typography>{repoData.data.full_name}</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.repoResults__accordionDetails}>
              <Typography
                onClick={sendToRepositorie}
                className={styles.repoResults__accordionDescription}
              >
                {repoData.data.description}
              </Typography>
              <div className={styles.repoResults__accordionRepoInfo}>
                <Typography className={styles.repoResults__iconContainer}>
                  <StarIcon />
                  {repoData.data.stargazers_count}
                </Typography>
                <Typography className={styles.repoResults__iconContainer}>
                  <UsbIcon />
                  {repoData.data.forks_count}
                </Typography>
                <Typography className={styles.repoResults__iconContainer}>
                  <ComputerIcon />
                  {repoData.data.language}
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default RepoResults;
