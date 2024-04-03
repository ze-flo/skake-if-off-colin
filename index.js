import React from 'react';
import { render } from 'react-dom';
import { ChevronButton } from '@zendeskgarden/react-buttons';
import { DEFAULT_THEME, ThemeProvider } from '@zendeskgarden/react-theming';
import { Paragraph } from '@zendeskgarden/react-typography';

const button = React.createElement(ChevronButton, {
  key: 'btn1',
  onClick: () => console.log('clicked!'),
  children: 'Click me!',
});
const themeProvider = React.createElement(ThemeProvider, {
  theme: { ...DEFAULT_THEME },
  children: [button, Paragraph],
});

function foo() {
  const root = document.getElementById('root');
  render(themeProvider, root);
}

document.addEventListener('DOMContentLoaded', foo);
