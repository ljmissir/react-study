import React, { useEffect, useState } from "react";

export default Login = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(loading);
  }, []);
  return <div></div>;
};
