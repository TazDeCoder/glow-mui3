import { render } from '@testing-library/react';

import { List } from './List';

describe('<List />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(
        <List>
          <li>Foo</li>
          <li>Bar</li>
          <li>Baz</li>
        </List>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
