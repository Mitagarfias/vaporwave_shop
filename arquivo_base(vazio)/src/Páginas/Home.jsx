import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        <div className='maincontainer'>
            <div className='janela'>
                <div className='appexe'>Welcome</div>

                <div className='btcontainers'>
                    <button className='botao'>
                        <Link to="/" className='home'>
                            Home
                        </Link>
                    </button>

                    <button className='botao'>
                        <Link to="/About" className='About'>
                            About
                        </Link>
                    </button>

                    <button className='botao'>
                        <Link to="/faq" className='faq'>
                            FAQ
                        </Link>
                    </button>

                    <button className='botao'>
                        <Link to="/Shirts" className='Shirts'>
                            Shirts
                        </Link>
                    </button>

                    <button className='botao'>
                        <Link to="/moletons" className='moletons'>
                            Hoodies
                        </Link>
                    </button>

                    <button className='botao'>
                        <Link to="/hats" className='hats'>
                            Hats
                        </Link>
                    </button>
                </div>

                <div className='products'>
                    *Aqui vem as imagens*
                </div>
            </div>
        </div>
    )
}