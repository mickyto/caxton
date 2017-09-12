import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Html from './components/Html';
import App from './components/App';

export default function middleware(req, res) {
  const markup = ReactDOMServer.renderToString(
      <App />
  );

  const html = ReactDOMServer.renderToStaticMarkup(<Html markup={markup} />);

  res.send('<!DOCTYPE html>' + html);
}
