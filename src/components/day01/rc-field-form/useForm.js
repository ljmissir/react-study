import React, { useRef } from "react";

class FormStore {
  constructor() {
    this.store = {};
    this.fieldEnetities = [];
    this.callbacks = {};
  }

  // 注册表单项
  registEnetity = (entity) => {
    this.fieldEnetities.push(entity);
    return () => {
      this.fieldEnetities.filter((item) => item !== entity);
      delete this.store[entity.props.name];
    };
  };

  // 设置表单项的值
  setFieldsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    this.fieldEnetities.forEach((entity) => {
      const { name } = entity.props;
      Object.keys(newStore).forEach((key) => {
        if (key === name) {
          entity.onStoreChange();
        }
      });
    });
  };

  // 获取表单项值
  getFieldValue = (name) => {
    return this.store[name];
  };

  // 获取所以表单项的值
  getFieldsValue = () => {
    return this.store;
  };

  validate = () => {
    let err = [];
    // todo
    this.fieldEnetities.forEach((entity) => {
      const { name, rules } = entity.props;
      let value = this.getFieldValue(name);
      let rule = rules && rules[0];
      if (rule && rule.required && (value === undefined || value === "")) {
        //  出错
        err.push({
          [name]: rules.message,
          value,
        });
      }
    });
    return err;
  };

  // 表单提交
  submit = () => {
    console.log("提交", this.fieldEnetities);
    let err = this.validate();
    // 在这里校验 成功的话 执行onFinish ，失败执行onFinishFailed
    const { onFinish, onFinishFailed } = this.callbacks;
    if (err.length === 0) {
      // 成功的话 执行onFinish
      onFinish(this.getFieldsValue());
    } else if (err.length > 0) {
      // ，失败执行onFinishFailed
      onFinishFailed(err);
    }
  };

  setCallback = (callback) => {
    this.callbacks = {
      ...this.callbacks,
      ...callback,
    };
  };

  // 获取表单所有属性和方法
  getForm = () => {
    return {
      setFieldsValue: this.setFieldsValue,
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      submit: this.submit,
      registEnetity: this.registEnetity,
      setCallback: this.setCallback,
    };
  };
}

// 自定义hook
export default (form) => {
  const formRef = useRef();
  if (!formRef.current) {
    const formStore = new FormStore();
    formRef.current = formStore.getForm();
  }
  return [formRef.current];
};
