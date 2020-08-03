import React from "react";
// import ContextPage from "./pages/day01/ContextPage";
// import MyRCFieldForm from "./pages/day01/MyRCFieldForm";
// import RCFieldForm from "./pages/day01/RCFieldForm";
// import RCForm from "./pages/day01/RCForm";
// import MyRCForm from "./pages/day01/MyRCForm";
// import ReduxPage from "./pages/day02/ReduxPage";
// import ReactReduxPage from "./pages/day03/ReactReduxPage";
// import HocPage from "./pages/day01/HocPage";
// import HooksPage from "./pages/day03/HooksPage";
import "./App.css";
import HomePage from "./pages/day04/HomePage";
import UserPage from "./pages/day04/UserPage";
import LoginPage from "./pages/day04/LoginPage";
import _404Page from "./pages/day04/_404Page";
import Product from "./pages/day04/Product";
import WelcomePage from "./pages/day04/WelcomePage";

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   useRouteMatch,
//   useHistory,
//   useLocation,
//   useParams,
//   withRouter,
//   Prompt,
// } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  Prompt,
} from "./k-react-router-dom";

// const WrapperComp = HocPage(HooksPage);

// !react-router 组件有三种渲染方式，优先级依次为 children > component > render
function App(props) {
  return (
    <div className="app">
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user" style={{ padding: "0 20px" }}>
          用户中心
        </Link>
        <Link to="/login">登录</Link>
        <Link to="/product/123" style={{ padding: "0 20px" }}>
          商品
        </Link>

        <Switch>
          <Route
            exact
            path="/"
            // children={children}
            component={HomePage}
            // render={render}
          >
            {/* children 0000 */}
          </Route>
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/product/:id" render={() => <Product />} />

          <Route component={_404Page} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

function children(props) {
  console.log("children props", props); //sy-log
  return <div>children</div>;
}

function render(props) {
  console.log("render props", props); //sy-log
  return <div>render</div>;
}

/**
 * ! 我们传给setTimeout的每一个函数表达式实际上都引用了相同作用域里的同一个i;
 * ! setTimeout会在若干毫秒的延时后执行一个函数，并且是在for循环结束后;
 * ! for循环结束后，i的值为10。 所以当函数被调用的时候，它会打印出10。
 */
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}
