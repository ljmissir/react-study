/**
 * author：JeremyLiao
 * title：context跨层级跨组件间传值
 * description：此处展示的是用static contextType来获取context上下文，并取到themeColor值
 */
import React, { Component } from "react";
import { ThemeContext } from "../Context";
import { Button } from "antd";

export default class ContextType extends Component {
  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    const { themeColor } = this.context;
    return (
      <div className={themeColor}>
        <h3>ContextType</h3>
        <Button>提交</Button>
      </div>
    );
  }
}
