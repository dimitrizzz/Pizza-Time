import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css';
import catpizza from '../assets/cat-pizza.jpeg';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${catpizza})`}}>
      <div className='headerContainer' >
        <h1>Puma's Pizzeria</h1>
        <p>It's Beautiful not fatty</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
        </div>
    </div>
  )
}

export default Home