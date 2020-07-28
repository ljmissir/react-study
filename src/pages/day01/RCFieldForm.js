import React from "react";
import Form, { Field } from "../../components/day01/rc-field-form/index";
import Input from "../../components/day01/Input";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default function RCFieldForm() {
  const [form] = Form.useForm();

  const onFinish = (val) => {
    console.log("onFinish", val);
  };

  // 表单校验失败执行
  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val);
  };
  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Field name="username" rules={[nameRules]}>
        <Input placeholder="请输入用户名" />
      </Field>
      <Field name="password" rules={[passworRules]}>
        <Input placeholder="请输入密码" />
      </Field>
      <button>登录</button>
    </Form>
  );
}
