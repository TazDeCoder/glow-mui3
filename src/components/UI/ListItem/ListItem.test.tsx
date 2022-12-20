import { render } from '@testing-library/react';

import { ListItem } from './ListItem';

describe('<ListItem />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(<ListItem>Foo</ListItem>);
      expect(container).toMatchSnapshot();
    });
  });
});
