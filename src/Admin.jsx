import Navbar from "./Navbar";
import { useState } from "react";


const Admin = ({setSector, employees, setEmployees}) => {

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [position, setPosition] = useState('')

// function add Input

    const saveNew = (event) => {
        event.preventDefault()
        const newInput = {
            id: employees[employees.length - 1].id+1,
            name: name,
            lastname: lastname,
            position: position
        }
        console.log()
        setEmployees([...employees, newInput]);

        setName('')
        setLastname('')
        setPosition('')
    }


// function Delete

    const clickDelete = (id) => {
        const removeRecent = employees.filter((item) => item.id !== id)
        setEmployees(removeRecent)
    }


    return (
        <>
        <Navbar/>
        <h1>Generation Thailand<br/>Admin-Sector</h1>
        <div className="divbtn">
            <button className="btn" onClick={() => setSector('user')}>User Home Sector</button>
            <button className="btn" onClick={() => setSector('admin')}>Admin Home Sector</button>
        </div>

        <h3>Create User Here</h3>

        <form onSubmit={saveNew}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
        <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)}></input>
        <button className="save">Save</button>
        </form>


        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Action</th>
                </tr>
            </thead>
           
            <tbody>
            {employees.map((item) => {
                return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.position}</td>
                    <td><button className="delet" onClick={() => clickDelete(item.id)}>Delete</button></td> 
                </tr>

                )
            })}
            </tbody>
            </table>
      </>
    )
}

export default Admin;