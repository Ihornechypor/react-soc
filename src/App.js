import { Route } from "react-router-dom";
import "./theme/global-styles.css";
import Header from "./layouts/Header/Header";
import Nav from "./layouts/Nav/Nav";
import Main from "./layouts/Main/Main";
import Profile from "./pages/Profile/Profile";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import MessagesContainer from "./pages/Messages/MessagesContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Main>
        <Route path="/messages" render={() => <MessagesContainer />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
      </Main>
    </div>
  );
};

export default App;
