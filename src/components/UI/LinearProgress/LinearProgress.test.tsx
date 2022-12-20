import { render } from '@testing-library/react';

import { LinearProgress } from './LinearProgress';

describe('<LinearProgress />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(<LinearProgress />);
      expect(container).toMatchSnapshot();
    });
  });
});
