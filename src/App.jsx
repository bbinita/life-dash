import React from "react";
import Quote from "./Components/Quote";
import Weather from "./Components/Weather";
import TodoList from "./Components/Todolist";
import Pomodoro from "./Components/Pomodoro";
import Notes from "./Components/Note";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🌟 LifeDash – Your Daily Dashboard</h1>
      <div className="widgets">
        <Quote />
        <Weather />
        <TodoList />
        <Pomodoro />
        <Notes />
      </div>
    </div>
  );
}

export default App;
