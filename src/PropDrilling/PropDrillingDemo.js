import React from 'react'
import { bookinfo } from '../bookinfo'
import { useState } from 'react'
const PropDrillingDemo = () => {
    var[books,setBooks]=useState(bookinfo);
    var removeBook=(id)=>{
        var balancebooks=books.filter((book)=>{
            return book.id!==id
        })
        setBooks(balancebooks);
    }
  return (
    <div>
      <List books={books} removeBook={removeBook}></List>
    </div>
  )
}
const List=({books,removeBook})=>{
    return(<div>
        {books.map((book)=>{
            return (<div>
                <SingleBook book={book} removeBook={removeBook}></SingleBook>
                </div>)
        })}
    </div>)
}
const SingleBook=({book,removeBook})=>{
    return(<div>
        <h3>{book.id}---{book.title}</h3>
        <img src={book.imgpath} alt="not found" width="150px" height="150px"></img>
        <h3>{book.author}</h3>
        <button onClick={()=>{removeBook(book.id)}}>Remove Book</button>
    </div>)
}
export default PropDrillingDemo
