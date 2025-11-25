// import React from 'react'
// import { useState } from 'react';
// export const MultiinputForm = () => {
//     var[person,setPerson]=useState({uname:"",upass:"",uemail:"",uage:""});
//     var[people,setPeople]=useState([]);
//     var changeData=(event)=>{
//         console.log(event.target.id);
//         console.log(event.target.value);
//         var key=event.target.id;
//         var value=event.target.value;
//         setPerson({...person,[key]:value});
//     }
//     var handleSubmit=(event)=>{
//         event.preventDefault();
//         if(person.uname && person.uemail && person.upass && person.uage)
//         {
//             setPeople((p)=>{return [...p,person]})
//         }
//         setPerson({uname:"",upass:"",uemail:"",uage:""})
//     }
// //     return (
// //         <div>
// //             <form onSubmit={handleSubmit}>
// //                 <label>UserName</label>
// //                 <input type="text" id="uname" onChange={changeData} value={person.uname}/><br />
// //                 <label>UserPassword</label>
// //                 <input type="password" id="upass" onChange={changeData} value={person.upass}/><br />
// //                 <label>UserEmail</label>
// //                 <input type="text" id="uemail" onChange={changeData} value={person.uemail}/><br />
// //                 <label>UserAge</label>
// //                 <input type="number" id="uage" onChange={changeData} value={person.uage}/><br />
// //                 <input type="submit" value="submit" />
// //             </form>
// //             <h3>{person.uname}---{person.upass}---{person.uemail}---{person.uage}</h3>
// //             {people.map((person)=>{
// //                 return(<div>
// //                     <h2>{person.uname}---{person.uemail}---{person.upass}---{person.uage}</h2>
// //                     )
// //             })}
// //         </div>
// //     )
// // }

// export default MultiinputForm;
