import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Doo from './index';

describe('<Doo />', () => {
  it('render Doo with dumi', () => {
    const msg = 'dumi';

    render(<Doo title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
