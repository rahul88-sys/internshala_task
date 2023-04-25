
import {React,useEffect, useState} from "react";
function StartWithM(){
    const [data, setData] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const filteredUsersIncomeAndCarType = data.filter(item => item.last_name.startsWith('M')&&(item.quote.length>15))

   
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
        {showTable ? 'Users whose last name starts with “M” ' : 'Users whose last name do not starts with “M” '}
        </button>
        {showTable &&(
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th style={{'color':'red'}}>Last Name</th>
          <th style={{'color':'green'}}>Email</th>
          <th style={{'color':'blue'}}>Quote</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsersIncomeAndCarType.map(data => (
          <tr key={data.email}>
            <td>{data.first_name}</td>
            <td style={{'color':'red'}}>{data.last_name}</td>
            <td style={{'color':'green'}}>{data.email}</td>
            <td style={{'color':'blue'}}>{data.quote}</td>
          </tr>
        ))}
      </tbody>
    </table>
    )}
    </div>
    
</>



    )
}

export default StartWithM;