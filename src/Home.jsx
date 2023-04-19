import { useContext, useEffect, useState } from "react"
import Navbar from './Navbar'
import User from "./User"
import Admin from "./Admin"

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  const [employees, setEmployees] = useState(mockEmployees)
  const [sector, setSector] = useState('')

  // const showStaff = (staff) => {
  //   return (
  //     <tr>
  //     <td>{staff.name}</td>
  //     <td>{staff.lastname}</td>
  //     <td>{staff.position}</td>  
  //     </tr>
  //   )
  // }

  useEffect (() => {}, [sector])

  if (sector==='user'){
      return (
          <User setSector={setSector} employees={employees}  />
      )
  }
  else if (sector==='admin')
  {
    return (
          <Admin setSector={setSector} employees={employees} setEmployees={setEmployees} />
  )
    }
    else {
      return (
      <>  

        <Navbar/>
        <h1>Generation Thailand<br/>React-Assessment</h1>
        <div className="divbtn">
          <button className="btn" onClick={() => setSector('user')}>User Home Sector</button>
          <button className="btn" onClick={() => setSector('admin')}>Admin Home Sector</button>
        </div>

      </>   
      )
    }
}


export default Home;
