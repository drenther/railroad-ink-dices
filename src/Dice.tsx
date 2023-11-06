import * as React from "react";
import { Dice } from "./ReactDice";

interface DiceProps {
  seed: string;
}

export function PrimaryDice({ seed }: DiceProps) {
  return (
    <Dice
      seed={seed}
      size={100}
      triggers={["Enter", "click"]}
      faceBg="#b4b4b4"
      faces={[
        "./faces/image_part_001.png",
        "./faces/image_part_002.png",
        "./faces/image_part_003.png",
        "./faces/image_part_004.png",
        "./faces/image_part_005.png",
        "./faces/image_part_006.png",
      ]}
    />
  );
}

export function SpecialDice({ seed }: DiceProps) {
  return (
    <Dice
      seed={seed}
      size={100}
      triggers={["Enter", "click"]}
      faceBg="#b4b4b4"
      faces={[
        "./faces/image_part_007.png",
        "./faces/image_part_008.png",
        "./faces/image_part_009.png",
        "./faces/image_part_007.png",
        "./faces/image_part_008.png",
        "./faces/image_part_009.png",
      ]}
    />
  );
}

export function RiverDice({ seed }: DiceProps) {
  return (
    <Dice
      size={100}
      seed={seed}
      triggers={["Enter", "click"]}
      faceBg="#0078b6"
      faces={[
        "./faces/image_part_010.png",
        "./faces/image_part_011.png",
        "./faces/image_part_012.png",
        "./faces/image_part_013.png",
        "./faces/image_part_010.png",
        "./faces/image_part_013.png",
      ]}
    />
  );
}

export function LakeDice({ seed }: DiceProps) {
  return (
    <Dice
      size={100}
      seed={seed}
      triggers={["Enter", "click"]}
      faceBg="#a8dffb"
      faces={[
        "./faces/image_part_014.png",
        "./faces/image_part_015.png",
        "./faces/image_part_016.png",
        "./faces/image_part_017.png",
        "./faces/image_part_018.png",
        "./faces/image_part_019.png",
      ]}
    />
  );
}
