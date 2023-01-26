import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import FlightSearch from "./FlightSearch";
import SearchResult from "./SearchResult";

const Master = () => {
  const [from, setfrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [arrival, setArrival] = useState([]);
  const [flights, setFlights] = useState([]);
  const [filteredflights, setFilteredFlights] = useState([]);
  const [prices, setPrices] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const getData = async () => {
    await fetch(
      "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredFlights(data);
        setFlights(data);
        setPrices(data);
        setfrom(data[0].from);
        setTo(data[0].to);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <FlightSearch
        from={from}
        setfrom={setfrom}
        to={to}
        setTo={setTo}
        depart={depart}
        setDepart={setDepart}
        arrival={arrival}
        setArrival={setArrival}
        flightsProps={flights}
        setFilteredFlights={setFilteredFlights}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />

      <SearchResult
        from={from}
        to={to}
        depart={depart}
        arrival={arrival}
        flights={flights}
        setFlights={setFlights}
        filteredflights={filteredflights}
        setFilteredFlights={setFilteredFlights}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </div>
  );
};

export default Master;
