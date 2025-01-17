"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DefaultLayout_1 = require("./DefaultLayout");
var BlogLayout_1 = require("./BlogLayout");
var ShopLayout_1 = require("./ShopLayout");
var layoutMap = {
    "default": DefaultLayout_1["default"],
    blog: BlogLayout_1["default"],
    shop: ShopLayout_1["default"]
};
var DynamicLayout = function (_a) {
    var children = _a.children, layoutData = _a.layoutData;
    var Layout = layoutMap[layoutData.type] || DefaultLayout_1["default"];
    return (react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement("div", null, "Loading...") },
        react_1["default"].createElement(Layout, { layoutData: layoutData }, children)));
};
exports["default"] = DynamicLayout;
