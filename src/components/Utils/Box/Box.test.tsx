import { render } from '@testing-library/react';

import { Box } from './Box';

describe('<Box />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(<Box>Foo</Box>);
      expect(container).toMatchSnapshot();
    });
  });
});
