import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
// import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { MembersList } from './components/MembersList';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/members' element={<MembersList />} />
        </Routes> */}
        <Login />
        <br />
        <br />
        <MembersList />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
