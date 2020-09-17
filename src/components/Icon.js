import React from "react";

const importAll = (requireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("icons", true, /\.svg$/));
} catch {}

function Icon(props) {
  return (
    <svg className="icon">
      {props.name && <use xlinkHref={props.name}></use>}
    </svg>
  );
}

export default Icon;
