// import React from "react";
// import ReactDOM from "react-dom";
import "lib-flexible";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { Provider } from "react-redux";
// import { Provider } from "./k-react-redux";
import React from "./k-react/index";
import ReactDOM from "./k-react/react-dom";
import Component from "./k-react/Component";
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

class ClassComponent extends Component {
  static defaultProps = {
    color: "pink",
  };
  render() {
    return (
      <div className="border">
        class组件-{this.props.name}
        <p className={this.props.color}>omg</p>
      </div>
    );
  }
}

function FunctionComponent(props) {
  return <div className="border">函数组件-{props.name}</div>;
}

const jsx = (
  <div className="border">
    <p>react 源码</p>
    <a href="https://www.baidu.com/">百度</a>
    <ClassComponent name="class" color="red" />
    <FunctionComponent name="function" />
    {[1, 2].map((item) => (
      <React.Fragment key={item}>{item}</React.Fragment>
    ))}
    {/* <>
      <h1>aaa</h1>
      <h1>bbb</h1>
    </> */}
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
