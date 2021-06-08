import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useGitHubData } from "../../context/GitUserData";
import ButtonDefault from "../../components/cp-button-default/index";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import api from "../../services/api";
import useStyles from "./style";
import { useHistory } from "react-router";

const ResultsDetails = () => {
  const styles = useStyles();
  const { user, setUser } = useGitHubData();
  const [repos, setRepos] = useState([]);
  const [starredRepo, setStarredRepo] = useState([]);
  const [activeListRepo, setActiveRepoList] = useState(true);
  const [activeListStarred, setActiveStarredList] = useState(false);

  useEffect(() => {
    async function load() {
      const pathname = window.location.pathname.replace("/users", "");
      const [userData] = await Promise.all([api.get(`/users${pathname}`)]);
      setUser(userData.data);
    }
    load();
  }, [setUser]);

  useEffect(() => {
    async function loadRepo() {
      const pathname = window.location.pathname.replace("/users", "");
      const repositories = await api.get(`/users${pathname}/repos`);
      setRepos(repositories.data);
    }
    loadRepo();
  }, [setRepos]);

  useEffect(() => {
    async function loadStarredRepo() {
      const pathname = window.location.pathname.replace("/users", "");
      const starredRepositories = await api.get(`/users${pathname}/starred`);
      setStarredRepo(starredRepositories.data);
    }
    loadStarredRepo();
  }, [setStarredRepo]);

  const showListRepo = () => {
    setActiveRepoList(true);
    setActiveStarredList(false);
  };
  const showListStarred = () => {
    setActiveRepoList(false);
    setActiveStarredList(true);
  };

  let history = useHistory();
  const handleHome = () => {
    history.push("/");
  };

  return (
    <div className={styles.resultsDetails__container}>
      <Tooltip title="Fazer nova busca!" placement="right">
        <SearchIcon onClick={handleHome} />
      </Tooltip>

      <div className={styles.resultsDetails__userDetails}>
        <div className={styles.resultsDetails__userInfo}>
          <img
            src={user.avatar_url}
            alt="avatar"
            className={styles.resultsDetails__avatar}
          />
          <div>
            <Typography className={styles.resultsDetails__fullName}>
              {user.name}
            </Typography>
            <Typography className={styles.resultsDetails__userName}>
              {user.login}
            </Typography>
            <Typography className={styles.resultsDetails__description}>
              {user.bio}
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.resultsDetails__actionButtons}>
        <ButtonDefault onClick={showListRepo}>REPOSITÓRIOS</ButtonDefault>
        <ButtonDefault onClick={showListStarred}>STARRED</ButtonDefault>
      </div>
      <div className={styles.resultsDetails__listRepo}>
        {activeListRepo ? (
          <ul className={styles.resultsDetails__list}>
            {repos.map((repo) => (
              <Accordion className={styles.resultsDetails__accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id={repo.id}
                >
                  <Typography>{repo.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{repo.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </ul>
        ) : (
          ""
        )}
        {activeListStarred ? (
          <ul className={styles.resultsDetails__list}>
            {starredRepo.map((repo) => (
              <Accordion className={styles.resultsDetails__accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id={repo.id}
                >
                  <Typography>{repo.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{repo.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ResultsDetails;
