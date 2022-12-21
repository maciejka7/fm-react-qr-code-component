import { useState } from 'react';
import qrCode from './assets/image-qr-code.png';
import './App.css';
import MainLayout from './layouts/Main';

function App() {
  return <main className='flex items-center content-center justify-center h-full '>
    <MainLayout>
      <img src={qrCode} alt="QR code image" className='rounded-[10px]' />
      <h1 className='text-2xl mt-7 font-bold px-2'>Improve your front-end skills by building projects</h1>
      <p className='text-gray-500 mt-4 px-4 leading-tight'> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </MainLayout> 
  </main>;
}

export default App;
