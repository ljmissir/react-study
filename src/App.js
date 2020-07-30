import React from "react";
import ContextPage from "./pages/day01/ContextPage";
import MyRCFieldForm from "./pages/day01/MyRCFieldForm";
import RCFieldForm from "./pages/day01/RCFieldForm";
import RCForm from "./pages/day01/RCForm";
import MyRCForm from "./pages/day01/MyRCForm";
import ReduxPage from "./pages/day02/ReduxPage";
import ReactReduxPage from "./pages/day03/ReactReduxPage";
import HocPage from "./pages/day01/HocPage";
import "./App.css";

const WrapperComp = HocPage(ReactReduxPage);

function App(props) {
  return <WrapperComp />;
}

export default App;
