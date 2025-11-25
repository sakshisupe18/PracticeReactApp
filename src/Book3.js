const Book3 = (props) => {
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

export default Book3
