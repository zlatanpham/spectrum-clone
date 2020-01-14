import React from 'react';
import { render } from '@testing-library/react';
import ExampleComponent from '.';

describe('ExampleComponent', () => {
  it('should match snapshot', () => {
    const { container } = render(<ExampleComponent />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
