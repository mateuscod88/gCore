import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { CarContainer } from './components/CarContainer';
import  CarAddContainer  from './components/CarAddContainer';
import { RepairContainer } from './components/RepairContainer';
import RepairAddContainer from './components/RepairAddContainer';




export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/car-grid' component={CarContainer} />
            <Route path='/car-add' component={CarAddContainer} />
            <Route path='/repair-grid' component={RepairContainer} />
            <Route path='/repair-add' component={RepairAddContainer} />

      </Layout>
    );
  }
}
