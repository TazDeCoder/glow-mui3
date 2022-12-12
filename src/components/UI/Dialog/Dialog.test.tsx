import { render } from '@testing-library/react';

import { Dialog } from './Dialog';

describe('<Dialog />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(<Dialog title="Foo" subtitle="Bar" open />);
      expect(container).toMatchSnapshot();
    });
  });
});
