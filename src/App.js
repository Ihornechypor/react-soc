import { Route } from "react-router-dom";
import "./theme/global-styles.css";
import HeaderContainer from "./layouts/Header/HeaderContainer.js";
import Nav from "./layouts/Nav/Nav";
import Main from "./layouts/Main/Main";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import MessagesContainer from "./pages/Messages/MessagesContainer";
import UsersContainer from "./pages/Users/UsersContainer";
import Login from "./pages/Login/Login";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <Main>
        <Route path="/messages" render={() => <MessagesContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
      </Main>
    </div>
  );
};

export default App;
