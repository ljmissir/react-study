/**
 * author：JeremyLiao
 * title：context跨层级跨组件间传值
 * description：此处展示的是用React内置的 useContext方法来获取所传值
 */
import React, { useContext } from "react";
import { ThemeContext, UserContext } from "../Context";

export default function UseContextPage(props) {
  const { themeColor } = useContext(ThemeContext);
  const { name } = useContext(UserContext);
  return (
    <div className="border">
      <h3 className={themeColor}>UseContextPage</h3>
      <p>{name}</p>
    </div>
  );
}
