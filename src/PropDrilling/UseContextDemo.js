import React from 'react'
import { createContext } from 'react'
import { bookinfo } from '../bookinfo'
import { useState } from 'react'
import { useContext } from 'react'

var BookContainer = createContext();
const UseContextDemo = () => {
    var [books, setBooks] = useState(bookinfo);
    var removeBook = (id) => {
        var balancebooks = books.filter((book) => {
            return book.id !== id
        })
        setBooks(balancebooks);
    }
    return (
        <div>
            <BookContainer.Provider value={{ books, removeBook }}>
                <List></List>
            </BookContainer.Provider>
        </div>
    )
}
const List = () => {
    var {books}=useContext(BookContainer);
    return (<div>
        {books.map((book) => {
            return (<div>
                <SingleBook book={book}></SingleBook>
            </div>)
        })}
    </div>)
}
const SingleBook=({book})=>{
    var {removeBook}=useContext(BookContainer);
    return(<div>
        <h3>{book.id}---{book.title}</h3>
        <img src={book.imgpath} alt="not found" width="150px" height="150px"></img>
        <h3>{book.author}</h3>
        <button onClick={()=>{removeBook(book.id)}}>Remove Book</button>
    </div>)
}


export default UseContextDemo
