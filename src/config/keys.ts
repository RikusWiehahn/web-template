export let serverURL: string = '';
export let clientURL: string = '';

if (process.browser) {
  if (window.location.hostname.includes('localhost')) {
    // dev browser
    serverURL = 'http://localhost:5000';
    clientURL = 'http://localhost:3000';
  } else {
    // prod browser
    clientURL = '';
    serverURL = '';
  }
} else {
  if (process.env.NODE_ENV === 'production') {
    // prod server
    clientURL = '';
    serverURL = '';
  } else {
    // dev server
    serverURL = 'http://localhost:5000';
    clientURL = 'http://localhost:3000';
  }
}
