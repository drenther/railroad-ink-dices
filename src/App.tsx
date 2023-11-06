import * as React from "react";
import { PrimaryDice, SpecialDice } from "./Dice";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <a href="./rules.pdf" target="_blank" download className="rules">
        Rules
      </a>
      <PrimaryDice seed={1283365823} />
      <PrimaryDice seed={5213689091} />
      <PrimaryDice seed={5581544} />
      <SpecialDice seed={7367006} />
    </div>
  );
}
