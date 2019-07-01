import React from "react";
import { theme } from "./theme";
import { ImageLayout } from "./ImageLayout";

export function DefinitionLayout({
  num,
  title,
  translation,
  children,
  backgroundSrc,
  backgroundOpacity
}) {
  console.log(children);
  let childrenn = Array.isArray(children) ? children : [children];
  console.log(childrenn);

  return (
    <ImageLayout
      style={{ textAlign: "left" }}
      className="definition-layout"
      src={backgroundSrc}
      opacity={backgroundOpacity}
    >
      <h1 style={{ position: "relative" }}>
        {num && (
          <span
            style={{
              position: "absolute",
              transform: "translateX(-100%)",
              marginLeft: "-20px"
            }}
          >
            {num}.
          </span>
        )}
        {title}
        <br />
        <small style={{ fontFamily: theme.font }}>{translation}</small>
      </h1>
      {num
        ? childrenn.map(child => {
            if (typeof child === "string") return <>« {child} »</>;
            else {
              return {
                ...child,
                props: {
                  ...child.props,
                  children: ["« ", child.props.children, " »"]
                }
              };
            }
          })
        : childrenn}
    </ImageLayout>
  );
}
