import { Route, BrowserRouter } from "react-router-dom";
import "./theme/global-styles.css";
import Header from "./layouts/Header/Header";
import Nav from "./layouts/Nav/Nav";
import Main from "./layouts/Main/Main";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Main>
          <Route path="/messages" component={Messages} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </Main>
      </div>
    </BrowserRouter>
  );
};

export default App;
