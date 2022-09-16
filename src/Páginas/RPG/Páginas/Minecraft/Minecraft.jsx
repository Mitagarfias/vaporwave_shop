import React from 'react';
import './mine.css'
import { Link } from 'react-router-dom';

export default function Minecraft(){
    return(
        <div className='container'>

    <div className='mainbox'>
        <div className='navbar'>
            <button className='navmoba'>
                <Link to="/" className='Link'>
                    Home
                </Link>
            </button>
            <button className='navmoba'>
                <Link to="/rpg" className='Link'>
                    Início
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/mine" className='Link'>
                    MINECRAFT
                </Link>
            </button>
            
            <button className='navmoba'>
                <Link to="/" className='Link'>
                    Jogo2
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/" className='Link'>
                    Jogo3
                </Link>
            </button>
        </div>
        <p> só pra confirmar que chegou em Minecraft</p>
    </div>

</div>
    )
}
