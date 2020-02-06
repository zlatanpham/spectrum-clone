import App from 'next/app';
import React from 'react';
import AppContainer from 'components/AppContainer';
import '../styles/index.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    );
  }
}
export default MyApp;
