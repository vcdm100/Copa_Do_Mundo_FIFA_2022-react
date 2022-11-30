import React from 'react';
import LogoFifaNavBar from '../assets/images/logo-fifa/logo-fifa-world-cup.svg';
import WallpaperWorldCup from '../assets/images/wallpapers/wallpaper.png';
import LogoFifaMain from '../assets/images/logo-fifa/logo-fifa-world-cup-main.svg';

export function Header() {
  return (

    <div>

        <nav className='absolute flex justify-between px-52 py-4 mx-auto bg-magenta-900 w-full'>

            <div className='container flex flex-wrap items-center justify-between mx-auto max-w-7xl'>
                <img src={LogoFifaNavBar} class='h-6 mr-3 sm:h-9' alt='Fifa Logo'/>
            </div>

            <span className='items-center hidden space-x-8 text-gray-100 lg:flex'>
                <a href="#">Home</a>
                <a href="#">Grupos</a>
                <a href="#">Partidas</a>
                <a href="#">Estádios</a>
            </span>
          
        </nav>

        <div>

            <img src={WallpaperWorldCup} className='absolute mt-16 w-full object-cover' />

            <div className='absolute inset-0 mt-16 w-full h-full bg-magenta-900 bg-opacity-50'></div>

            <div>
              <img src={LogoFifaMain} />
            </div>

        </div>

    </div>

  )
};
