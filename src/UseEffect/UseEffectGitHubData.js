import React, { useEffect } from 'react'
import { useState } from 'react'

export const UseEffectGitHubData = () => {
    var[results,setResults]=useState([]);
    useEffect(()=>{loadUserData();})

    var loadUserData=async()=>{
        var response=await fetch('https://api.github.com/users');
        var data=await response.json();
        setResults(data);
    }
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>User Id</th>
                <th>User Name</th>
                <th>User Image</th>
                <th>User Profile</th>
            </tr>
        </thead>
        <tbody>
            {results.map((user)=>{
                var{id,login,avatar_url,html_url}=user
                return<tr>
                    <td>{id}</td>
                    <td>{login}</td>
                    <td><img src={avatar_url} alt="not found" width="100px" height="100px"></img></td>
                    <td><a href={html_url} target="_blank" rel="noreferer">Click Here to visit Profile</a></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UseEffectGitHubData
