require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header.js'

const HomePage = () => <div>Home Page</div>;
const UsersPage = () => <div>Users Page</div>;
const PrimaryLayout = () => (
  <div className="primary-layout">
    <Header></Header>
    <main>
      <Route path="/" exact component={HomePage}/>
      <Route path="/users" component={UsersPage}/>
    </main>
  </div>
);

class AppComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout/>
      </BrowserRouter>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
