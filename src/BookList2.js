import React from 'react'
var bookinfo = [{
    title: "Ideas and Opinions",
    imgpath: "https://m.media-amazon.com/images/I/610jKE0mMlL._SY522_.jpg", author: " Albert Einstein", genore: "Biography"
},
{
    title: "Savitribai Phule",
    imgpath: "https://m.media-amazon.com/images/I/71Dtgi9VIlL._SY425_.jpg", author: "  by G. A. Ugale"
},
{
    title: "The World as I See It", imgpath: "https://m.media-amazon.com/images/I/81RViQwXYuL._SY522_.jpg",

    author: " Albert Einstein", genore: "Biography"

}
]

export const BookList2 = () => {
    return (
        // This is 1st Method
        <div className='myclass'>
            {bookinfo.map((book) => {
                var { title, imgpath, author, genore, chindren } = book
                return (

                    // This is 3rd Method
                    // <>
                    // <Book2 title={title} imgpath={imgpath} author={author} genore={genore}></Book2>
                    // </>

                    <>
                        <Book2{...book}></Book2>
                    </>
                )
            })}
        </div>

        // This is 2nd Method
        //   <div className='myclass'>
        //   <Book2 title={bookinfo[0].title} imgpath={bookinfo[0].imgpath} author={bookinfo[0].author} genore={bookinfo[0].genore}></Book2>
        //   <Book2 title={bookinfo[1].title} imgpath={bookinfo[1].imgpath} author={bookinfo[1].author} genore={bookinfo[1].genore}></Book2>
        //   <Book2 title={bookinfo[2].title} imgpath={bookinfo[2].imgpath} author={bookinfo[2].author} genore={bookinfo[2].genore}></Book2>
        // </div>
    )
}
const Book2 = (props) => {
    var { title, imgpath, author, genore, children } = props;
    return (
        <div className='mybook'>
            <h3>{title}</h3>
            <img src={imgpath} alt="not found" width="150px" />
            <h3>{author}</h3>
            <h3>{genore}</h3>
            <h4>{children}</h4>
        </div>
    )
}

export default BookList2 