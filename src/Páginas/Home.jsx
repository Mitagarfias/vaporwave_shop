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
                            <Link to = '/battleroyale'>
                                <button className='botao'>
                                    <img src={Pasta} width='80px' height='76px' />
                                    <p>Battle Royale</p>
                                </button>
                            </Link>

                        </div>
                        
                        <div className='element'>
                            <Link to = '/rpg'>
                                <button className='botao'>
                                    <img src={Pasta} width='80px' height='76px' />
                                    <p>RPG</p>
                                </button>
                            </Link>

                        </div>

                        <div className='element'>
                            <Link to = 'moba'>
                                <button className='botao'>
                                    <img src={Pasta} width='80px' height='76px' />
                                    <p>MOBA</p>
                                </button>
                            </Link>

                        </div>

                        <div className='element'>
                            <Link to = 'fps'>
                                <button className='botao'>
                                    <img src={Pasta} width='80px' height='76px' />
                                    <p>FPS</p>
                                </button>
                            </Link>

                        </div>
                    
                </div>
            </div>

        </div>
    )
}
