import React, { Component, useEffect } from "react";
import Form, { Field } from "../../components/day01/my-rc-field-form/index";
import Input from "../../components/day01/Input";
import { Button } from "antd";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default function MyRCFieldForm() {
  const [form] = Form.useForm();

  const onFinish = (val) => {
    console.log("onFinish", val);
  };

  // 表单校验失败执行
  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val);
  };

  useEffect(() => {
    form.setFieldsValue({ username: "ljmissir" });
  }, []);

  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Field name="username" rules={[nameRules]}>
        <Input placeholder="输入用户名" />
      </Field>
      <Field name="password" rules={[passworRules]}>
        <Input placeholder="输入密码" />
      </Field>
      <Button type="primary" onClick={form.submit}>
        登录
      </Button>
    </Form>
  );
}
