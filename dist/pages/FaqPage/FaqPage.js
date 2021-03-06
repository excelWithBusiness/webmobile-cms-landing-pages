import React from 'react';
import { Cell, Grid, Row, Spacer } from '@excelwithbusiness/webmobile-sc-components';
import { Main } from "./Main/Main";
import { Content } from "./Content/Content";
export var FaqPage = function FaqPage(_ref) {
  var landingPageContent = _ref.landingPageContent;
  var slices = landingPageContent.slices;
  return React.createElement(React.Fragment, null, React.createElement(Main, {
    slices: slices
  }), React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(Spacer, {
    size: "md"
  }), React.createElement(Content, {
    slices: slices
  })))));
};
//# sourceMappingURL=FaqPage.js.map