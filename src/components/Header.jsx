import React from 'react';
import LogoFifaNavBar from '../assets/images/logo-fifa/logo-fifa-world-cup.svg';
import LogoFifaMain from '../assets/images/logo-fifa/logo-fifa-world-cup-main.svg';

export function Header() {
  return (

    <header>

      <nav className='flex flex-col w-full h-[10vh] items-center bg-magenta-900'>

        <div id='navbar' className='w-full h-[10vh] mx-0 my-auto flex justify-between items-center'>

          <div id='log-fifa' className='w-24 ml-48'>

            <img src={LogoFifaNavBar} alt="Logo da fifa na cor branca" className='max-[768px]:w-[60px] max-[768px]:ml-3' />

          </div>

          <div id="menu" className='flex justify-between items-center mr-40'>

            <ul className='flex gap-9 mr-6 text-gray-100 text-sm'>
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
    
        </div>
        
      </nav>

      <div className='w-full h-[75vh] max-[768px]:w-full max-[768px]:h-[50vh] bg-hero bg-cover bg-position-center flex justify-center items-center'>

        <img src={LogoFifaMain} className='w-[250px] z-[5]' />

        <div className='bg-magenta-900 bg-opacity-50 w-full h-[75vh] max-[768px]:h-[50vh] absolute'>

        </div>

      </div>
    
    </header>

  )
};
 