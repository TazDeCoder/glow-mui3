import { render } from '@testing-library/react';

import { Typography } from './Typography';

describe('<Typography />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(<Typography>Foo</Typography>);
      expect(container).toMatchSnapshot();
    });
  });
});
