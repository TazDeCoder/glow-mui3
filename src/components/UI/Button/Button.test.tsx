import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(<Button />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('User events', () => {
    it('triggers onClick handler when clicked', async () => {
      const clickHandler = jest.fn();
      const { getByRole } = render(
        <Button onClick={clickHandler}>Accept</Button>,
      );
      const btnEl = getByRole('button');
      await userEvent.click(btnEl);
      expect(clickHandler).toHaveBeenCalled();
    });
  });
});
