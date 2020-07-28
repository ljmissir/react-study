import React, { useRef } from "react";

class FormStore {
  constructor() {
    this.store = {};
    this.fieldEnetities = [];
    this.callbacks = {};
  }

  registEntity = (entity) => {
    this.fieldEnetities.push(entity);
    return () => {
      this.fieldEnetities = this.fieldEnetities.filter((item) => {
        return item !== entity;
      });
      delete this.store[entity.props.name];
    };
  };

  setCallback = (callback) => {
    this.callbacks = {
      ...this.callbacks,
      ...callback,
    };
  };

  setFieldsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    console.log("setFieldsValue", this.store, this.fieldEnetities);
    this.fieldEnetities.forEach((entity) => {
      const { name } = entity.props;
      Object.keys(newStore).forEach((key) => {
        if (key === name) {
          console.log(1);
          entity.onStoreChange();
        }
      });
    });
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

  submit = () => {
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

  getFieldValue = (name) => {
    return this.store[name];
  };

  getFieldsValue = () => {
    return this.store;
  };

  getForm() {
    return {
      setFieldsValue: this.setFieldsValue,
      getFieldValue: this.getFieldValue,
      registEntity: this.registEntity,
      getFieldsValue: this.getFieldsValue,
      submit: this.submit,
      setCallback: this.setCallback,
    };
  }
}

// 自定义hook
export default function useForm(form) {
  const formRef = useRef();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
