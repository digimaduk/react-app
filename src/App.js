// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://mongodb-nodejs-service.onrender.com/api/links")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return <p>Loading...</p>;

  const grouped = data.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello User!</h1>
      {Object.keys(grouped).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {grouped[category].map((item) => (
              <li key={item.name}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

}

export default App;
