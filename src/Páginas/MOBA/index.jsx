import React from 'react';
import './moba.css'
import { Link } from 'react-router-dom';

export default function MOBA(){
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
                <Link to="/moba" className='Link'>
                    Início
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/lol" className='Link'>
                    League of Legends
                </Link>
            </button>
            
            <button className='navmoba'>
                <Link to="/mobilelegends" className='Link'>
                    Mobile Legends
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/pokemonunite" className='Link'>
                    Pokémon Unite
                </Link>
            </button>
            <button className='navmoba'>
                <Link to="/pokemonunite" className='Link'>
                    oto jogo
                </Link>
            </button>
        </div>
        <p> só pra confirmar que chegou em inicio</p>
    </div>

</div>
    )
}
