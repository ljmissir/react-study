import React, { Component } from "react";
import { ThemeConsumer, UserConsumer } from "../Context";

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
