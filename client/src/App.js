import React from "react";
import TodoTemplate from "./components/todoTemplate";
import SimpleSlider from "./components/MainImage";
import TopHeader from "./components/TopHeader";
import { Route } from "react-router-dom";
import Home from "./containers/Home";
import GameIntro from "./containers/GamaIntro";

const App = () => {
  return (
    <div>
      {/*  <div className="Header">


</div>
<div className="Body">

</div>
<SimpleSlider />
  */}
      <TopHeader />
      <TodoTemplate></TodoTemplate>
      <Route path="/" component={Home} />
    </div>
  );
};

export default App;

// 터미널 설치 목록
// yarn add antd
// yarn add react-responsive-carousel
// yarn add @ant-design/icons@4.0.0
