import React from 'react'
var imgpath="https://m.media-amazon.com/images/I/715LAektcSL._AC_UY327_FMwebp_QL65_.jpg";
var author="Alert Einstein";
var title="Ideas and Opinions";
var person={name:"Sakshi",age:21,phone:"9080704050"};
var samplearr=[{id:100,name:"Sakshi",age:21},{id:101,name:"Vaishu",age:"22"}];

const BookList = () => {
  return (
    <div className='myclass'>
      <Book1 title="Ideas & Opinion" imgpath="https://m.media-amazon.com/images/I/715LAektcSL._AC_UY327_FMwebp_QL65_.jpg" author="Alert Einstein" genore="Biography">Book1</Book1>
      <Book1 title="Phylosophy" imgpath="https://m.media-amazon.com/images/I/81ObrCdSayL._SY466_.jpg" author="Will Durant"></Book1>
      <Book1 title="Think & Grow" imgpath="https://m.media-amazon.com/images/I/81lr6LSKvKS._SY342_.jpg" author=" Napoleon Hill" genore="Biography">Book2</Book1>
      
    </div>
  )
}

var Book1=(props)=>{
  var{title,imgpath,author,genore,children}=props;
  return(
    <div className='mybook'>
     {/* <h3>{props.title}</h3>
     <img src={props.imgpath} alt="not found" width="150px"/>
     <h3>{props.author}</h3> */}
      <h3>{title}</h3>
     <img src={imgpath} alt="not found" width="150px"/>
     <h3>{author}</h3>
     <h3>{genore}</h3>
     <h4>{children}</h4>
    </div>
  )
}

var Book=()=>{
    return(
        <div>
            {/* <h3>Ideas and Opinion</h3>
            <img src="https://m.media-amazon.com/images/I/715LAektcSL._AC_UY327_FMwebp_QL65_.jpg"
            alt="not found" width="170px">
            </img> */}
            {/* <h3>Alert Einstein</h3> */}
            {/* <h3>{title}</h3>
            <img src={imgpath} alt="not found" width="100px"/>
            <h3>{author}</h3> */}
            {/* <h3>{person.name}---{person.age}---{person.phone}</h3>
            <h3>{samplearr[0].id}---{samplearr[0].name}---{samplearr[0].age}</h3>
            <h3>{samplearr[1].id}---{samplearr[1].name}---{samplearr[1].age}</h3> */}
        </div>

    )
}
export default BookList;
