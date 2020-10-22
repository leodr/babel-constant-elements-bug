import React from "react";
import OtherComponent, { var _ref = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LazyComponent, null), /*#__PURE__*/React.createElement(OtherComponent, null)); } from "./components/other-component";
export default function App() {
  return _ref;
}
const LazyComponent = /*#__PURE__*/React.lazy(() => import("./components/lazy-component"));
