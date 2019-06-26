import React from "react";
import { Image } from "mdx-deck";

export function ImageLayout({ src, children }) {
  console.log(image);
  return (
    <Image
      src={src}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </Image>
  );
}
