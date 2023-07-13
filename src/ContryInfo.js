import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./";
function ContryInfo() {
  const [data, setData] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  const getSelectedCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [country]);

  const handleClick = () => {
    setCountry("");
    setShow(false);
  };

  return (
    <div>
      <input type="text " value={country} onChange={getSelectedCountry} />

      <button onClick={() => setShow(true)}>Click Here</button>
      <button onClick={handleClick}>Clear Input</button>
      <h4>Country Info</h4>

      {data && show ? (
        <div
          className="detailinfo"
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "2rem",
            maxWidth: "100%",
            flexWrap: "wrap",
          }}
        >
          {show ? (
            data.map((item, index) => (
              <div
                className="maindiv"
                key={index}
                style={{ padding: "2rem", backgroundColor: "whitesmoke" }}
              >
                <div className="countryInfo">
                  <p>Capital:{item.capital}</p>
                  <p>Population:{item.population}</p>
                  <p>
                    {" "}
                    Latitude:{item.latlng[0]} Logitude:{item.latlng[1]}
                  </p>

                  <img
                    src={item.flags["png"]}
                    alt={item.name}
                    style={{ width: "100px" }}
                  />
                </div>

                <div className="weatherInfo">
                  <button>Capital Weather</button>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ContryInfo;
