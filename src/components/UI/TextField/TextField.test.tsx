import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField } from './TextField';

describe('<TextField />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(<TextField />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('User events', () => {
    it('displays user typed input', async () => {
      const { getByRole } = render(<TextField />);
      const textboxEl = getByRole('textbox');
      await userEvent.click(textboxEl);
      await userEvent.type(textboxEl, 'Hello, world!');
      expect(textboxEl).toHaveValue('Hello, world!');
    });
  });
});
