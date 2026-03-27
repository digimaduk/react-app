import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://backend-2os3.onrender.com/links")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello!</h1>

      <h2>Streaming Accounts</h2>
      <ul>
        {data.streaming.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <h2>Music</h2>
      <ul>
        {data.music.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;
