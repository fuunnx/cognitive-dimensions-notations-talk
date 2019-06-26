import React from "react";
import { theme } from "./theme";

export function DefinitionLayout({ title, translation, children }) {
  return (
    <>
      <h1 style={{ textAlign: "left" }}>
        {title}
        <br />
        <small style={{ fontFamily: theme.font }}>EN: {translation}</small>
      </h1>
      « {children} »
    </>
  );
}
