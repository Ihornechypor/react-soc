import { Route, BrowserRouter } from "react-router-dom";
import "./theme/global-styles.css";
import Header from "./layouts/Header/Header";
import Nav from "./layouts/Nav/Nav";
import Main from "./layouts/Main/Main";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Main>
          <Route
            path="/messages"
            render={() => <Messages state={props.state.messagesPage} />}
          />
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
        </Main>
      </div>
    </BrowserRouter>
  );
};

export default App;
