"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import Scenes from "./Scenes";
import { View } from "@react-three/drei";

/**
 * Props for `SkyDive`.
 */
export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

/**
 * Component for "SkyDive" Slices.
 */
const SkyDive = ({ slice }: SkyDiveProps): JSX.Element => {
  return (
    <Bounded
      className="skyDive h-screen"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="sr-only">{slice.primary.sentence}</h2>
      <View className="h-screen w-screen">
        <Scenes
          flavor={slice.primary.flavour}
          sentence={slice.primary.sentence}
        />
      </View>
    </Bounded>
  );
};

export default SkyDive;
