import React from 'react';
import FlagQatar from '../assets/images/flags/qatar.svg';
import FlagEquador from '../assets/images/flags/ecuador.svg';
import FlagSenegal from '../assets/images/flags/senegal.svg';
import FlagHolanda from '../assets/images/flags/netherlands.svg';
import FlagInglaterra from '../assets/images/flags/england.svg';
import FlagIra from '../assets/images/flags/iran.svg';
import FlagEUA from '../assets/images/flags/united states.svg';
import FlagGales from '../assets/images/flags/wales.svg';
import FlagArgentina from '../assets/images/flags/argentina.svg';
import FlagArabiaSaudita from '../assets/images/flags/saudi arabia.svg';
import FlagMexico from '../assets/images/flags/mexico.svg';
import FlagPolonia from '../assets/images/flags/poland.svg';
import FlagFranca from '../assets/images/flags/france.svg';
import FlagAustralia from '../assets/images/flags/australia.svg';
import FlagDinamarca from '../assets/images/flags/denmark.svg';
import FlagTunisia from '../assets/images/flags/tunisia.svg';
import FlagEspanha from '../assets/images/flags/spain.svg';
import FlagCostaRica from '../assets/images/flags/costa rica.svg';
import FlagAlemanha from '../assets/images/flags/germany.svg';
import FlagJapao from '../assets/images/flags/japan.svg';
import FlagBelgica from '../assets/images/flags/belgium.svg';
import FlagCanada from '../assets/images/flags/canada.svg';
import FlagMarrocos from '../assets/images/flags/morocco.svg';
import FlagCroacia from '../assets/images/flags/croatia.svg';
import FlagBrasil from '../assets/images/flags/brazil.svg';
import FlagServia from '../assets/images/flags/serbia.svg';
import FlagSuica from '../assets/images/flags/switzerland.svg';
import FlagCamaroes from '../assets/images/flags/cameroon.svg';
import FlagPortugal from '../assets/images/flags/portugal.svg';
import FlagGana from '../assets/images/flags/ghana.svg';
import FlagUruguai from '../assets/images/flags/uruguay.svg';
import FlagCoreiaDoSul from '../assets/images/flags/south korea.svg';

