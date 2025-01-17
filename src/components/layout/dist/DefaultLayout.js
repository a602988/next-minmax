"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DefaultLayout = function (_a) {
    var children = _a.children, layoutData = _a.layoutData;
    return (react_1["default"].createElement("div", { className: "default-layout" },
        react_1["default"].createElement("main", null, children)));
};
exports["default"] = DefaultLayout;
