import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FooterDiv from '../../components/header&footer/FooterDiv';

describe('<Footer />', () => {
  it('Renders Footer Content in the footer', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(getByText(/content/i)).toBeInTheDocument();
  });

  it('Render Projects in the footer', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(getByText(/Projects/i)).toBeInTheDocument();
  });

  it('Render an email in the footer', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(getByText(/aremu.baba70@gmail.com/i)).toBeInTheDocument();
  });

  it('Render at least one phone number in the footer', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(getByText(/ +2348032236791 /i)).toBeInTheDocument();
  });

  it('Render social media follow us in the footer', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(getByText(/Follow us/i)).toBeInTheDocument();
  });
});
