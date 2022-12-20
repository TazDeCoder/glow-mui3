import { render } from '@testing-library/react';

import { Flex } from './Flex';

describe('<Flex />', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(<Flex>Foo</Flex>);
      expect(container).toMatchSnapshot();
    });
  });
});
