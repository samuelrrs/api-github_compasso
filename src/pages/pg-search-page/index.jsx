import { FormControlLabel, TextField } from "@material-ui/core";
import React, { useState } from "react";

import ButtonDefault from "../../components/cp-button-default";
import UserResults from "../../components/cp-user-results";
import useStyles from "./style";
import MuiAlert from "@material-ui/lab/Alert";
import Switch from "@material-ui/core/Switch";
import api from "../../services/api";
import RepoResults from "../../components/cp-repo-results";
const SearchPage = () => {
  const styles = useStyles();

  const [alert, setAlert] = useState(false);
  const [buscaRepo, setBuscaRepo] = useState("");

  const [value, setValue] = useState("");
  const [userData, setUserData] = useState("");
  const [checked, setChecked] = React.useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();
    setBuscaRepo("");
    try {
      const profile = await api.get(`/users/${value}`);
      if (profile) {
        setUserData(profile);
      }
      setValue("");
    } catch (error) {
      setAlert(true);
    }
  };
  const repoFormSubmit = async (e) => {
    e.preventDefault();
    setUserData("");

    try {
      const repoInfo = await api.get(`/repos/${value}`);
      if (repoInfo) {
        setBuscaRepo(repoInfo);
      }
      setValue("");
    } catch (error) {
      setAlert(true);
    }
  };
  const handleinputChange = (e) => {
    setValue(e.target.value);
    setAlert(false);
  };

  const handleClean = () => {
    setUserData("");
    setBuscaRepo("");
  };
  const handleChecked = () => {
    setChecked(!checked);
    setValue("");
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  return (
    <div className={styles.searhPage__container}>
      {alert ? (
        <Alert severity="error">Usuário ou Repositório não existe</Alert>
      ) : (
        <Alert severity="info">
          {checked
            ? "Dica! Pesquise por: samuelrrs/ToDo ou facebook/react"
            : "Dica! Pesquise por: samuelrrs ou facebook"}
        </Alert>
      )}

      <div className={styles.searhPage__content}>
        <h1 className={styles.searhPage__title}>BEM VINDO, FAÇA SUA BUSCA</h1>
        <form
          onSubmit={checked ? repoFormSubmit : formSubmit}
          className={styles.searchPage__containerForm}
        >
          <TextField
            id="outlined-basic"
            label={checked ? "Digite user/repo" : "Digite o usuário"}
            variant="outlined"
            value={value.replace(/\s/g, "")}
            onChange={handleinputChange}
            className={styles.searchPage__input}
            required
          />
          <FormControlLabel
            className={styles.searchPage__switch}
            control={
              <Switch
                checked={checked}
                onChange={handleChecked}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
                label="Oi"
              />
            }
            label="Pesquisar por respositório"
          />
          <ButtonDefault type={"submit"}>Pesquisar</ButtonDefault>
          {userData || buscaRepo ? (
            <ButtonDefault color="primary" onClick={handleClean}>
              Limpar resultado
            </ButtonDefault>
          ) : (
            ""
          )}
        </form>
        {userData ? <UserResults userData={userData} /> : ""}
        {buscaRepo ? <RepoResults repoData={buscaRepo} /> : ""}
      </div>
    </div>
  );
};

export default SearchPage;
