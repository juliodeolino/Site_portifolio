import React from 'react'

export default function Card({ imgSrc, title, bodyText, projectURL }) {
  return (
    <a 
    href={projectURL}
    target='_blank'
    rel="noopener nore  ferrer" 
    className="group block"
    >
          <div>
        <div className="
        bg-minha-cor-secundaria-white 
        w-[300px] 
        p-5
        rounded-lg 
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-xl
        hover:bg-opacity-90
        
        ">

              <img 
              src={ imgSrc } 
              alt= { title } 
              className= { bodyText } 
              />
              
              <h2 className="py-4 text-md font-bold">{title}</h2>
              <p>
               { bodyText}{" "}
              </p>
            </div>
    </div>
    </a>
  )
}
