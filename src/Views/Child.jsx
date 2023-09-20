import React from 'react';
import View from './View';
import { useBookContext } from '../Hook/useBookContext';

export default function BookChildView(){
    const booksData = useBookContext();

    return(
        <>
            <div className="top-books">
                <View book={booksData[2]}/>
                <View book={booksData[3]}/>
            </div>
            <div className="top-books">
                <View book={booksData[4]}/>
                <View book={booksData[5]}/>
            </div>
        </>
    )
}