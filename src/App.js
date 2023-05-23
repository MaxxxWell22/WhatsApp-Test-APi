import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Tel } from './components/Tel/Tel';
import { Chat } from './components/Chat/Chat';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/tel' element={<Tel />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>
    </div>
  )
};


export default App;