import { useEffect, useState } from "react";
// import "./App.css";
// import MyComponent from './components/MyComponent';
//import Json from '../public/data.json'
function MyComponent() {
  const [data, setData] = useState([]);
  const filteredPhonePrice = data.filter(data => data.phone_price >10000&&(data.gender==='Male'));
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
    <button onClick={() => setShowTable(!showTable)}>
        {showTable ? 'Male Users which have phone price greater than 10,000' : 'Male Users which donot have phone price greater than 10,000'}
        </button>
        {showTable &&(
          <table>
          <thead>
            <tr>
            <th>first Name</th>
            <th style={{'color':'red'}}>Gender</th>
              <th style={{'color':'green'}}>Phone Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredPhonePrice.map(val => (
                <tr key={val.id}>
                <td>{val.first_name}</td>
                <td style={{'color':'red'}}>{val.gender}</td>
                <td style={{'color':'green'}}>{val.phone_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
        
      
    </div>

    </>
  );
}

export default MyComponent;