export function Group() {

  return (

    <main className='w-full mt-8'>
      <div className='w-full h-auto mx-0 my-auto'>
        <div className='flex justify-center items-center'>
          <h3 className='text-xl text-gray-900 font-bold border-b-4 border-magenta-900'>GRUPOS</h3>
        </div>
        <div data-aos="zoom-in" className='flex gap-9 mr-6 justify-center items-center mt-8'>
          <div className='w-[300px] h-[370px] px-[10px] py-[30px] bg-gray-100 rounded-lg shadow shadow-gray-300/25 mb-8'>
            <div className='flex justify-center text-gray-900 font-bold text-sm mb-8'>
              <p className='text-md text-gray-900 font-bold border-b-4 border-magenta-900'>GRUPO A</p>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagQatar } alt="Bandeira do Qatar" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Qatar</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagEquador } alt="Bandeira do Equador" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Equador</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagSenegal } alt="Bandeira do Senegal" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Senegal</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagHolanda } alt="Bandeira do Holanda" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Holanda</span>
              </div>
            </div>
          </div>
          <div className='w-[300px] h-[370px] px-[10px] py-[30px] bg-gray-100 rounded-lg shadow shadow-gray-300/25 mb-8'>
            <div className='flex justify-center text-gray-900 font-bold text-sm mb-8'>
              <p className='text-md text-gray-900 font-bold border-b-4 border-magenta-900'>GRUPO B</p>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagInglaterra } alt="Bandeira do Inglaterra" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Inglaterra</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagIra } alt="Bandeira do Irã" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Irã</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagEUA } alt="Bandeira do EUA" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>EUA</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagGales } alt="Bandeira do País de Gales" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>País de Gales</span>
              </div>
            </div>
          </div>
          <div className='w-[300px] h-[370px] px-[10px] py-[30px] bg-gray-100 rounded-lg shadow shadow-gray-300/25 mb-8'>
            <div className='flex justify-center text-gray-900 font-bold text-sm mb-8'>
              <p className='text-md text-gray-900 font-bold border-b-4 border-magenta-900'>GRUPO C</p>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagArgentina } alt="Bandeira do Argentina" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Argentina</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagArabiaSaudita } alt="Bandeira do Arábia Saudita" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Arábia Saudita</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagMexico } alt="Bandeira do México" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>México</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagPolonia } alt="Bandeira do Polônia" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Polônia</span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className='flex gap-9 mr-6 justify-center items-center mt-8'>
          <div className='w-[300px] h-[370px] px-[10px] py-[30px] bg-gray-100 rounded-lg shadow shadow-gray-300/25 mb-8'>
            <div className='flex justify-center text-gray-900 font-bold text-sm mb-8'>
              <p className='text-md text-gray-900 font-bold border-b-4 border-magenta-900'>GRUPO D</p>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagFranca } alt="Bandeira do França" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>França</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagAustralia } alt="Bandeira do Austrália" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Austrália</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagDinamarca } alt="Bandeira do Dinamarca" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Dinamarca</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagTunisia } alt="Bandeira do Tunísia" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Tunísia</span>
              </div>
            </div>
          </div>
          <div className='w-[300px] h-[370px] px-[10px] py-[30px] bg-gray-100 rounded-lg shadow shadow-gray-300/25 mb-8'>
            <div className='flex justify-center text-gray-900 font-bold text-sm mb-8'>
              <p className='text-md text-gray-900 font-bold border-b-4 border-magenta-900'>GRUPO E</p>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagEspanha } alt="Bandeira do Espanha" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Espanha</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagCostaRica } alt="Bandeira do Costa Rica" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Costa Rica</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagAlemanha } alt="Bandeira do Alemanha" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Alemanha</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagJapao } alt="Bandeira do Japão" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Japão</span>
              </div>
            </div>
          </div>
          <div className='w-[300px] h-[370px] px-[10px] py-[30px] bg-gray-100 rounded-lg shadow shadow-gray-300/25 mb-8'>
            <div className='flex justify-center text-gray-900 font-bold text-sm mb-8'>
              <p className='text-md text-gray-900 font-bold border-b-4 border-magenta-900'>GRUPO F</p>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagBelgica } alt="Bandeira do Bélgica" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Bélgica</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagCanada } alt="Bandeira do Canadá" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Canadá</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagMarrocos } alt="Bandeira do Marrocos" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Marrocos</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagCroacia } alt="Bandeira do Croácia" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Croácia</span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className='flex gap-9 mr-6 justify-center items-center mt-8'>
          <div className='w-[300px] h-[370px] px-[10px] py-[30px] bg-gray-100 rounded-lg shadow shadow-gray-300/25 mb-8'>
            <div className='flex justify-center text-gray-900 font-bold text-sm mb-8'>
              <p className='text-md text-gray-900 font-bold border-b-4 border-magenta-900'>GRUPO G</p>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagBrasil } alt="Bandeira do Brasil" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Brasil</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagServia } alt="Bandeira do Sérvia" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Sérvia</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagSuica } alt="Bandeira do Suiça" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Suiça</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagCamaroes } alt="Bandeira do Camarões" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Camarões</span>
              </div>
            </div>
          </div>
          <div className='w-[300px] h-[370px] px-[10px] py-[30px] bg-gray-100 rounded-lg shadow shadow-gray-300/25 mb-8'>
            <div className='flex justify-center text-gray-900 font-bold text-sm mb-8'>
              <p className='text-md text-gray-900 font-bold border-b-4 border-magenta-900'>GRUPO H</p>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagPortugal } alt="Bandeira do Portugal" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Portugal</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagGana } alt="Bandeira do Gana" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Gana</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagUruguai } alt="Bandeira do Uruguai" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Uruguai</span>
              </div>
              <div className='flex items-center mx-[30px] my-auto pb-4'>
                <img src= { FlagCoreiaDoSul } alt="Bandeira do Coréia do Sul" className='w-[50px]' />
                <span className='text-md ml-3 font-semibold'>Coréia do Sul</span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className='flex gap-9 mr-6 justify-center items-center mt-8'>
          <div className='w-[286px] h-[54px] px-[10px] py-[15px] bg-magenta-50 rounded-lg shadow shadow-gray-300/25 mb-8'>
            <div className='flex justify-center text-gray-900 font-semibold text-sm mb-8'>
              <p className='text-md text-magenta-900'>VER TODOS OS JOGOS</p>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
};
