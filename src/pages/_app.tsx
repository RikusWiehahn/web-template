import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import Router from 'next/router';
import withReduxStore, { Store } from '../config/ReduxStore';
import { ToastContainer } from 'react-toastify';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import '../../public/static/nprogress.css';
import '../../public/static/ReactToastify.css';
import '../config/style.scss';
import { LoadingIndicator } from '../components/LoadingIndicator';

Router.events.on('routeChangeStart', (url: string) => {
  console.log(`%cLoading: ${url}`, 'color: green');
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => NProgress.done());

interface Props {
  reduxStore: Store;
}

class MyApp extends App<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    let persistor = persistStore(reduxStore);
    return (
      <div>
        <ToastContainer
          position="bottom-center"
          closeButton={false}
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
        <Provider store={reduxStore}>
          <PersistGate
            loading={
              <div>
                <LoadingIndicator fullscreen />
                <Component {...pageProps} />
              </div>
            }
            persistor={persistor}
          >
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default withReduxStore(MyApp);
