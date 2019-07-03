import React from "react";
import { ImageLayout } from "./ImageLayout";

export function ExamplesLayout({
  children,
  backgroundSrc,
  backgroundSize,
  backgroundOpacity = 0.3
}) {
  console.log(children);
  let childrenn = Array.isArray(children) ? children : [children];
  console.log(childrenn);

  return (
    <ImageLayout
      style={{ textAlign: "left", justifyContent: "flex-end", height: "90vh" }}
      className="definition-layout"
      src={backgroundSrc}
      opacity={backgroundOpacity}
      size={backgroundSize}
    >
      <div style={{ textAlign: "center" }}>
        {childrenn.map(child => {
          function format(str) {
            if (str && str.props && str.props.children) {
              return {
                ...str,
                props: {
                  ...str.props,
                  children: format(str.props.children)
                }
              };
            }
            if (typeof str === "string") {
              return str.split("VS").reduce((acc, x) => {
                if (!acc.length) {
                  return [x];
                }
                return [...acc, <br />, "←→", <br />, x];
              }, []);
            }
            return str;
          }

          return (
            <>
              <br style={{ marginTop: "-24px", display: "block" }} />
              {format(child)}
            </>
          );
        })}
      </div>
    </ImageLayout>
  );
}
