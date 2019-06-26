import React from "react";
import { theme } from "./theme";

export function ColumnsLayout({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      <div
        style={{
          columns: "50% 2"
        }}
      >
        {children}
      </div>
    </>
  );
}
