import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import DenofProjects from "./views/denOfProjectsView";

function App() {
  return (
    <Provider store={store}>
      <DenofProjects />
    </Provider>
  );
}

export default App;
