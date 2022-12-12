import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  describe('Snapshots', () => {
    it('should render correctly', () => {
      const { container } = render(<Checkbox />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('User events', () => {
    it('triggers checked state to true when toggled once', async () => {
      const { getByRole } = render(<Checkbox />);
      const checkboxEl = getByRole('checkbox');
      await act(async () => {
        await userEvent.click(checkboxEl);
      });
      expect(checkboxEl).toBeChecked();
    });
    it('triggers checked state back to false when toggled twice', async () => {
      const { getByRole } = render(<Checkbox />);
      const checkboxEl = getByRole('checkbox');
      await act(async () => {
        await userEvent.click(checkboxEl);
        await userEvent.click(checkboxEl);
      });
      expect(checkboxEl).not.toBeChecked();
    });
  });
});
