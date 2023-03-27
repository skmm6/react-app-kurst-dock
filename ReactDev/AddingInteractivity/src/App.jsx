import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RespondingToEvents from "./components/RespondingToEvents";
import StateAComponentsMemory from "./components/StateAComponentsMemory";
import RenderAndCommit from "./components/RenderAndCommit/RenderAndCommit";
import Image from "./components/RenderAndCommit/image";
import StateAsSnapshot from "./components/StateAsSnapshot";
import SeriesStateUpd from "./components/SeriesStateUpd";
import UpdatingObjectsState from "./components/UpdatingObjectsState";
import UpdatingArrayState from "./components/UpdatingArrayState";
import AppTodo from "./components/todo/AppTodo";

function App() {
  return (
    <div className="App">
      {/* <RespondingToEvents /> */}
      <div>===============================</div>
      <div>===============================</div>
      <div>===============================</div>
      {/* <StateAComponentsMemory /> */}
      <div>===============================</div>
      <div>===============================</div>
      <div>===============================</div>
      {/* <RenderAndCommit /> */}
      {/* <Image /> */}
      <div>===============================</div>
      <div>===============================</div>
      <div>===============================</div>
      {/* <StateAsSnapshot /> */}
      <div>===============================</div>
      <div>===============================</div>
      <div>===============================</div>
      {/* <SeriesStateUpd /> */}
      <div>===============================</div>
      <div>===============================</div>
      <div>===============================</div>
      {/* <UpdatingObjectsState /> */}
      <div>===============================</div>
      <div>===============================</div>
      <div>===============================</div>
      {/* <UpdatingArrayState /> */}
      <div>===============================</div>
      <div>===============================</div>
      <div>===============================</div>
      <AppTodo />
    </div>
  );
}

export default App;
