import React from "react";
import { ImageLayout } from "./ImageLayout";

export function ExamplesLayout({ children, backgroundSrc, backgroundOpacity }) {
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
