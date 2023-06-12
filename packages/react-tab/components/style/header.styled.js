import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
export var Header = styled.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n\n  ul {\n    display: flex;\n    gap: 20px;\n    padding: 0;\n    list-style: none;\n    border-bottom: 2px solid ghostwhite;\n\n    li {\n      position: relative;\n      padding: 5px 0;\n      text-transform: capitalize;\n    }\n\n    :hover {\n      cursor: pointer;\n    }\n  }\n\n  .active {\n    color: ", ";\n  }\n\n  .active:before {\n    content: \"\";\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    top: 100%;\n    bottom: 0;\n    display: block;\n    background-color: ", ";\n  }\n\n  @media only screen and (min-width: 0px) and (max-width: 992px) {\n    max-width: 100%;\n    overflow: auto;\n\n    ul {\n      li {\n        white-space: nowrap;\n      }\n    }\n  }\n"], ["\n  width: 100%;\n\n  ul {\n    display: flex;\n    gap: 20px;\n    padding: 0;\n    list-style: none;\n    border-bottom: 2px solid ghostwhite;\n\n    li {\n      position: relative;\n      padding: 5px 0;\n      text-transform: capitalize;\n    }\n\n    :hover {\n      cursor: pointer;\n    }\n  }\n\n  .active {\n    color: ", ";\n  }\n\n  .active:before {\n    content: \"\";\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    top: 100%;\n    bottom: 0;\n    display: block;\n    background-color: ", ";\n  }\n\n  @media only screen and (min-width: 0px) and (max-width: 992px) {\n    max-width: 100%;\n    overflow: auto;\n\n    ul {\n      li {\n        white-space: nowrap;\n      }\n    }\n  }\n"])), function (_a) {
    var color = _a.color;
    return (color ? color : "red");
}, function (_a) {
    var color = _a.color;
    return (color ? color : "red");
});
var templateObject_1;
//# sourceMappingURL=header.styled.js.map