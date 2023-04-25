import React, { useState, useEffect } from 'react';

const Data5 = () => {
  const [topCities, setTopCities] = useState([]);
  const [data, setData] = useState([]);
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
  useEffect(() => {
    // Count the number of users in each city and calculate total income
    const citiesData = data.reduce((cities, user) => {
      const city = user.city;
      const income = user.income;

      if (!cities[city]) {
        cities[city] = { users: 0, totalIncome: 0 };
      }

      cities[city].users++;
      cities[city].totalIncome += income;

      return cities;
    }, {});

    // Sort the cities based on number of users and get the top 10
    const topCities = Object.keys(citiesData)
      .sort((a, b) => citiesData[b].users - citiesData[a].users)
      .slice(0, 10)
      .map(city => ({
        name: city,
        users: citiesData[city].users,
        averageIncome: (citiesData[city].totalIncome) / (citiesData[city].users)
      }));

    setTopCities(topCities);
  }, [data]);

  return (
    <>
<div>
    <button onClick={() => setShowTable(!showTable)}>
        {showTable ? 'The data of top 10 cities which have the highest number of users  ' : 'The data of top 10 cities which does not have the highest number of users  '}
        </button>
        {showTable &&(
    <table>
      <thead>
        <tr>
          <th style={{'color':'red'}}>City</th>
          <th style={{'color':'green'}}>Number of Users</th>
          <th style={{'color':'blue'}}>Average Income</th>
        </tr>
      </thead>
      <tbody>
        {topCities.map(city => (
          <tr >
            <td style={{'color':'red'}}>{city.name}</td>
            <td style={{'color':'green'}}>{city.users}</td>
            <td style={{'color':'blue'}}>{city.averageIncome}</td>
          </tr>
        ))}
      </tbody>
    </table>
    )}
    </div>
    
</>
  );
};

export default Data5;
