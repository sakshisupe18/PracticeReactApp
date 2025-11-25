import React from 'react'
import { useState } from 'react';
import { bookinfo } from '../bookinfo';

export const UseStateArrayofObaject = () => {
    var[books,setBooks]=useState(bookinfo);
    var removeBooks=()=>{
      setBooks([]);
    }
    var addAllBooks=()=>{
      setBooks(bookinfo);
    }
    var removeSingleBook=(bid)=>{
      var balancebook=books.filter((book)=>{
        return book.id!==bid;
      })
      setBooks(balancebook);
    }

  return (
    <div>
      {books.length!=0?<button onClick={removeBooks}>Remove all Books</button>
      :<button onClick={addAllBooks}>Add all Books</button>}
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Image</th>
                <th>Author</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book)=>{
                var{id,title,imgpath,author}=book;
                return(
                    <tr>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td><img src={imgpath} alt="not found" width="150px" height="170px"></img></td>
                        <td>{author}</td>
                        <td><button onClick={()=>{removeSingleBook(id)}}>Remove Book</button></td>

                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UseStateArrayofObaject
