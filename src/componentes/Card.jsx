import React from 'react'

export default function Card({ imgSrc, title, bodyText }) {
  return (
    <div>
        <div className="bg-minha-cor-secundaria-white w-[300px] p-5">

              <img 
              src={ imgSrc } 
              alt= { title } 
              className= { bodyText } 
              />
              
              <h2 className="py-4 text-md">{title}</h2>
              <p>
               { bodyText}{" "}
              </p>
            </div>
    </div>
  )
}
