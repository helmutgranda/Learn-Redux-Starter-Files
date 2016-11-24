import Raven from 'raven-js';

const sentry_key = 'b67817fb314b40b9a2230613a00c8317';
const sentry_app = '117031';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
