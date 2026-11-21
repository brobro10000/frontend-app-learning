import React from 'react';
import { defineMessages, FormattedMessage } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  notices: {
    id: 'enterprise.branding.footer.notices',
    defaultMessage: 'Licenses, attribution & source',
    description: 'Link to copyright notices, license texts, and local application source.',
  },
});

const LocalFooter = () => (
  <footer className="border-top p-4 text-center">
    <a href="http://localhost:1998">Course Atlas</a>
    <a className="d-block mt-2" href="http://localhost:8765/licenses.html">
      <FormattedMessage {...messages.notices} />
    </a>
  </footer>
);

export default LocalFooter;
