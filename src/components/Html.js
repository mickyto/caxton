import React from 'react';
import { string } from 'prop-types';

export default function Html({ markup }) {
    return (
        <html>
        <head>
            <link rel='stylesheet' href='/assets/bundle.css' type="text/css" />
        </head>
        <body style={{ margin: '0px' }} >
        <div id="main-app" dangerouslySetInnerHTML={{ __html: markup }} />
        <script src="/assets/bundle.js" />
        </body>
        </html>
    );
}

Html.propTypes = {
    markup: string.isRequired
};
