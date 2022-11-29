import React from 'react';
import LogoFifaNavBar from '../assets/images/logo-fifa/logo-fifa-world-cup.svg';

export function Header() {
  return (

    <nav className='fixed flex justify-between px-4 py-4 mx-auto bg-magenta-900 w-full'>

        <div className='container flex flex-wrap items-center justify-between mx-auto max-w-6xl'>
            <img src={LogoFifaNavBar} class='h-6 mr-3 sm: h-9' alt='Fifa Logo'/>
        </div>

        <div className='items-center hidden space-x-8 text-gray-100 lg:flex'>
            <a href="">Home</a>
            <a href="">Grupos</a>
            <a href="">Partidas</a>
            <a href="">Estádios</a>
        </div>

    </nav>

  )
};
