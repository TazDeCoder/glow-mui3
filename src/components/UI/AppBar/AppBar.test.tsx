import { render } from '@testing-library/react';

import { AppBar } from './AppBar';

describe('<AppBar />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(<AppBar title="Foo" />);
      expect(container).toMatchSnapshot();
    });
  });
});
