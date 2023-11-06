import * as React from "react";
import { Dice } from "./ReactDice";

export function PrimaryDice({ seed }: { seed: number }) {
  return (
    <Dice
      seed={seed}
      size={100}
      triggers={["Enter"]}
      faceBg="#fff"
      faces={[
        "./faces/image_part_001.png",
        "./faces/image_part_002.png",
        "./faces/image_part_003.png",
        "./faces/image_part_004.png",
        "./faces/image_part_005.png",
        "./faces/image_part_006.png"
      ]}
    />
  );
}

export function SpecialDice({ seed }: { seed: number }) {
  return (
    <Dice
      size={100}
      triggers={["Enter"]}
      faceBg="#fff"
      faces={[
        "./faces/image_part_007.png",
        "./faces/image_part_008.png",
        "./faces/image_part_009.png",
        "./faces/image_part_007.png",
        "./faces/image_part_008.png",
        "./faces/image_part_009.png"
      ]}
    />
  );
}
