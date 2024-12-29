// Icons.js
import React from "react";

export const Forward = ({size}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 4V20L12 12L5 4ZM13 4V20L20 12L13 4Z" fill="currentColor" />
  </svg>
);

export const Reverse = ({size}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 20V4L12 12L19 20ZM11 20V4L4 12L11 20Z" fill="currentColor" />
  </svg>
);
