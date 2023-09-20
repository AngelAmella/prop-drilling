import React from "react"


export default function View({ book }){

    return(
        <figure className='book'>
            <img src={book.image} alt="book-pic" />
            <figcaption>{book.title}<br />
            <span className='author'>{book.author}<br/></span>
            <span className='genre'>{book.genre}</span>
            </figcaption>
            <button>Buy Now</button>
        </figure>
    )
}