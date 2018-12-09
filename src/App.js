import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import './config/reactotron';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Provider store={store}>
          <BrowserRouter>
            <Wrapper>
              <Container>
                <Sidebar />
                <Content>
                  <Header />
                  <Routes />
                </Content>
              </Container>
              <Player />
            </Wrapper>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
