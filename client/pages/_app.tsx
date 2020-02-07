import App from 'next/app';
import React from 'react';
import AppContainer from 'components/AppContainer';
import { ToastContainer } from 'react-toastify';
import '../styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
        <ToastContainer
          draggable
          className="w-auto m-0 min-h-auto"
          toastClassName="bg-transparent shadow rounded w-auto p-0 min-h-0"
          autoClose={4000}
          closeButton={false}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          hideProgressBar={true}
        />
      </>
    );
  }
}
export default MyApp;
