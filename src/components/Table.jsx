import React,{useState, useEffect} from 'react';
const URL = "https://jsonplaceholder.typicode.com/posts";
export default function Table(){
    const [tableData,setTableData]= useState([]);
    useEffect(()=>{
        fetch(URL)
        .then((resp)=> resp.json())
        .then((data)=>{
            setTableData(data)
            console.log(data);
        }
        );
        
        
     
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
                    <td>{item.id}
                    </td>
                    <td>{item.title}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}