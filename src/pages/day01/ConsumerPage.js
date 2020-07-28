/**
 * author：JeremyLiao
 * title：context跨层级跨组件间传值
 * description：此处展示的是用Consumer（消费组件）来作为一个组件并在组件内部取的context所传递的值
 */
import React, { Component } from "react";
import { ThemeConsumer, UserConsumer } from "../../Context";

export default class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <h3>ConsumerPage</h3>
        <ThemeConsumer>
          {(themeContext) => (
            <div className={themeContext.themeColor}>
              omg
              <UserConsumer>
                {(userContext) => <p>{userContext.name}</p>}
              </UserConsumer>
            </div>
          )}
        </ThemeConsumer>
      </div>
    );
  }
}
