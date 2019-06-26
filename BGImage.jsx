import React from "react";

export function BGImage({ src }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vw",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1,
        background: src
      }}
    />
  );
}

export default BGImage;
