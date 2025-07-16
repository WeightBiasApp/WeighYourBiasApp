

import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  property1: "selected" | "default";
  className: any;
}

export const Heartbutton = ({ property1, className }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`heartbutton ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    />
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "selected",
        };
    }
  }

  if (state.property1 === "selected") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}
