import React from 'react';
import './LOL.css'
import { Link } from 'react-router-dom';

export default function LOL(){
    return(
        <div className='container'>

    <div className='mainbox'>
        <div className='navbar'>
        <Link to="/" className='Link'>
            <button className='navmoba'>
                    Home
            </button>
        </Link>

        <Link to="/moba" className='Link'>
            <button className='navmoba'>
                    Início
            </button>
        </Link>
        <Link to="/lol" className='Link'>
            <button className='navmoba'>
                    League of Legends
            </button>
        </Link>

            <Link to="/mobilelegends" className='Link'>
            <button className='navmoba'>
                    Mobile Legends
            </button>
            </Link>

            <Link to="/pokemonunite" className='Link'>
            <button className='navmoba'>
                    Pokémon Unite
            </button>
            </Link>

            <Link to="/pokemonunite" className='Link'>
            <button className='navmoba'>
                    oto jogo
            </button>
            </Link>
            
        </div>
        <p> só pra confirmar que chegou em LOL</p>
    </div>

</div>
    )
}