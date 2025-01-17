"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BlogLayout = function (_a) {
    var children = _a.children, layoutData = _a.layoutData;
    return (react_1["default"].createElement("div", { className: "blog-layout" },
        react_1["default"].createElement("main", null, children)));
};
exports["default"] = BlogLayout;
