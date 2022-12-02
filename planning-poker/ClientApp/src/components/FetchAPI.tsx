import React, { useEffect, useState } from "react";

type Props = {};

function FetchAPI({}: Props) {
  const [state, setState] = useState({ forecasts: [], loading: true });

  useEffect(() => {
    populateWeatherData();
  }, []);

  const populateWeatherData = async () => {
    const response = await fetch("weatherforecast");
    const data = await response.json();
    setState({ forecasts: data, loading: false });
  };

  const renderForecastsTable = (forecasts: any) => {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast: any) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1 id="tabelLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {state.loading ? (
        <p>
          <em>Loading...</em>
        </p>
      ) : (
        renderForecastsTable(state.forecasts)
      )}
    </div>
  );
}

export default FetchAPI;
