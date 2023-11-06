import { nanoid } from "nanoid";
import * as React from "react";
import startCase from "lodash/startCase";
import { LakeDice, PrimaryDice, RiverDice, SpecialDice } from "./Dice";
import "./styles.css";

const seeds = Array(8).fill(1).map(nanoid);

const variant = {
  base: "base",
  rivers: "rivers",
  lakes: "lakes",
} as const;

type Variant = keyof typeof variant;

const variants = Object.keys(variant);

export default function App() {
  const [activeVariant, setVariant] = React.useState<Variant>(variant.base);

  return (
    <div className="app">
      <div className="header">
        <a href="./rules.pdf" target="_blank" download className="rules">
          Rules
        </a>
        {variants.map((v) => (
          <div className="variant" key={v}>
            <input
              type="radio"
              name="variant"
              value={v}
              id={v}
              checked={activeVariant === v}
              onChange={() => setVariant(v as any)}
            />
            <label htmlFor={v}>{startCase(v)}</label>
          </div>
        ))}
      </div>
      <PrimaryDice seed={seeds[0]} />
      <PrimaryDice seed={seeds[1]} />
      <PrimaryDice seed={seeds[2]} />
      <SpecialDice seed={seeds[3]} />
      {activeVariant === variant.rivers && (
        <>
          <RiverDice seed={seeds[4]} />
          <RiverDice seed={seeds[5]} />
        </>
      )}
      {activeVariant === variant.lakes && (
        <>
          <LakeDice seed={seeds[6]} />
          <LakeDice seed={seeds[7]} />
        </>
      )}
    </div>
  );
}
