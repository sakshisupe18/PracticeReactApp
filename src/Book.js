import React from 'react'
import { bookinfo } from './bookinfo'
import Book3 from './Book3'

export const Book = () => {
  return (
    <div className='myclass'>
      {bookinfo.map((book) => {
        return (
          <>
            <Book3 {...book}></Book3>
          </>
        )
      })}
    </div>
  )
}

export default Book
