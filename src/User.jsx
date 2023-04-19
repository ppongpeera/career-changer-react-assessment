import Navbar from "./Navbar"

const User = ({setSector, employees,}) => {

    const showStaff = (staff) => {
        return (
          <tr>
          <td>{staff.name}</td>
          <td>{staff.lastname}</td>
          <td>{staff.position}</td>  
          </tr>
        )
      }

        return (            
        <>
            <Navbar/>
            <h1>Generation Thailand<br/>User-Sector</h1>
            <div className="divbtn">
                <button className="btn" onClick={() => setSector('user')}>User Home Sector</button>
                <button className="btn" onClick={() => setSector('admin')}>Admin Home Sector</button>
            </div>

            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                </tr>
            </thead>
          

            <tbody>
                {employees.map(showStaff)}
            </tbody>
            </table>
            </>)
}

export default User;