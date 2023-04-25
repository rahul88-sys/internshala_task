import {React,useEffect, useState} from "react";
function Data4(){
    const [data, setData] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const emailRegex = /\d/;
    const filteredUsersIncomeAndCarType = data.filter(item => item.car==='BMW'|item.car==='Mercedes-Benz'|item.car==='Audi'&&!emailRegex.test(item.email))
    const getData = () => {
        fetch("data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((myjson) => {
            console.log(data);
            setData(myjson);
          });
      };
      useEffect(() => {
        getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return(

<>
<div>
    <button onClick={() => setShowTable(!showTable)}>
        {showTable ? 'Users who have BMW and havnot contain digit in email ' : 'Users who have not BMW and havnot contain digit in email '}
        </button>
        {showTable &&(
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th style={{'color':'red'}}>Email</th>
          <th style={{'color':'green'}}>Car</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsersIncomeAndCarType.map(data => (
          <tr key={data.email}>
            <td>{data.first_name}</td>
            <td>{data.last_name}</td>
            <td style={{'color':'red'}}>{data.email}</td>
            <td style={{'color':'green'}}>{data.car}</td>
          </tr>
        ))}
      </tbody>
    </table>
    )}
    </div>
    
</>

    )
}
export default Data4;