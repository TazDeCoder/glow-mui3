import { render } from '@testing-library/react';

import { Portal } from './Portal';

describe('<Portal />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(<Portal>Foo</Portal>);
      expect(container).toMatchSnapshot();
    });
  });
});
