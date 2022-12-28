import React from 'react';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Write from '../pages/Write';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';


export default function router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/write' element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}