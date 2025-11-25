import React, { useState } from 'react'


export const ControlinputForm = () => {
    var [uname, setUname] = useState("");
    var [uemail, setUemail] = useState("");
    var [uage, setUage] = useState("");
    var [users, setUser] =useState([]);

var changeName = (event) => {

        console.log(event.target.value);
        setUname(event.target.value);
    }
    var changeEmail = (event) => {
        console.log(event.target.value);
        setUemail(event.target.value);
    }
    var changeAge = (event) => {
        console.log(event.target.value);
        setUage(event.target.value);
    }
    var handleSubmit = (event) => {
        event.preventDefault();
        if (uname && uemail && uage) 
            {
            var person = { uname, uemail, uage };
            setUser((p) => { return [...p, person] });
            setUname("");
            setUemail("");
            setUage("");
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>UserName</label>
                <input type="text" id="uname" onChange={changeName} value={uname} /><br />
                <label>UserEmail</label>
                <input type="text" id="uemail" onChange={changeEmail} value={uemail} /><br />
                <label>UserAge</label>
                <input type="number" id="uage" onChange={changeAge} value={uage} /><br />
                <input type="submit" value="submit" />
            </form>
            <h3>{uname}---{uemail}---{uage}</h3>
            {users.map((user) => {
                return (<h2>{user.uname}---{user.uemail}---{user.uage}</h2>)
            })}
        </div>
    )
}

export default ControlinputForm
