import { render } from '@testing-library/react';

import { SVG } from './SVG';

describe('<SVG />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(<SVG>Foo</SVG>);
      expect(container).toMatchSnapshot();
    });
  });
});
