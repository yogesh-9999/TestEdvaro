import "./App.css";
import react, { useState, useEffect } from "react";
function App() {
  const [store, setStore] = useState([]);

  const fethdata = async () => {
    fetch("https://assessment.api.vweb.app/rides")
      .then((response) => response.json())
      .then((data) => {console.log(data);
      setStore(data);});
      const filtered = store.filter(i => {
        return i.state === "Telangana";
      });
      setStore(filtered);
    
  };

  const fethdatapast = async () => {
    fetch("https://assessment.api.vweb.app/rides")
      .then((response) => response.json())
      .then((data) => {console.log(data);
      setStore(data);});  
    
  };
  return (
    <div className="App">
      <div className="topnav">
        <a href="#home">Edvora</a>
        <div className="split1">
          <a href="#contact" className="split"></a>
          <a className="split pimage">
            Dhruv singh
            <img
              src={
                "https://img.izismile.com/img/img3/20100428/640/she_makes_random_640_01.jpg"
              }
            ></img>
          </a>
        </div>
      </div>
      <div className="mainbody">
        <div className="filters">
          <button>Nearest rides</button>

          <button onClick={fethdata}>Upcoming rides</button>
          <button onClick={fethdata} >Past rides</button>
          <button  onClick={fethdata} className="split1">Filters</button>
        </div>
        {store.map((i) => {
          return (
            
            <div className="container" key={i.id}>
              <div className="imagecontainer">
                <img
                  src={
                    i.map_url
                  }
                ></img>
              </div>
              <div className="detailsholder">
                <div className="citycontaner">
                  Ride Id : {i.id}
                  <div className="split2">
                    <li>{i.city}</li>
                    <li>{i.state}</li>
                  </div>
                </div>
                <div>Origin Station : {i.origin_station_code}</div>
                <div>station_path : {i.station_path}</div>
                <div>Date :{i.date}</div>
                <div>Distance : 0</div>
                //ygjyg
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
