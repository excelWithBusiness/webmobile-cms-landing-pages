function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FaqPage as FaqPageWithoutQuery } from "./FaqPage";
export var FaqPageWrapper = function FaqPageWrapper(props) {
  return React.createElement(FaqPageWithoutQuery, _extends({}, props, {
    landingPageContent: props.landingPageContent
  }));
};
export * from "./FaqPage.types";
//# sourceMappingURL=index.js.map