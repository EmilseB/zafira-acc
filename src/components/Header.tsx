import React, { FunctionComponent } from "react";

/**
 * Types
 */

interface HeaderProps {}

/**
 * Styled components
 */

/**
 * Header component
 */

export const Header: FunctionComponent<HeaderProps> = ({}) => {
  return (
    <div
      style={{
        backgroundColor: "#3c3c3c",
        padding: "16px",
      }}
    >
      Home
    </div>
  );
};
