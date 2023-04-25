import { useEffect, useState } from "react";

//import Json from '../public/data.json'
function Data1() {
  const [data, setData] = useState([]);
  const filteredUsersIncomeAndCarType = data.filter(data => data.income < '$5'&& (data.car==='BMW'||data.car==='Mercedes-Benz'));
  const [showTable, setShowTable] = useState(false);



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
  return (
    <>
    <div>
    <button className="btn btn-success" onClick={() => setShowTable(!showTable)}>
        {showTable ? 'Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.' : 'Users which donot have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.'}
        </button>
        {showTable &&(
          <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th style={{'color':'red'}}>Income</th>
              <th style={{'color':'green'}}>Car Brand</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsersIncomeAndCarType.map(val => (
                <tr key={val.id}>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td style={{'color':'red'}}>{val.income}</td>
                <td style={{'color':'green'}}>{val.car}</td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      
    </div>
    
      


    </>
  );
}

export default Data1;
