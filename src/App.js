import "./theme/global-styles.css";
import Header from "./layouts/Header/Header";
import Nav from "./layouts/Nav/Nav";
import Main from "./layouts/Main/Main";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Main>
        {/* <Profile /> */}
        <Messages />
      </Main>
    </div>
  );
};

export default App;
