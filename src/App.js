import "./theme/global-styles.css";
import Header from "./layouts/Header/Header";
import Nav from "./layouts/Nav/Nav";
import Main from "./layouts/Main/Main";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Main>
        <Profile />
      </Main>
    </div>
  );
};

export default App;
