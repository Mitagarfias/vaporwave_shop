import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Pasta from './pasta.png';

export default function Home() {
    return (
        <div className='container'>
            <div className='mainbox'>
                <div className='appexe'>
                    Welcome.exe

                </div>

                <div className='window'>
                    Bem vindo :) Encontre as skins de seus jogos favoritos aqui.

                </div>

                <div className='imgs'>
                                        
                        <div className='element'>
                            <button className='botao'>
                                <img src={Pasta} width='80px' height='76px' />
                                <p>Battle Royale</p>
                            </button>

                        </div>

                        
                        
                        <div className='element'>
                            <button className='botao'>
                                <img src={Pasta} width='80px' height='76px' />
                                <p>RPG</p>
                            </button>

                        </div>

                        <div className='element'>
                                <button className='botao'>
                                    <img src={Pasta} width='80px' height='76px' />
                                    <p>MOBA</p>
                                </button>

                        </div>

                        <div className='element'>
                            <button className='botao'>
                                <img src={Pasta} width='80px' height='76px' />
                                <p>FPS</p>
                            </button>

                        </div>
                    
                </div>
            </div>

        </div>
    )
}