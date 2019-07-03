import React from "react";
import { theme } from "./theme.js";
import { Image, Appear } from "mdx-deck";

export function ImageLayout({
  src,
  children,
  opacity = 1,
  size,
  style,
  appear = false
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 80px",
        textAlign: "left",
        ...(style || {})
      }}
    >
      <Image
        src={src}
        style={{
          opacity: opacity,
          position: "absolute",
          zIndex: 0,
          top: 0,
          width: "100vw",
          height: "100vh"
        }}
        size={size || "cover"}
      />
      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>

      {appear && (
        <Appear>
          <Image
            src={src}
            style={{
              position: "absolute",
              zIndex: 20,
              top: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: theme.colors.background
            }}
            size={size || "cover"}
          />
        </Appear>
      )}
    </div>
  );
}
