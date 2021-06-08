import Header from "./components/cp-header";
/* import ResultsDetails from "./pages/pg-results-details";
import SearchPage from "./pages/pg-search-page"; */
import Routes from "./routes/routes";

import "./styles/global.css";

import GitUserProvider from "./context/GitUserData";
function App() {
  return (
    <GitUserProvider>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </GitUserProvider>
  );
}

export default App;
