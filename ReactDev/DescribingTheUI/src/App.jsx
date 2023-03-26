import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Gallery from "./components/gallery/Gallery";
import Profile from "./components/gallery/Profile";
import PackingList from "./components/PackingList";
import RenderingLists from "./components/RenderingLists";
import Clock from "./components/pure/Clock";

function App() {
  return (
    <div className="App">
      <Gallery />
      <div>=====================================</div>
      <PackingList />
      <div>=====================================</div>
      <RenderingLists />
      <div>=====================================</div>
      <Clock />
    </div>
  );
}

export default App;
