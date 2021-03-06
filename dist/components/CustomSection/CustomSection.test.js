import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { CustomSection } from "./index";
import { mountWithTheme } from 'webmobile-sc-components';
describe('Content:Common:Components:CustomSection', function () {
  afterEach(cleanup);
  it('renders a section', function () {
    var component = mountWithTheme(React.createElement(CustomSection, null, "Test"));
    var section = component.find('section');
    expect(section).toHaveLength(1);
  });
});
//# sourceMappingURL=CustomSection.test.js.map