import React from "react";
import { Image } from "mdx-deck";

export function ImageLayout({ src, children, opacity = 1 }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 80px",
        textAlign: "left"
      }}
    >
      <Image
        src={src}
        style={{
          opacity: opacity,
          position: "absolute",
          zIndex: 0,
          width: "100vw",
          height: "100vh"
        }}
      />
      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
    </div>
  );
}
