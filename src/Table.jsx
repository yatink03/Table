import React,{useState,UseEffect, useEffect} from 'react';
import { defaultClientConditions } from 'vite';
const URL = "https://jsonplaceholder.typicode.com/posts";
export default function Table(){
    const [tableData,setTableData]= useState([]);
    useEffect(()=>{
        fetch(URL)
        .then((resp)=> resp.json())
        .then((data)=>{
            const sortedData = data.data.sort ((a,b)=>
            a.first_name.localCompare(b.first_name)
        );
        setTableData (sortedData);
        })
        .catch((err)=> console.log(err));
    },[]);
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item)=>
                <tr>
                    <td>{'${item.first_name}${item.last_name}'}
                    </td>
                    <td>{item.email}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}