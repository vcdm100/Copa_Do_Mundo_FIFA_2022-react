import React from 'react';
import LogoFifaNavBar from '../assets/images/logo-fifa/logo-fifa-world-cup.svg';
import LogoFifaMain from '../assets/images/logo-fifa/logo-fifa-world-cup-main.svg';

export function Header() {
  return (

    <header className='flex flex-col w-full items-center'>

      <nav className='flex justify-between w-full h-[100px] bg-magenta-900'>

            <div className='flex justify-between items-center container mx-auto'>

                <img src={LogoFifaNavBar} />

                <ul className='flex gap-8 text-gray-100 text-sm'>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Grupos</a>
                  </li>
                  <li>
                    <a href="#">Partidas</a>
                  </li>
                  <li>
                    <a href="#">Estádios</a>
                  </li>
                </ul>

            </div>
          
        </nav>

        <div className='w-full h-[400px] bg-hero bg-cover flex items-center justify-center relative'>

            <img src={LogoFifaMain} className='w-[250px] z-[5]' />

            <div className='bg-magenta-900 bg-opacity-50 w-full h-[400px] absolute'></div>

        </div>
    
    </header>

  )
};
