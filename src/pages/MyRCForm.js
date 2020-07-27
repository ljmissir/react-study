import React, { Component } from "react";
// import { createForm } from "rc-form";
import createForm from "../components/my-rc-form";
import Input from "../components/Input";

const nameRules = {
  required: true,
  message: "请输入手机号！",
  pattern: /^1[3|4|5|6|7|8|9]\d{9}$/,
};
const passworRules = {
  required: true,
  message: "请输入字母开头的6~8位数字字母组合密码",
  pattern: /^[A-Za-z]{1}[A-Za-z0-9]{5,7}$/,
};

@createForm
class MyRCForm extends Component {
  submit = () => {
    const { getFieldsValue, validateFields } = this.props.form;
    console.log(getFieldsValue());
    validateFields((err, val) => {
      if (err) {
        console.log("err", err);
      } else {
        console.log("校验成功", val);
      }
    });
  };

  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h3>MyRCForm</h3>
        {getFieldDecorator("username", { rules: [nameRules] })(
          <Input placeholder="请输入手机号" />
        )}
        {getFieldDecorator("password", { rules: [passworRules] })(
          <Input
            type="password"
            placeholder="请输入字母开头的6~8位数字字母组合密码"
          />
        )}
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}

export default MyRCForm;
