import React from 'react';
import './App.css';
import FilmTimeline from './Components/FilmTimeline/FilmTimeline';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function App() {

  return (
    <div className="App">
        <Header>
          <h1 className="App-header">Ghibli Film Timeline</h1>
        </Header>

        <Content>

          <FilmTimeline/>

        </Content>

        <Footer>

        </Footer>
    </div>
  );
}

export default App;
