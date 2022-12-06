import Link from 'next/link'
import React from 'react'
import Id from '../pages/pokemones/[id]'


const Card=({name, src, id})=>{
    return(
        <div className="card " style={{width: '22rem'}}>
        <img style={{height: '18rem'}}src={src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className='btn btn-primary'>
         <Link className='btn btn-primary' href={`/pokemones/${id}`}>Ver Más</Link>
         </button>
        </div>
      </div>
    ) 
}

export default Card