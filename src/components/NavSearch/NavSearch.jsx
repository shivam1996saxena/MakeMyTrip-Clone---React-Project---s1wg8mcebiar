import React from 'react';
import { Link } from 'react-router-dom';
import '../NavSearch/NavSearch.css';

function NavSearch() {
  return (
    <>
      <div className="navsearch">
      <Link to="/flightdata">
        <div className="flights">
          <img src="https://img.icons8.com/ios/50/null/airplane-take-off.png" />
          <h4>Flights</h4>
        </div>
        </Link>
        <Link to="/hoteldata">
        <div className="hotel">
          <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/null/external-hotel-hotel-and-restaurant-inipagistudio-mixed-inipagistudio.png" />
          <h4>Hotels</h4>
        </div>
        </Link>
        <div className="home">
          <img src="https://img.icons8.com/ios/50/null/neighborhood.png" />
          <h4>Homestays</h4>
        </div>
        <div className="holiday">
          <img src="https://img.icons8.com/external-ddara-lineal-ddara/64/null/external-air-balloon-music-fest-ddara-lineal-ddara.png" />
          <h4>Holiday Packages</h4>
        </div>
        <Link to="/traindata">
        <div className="train">
          <img src="https://img.icons8.com/ios/50/null/city-railway-station.png" />
          <h4>Trains</h4>
        </div>
        </Link>
        <div className="bus">
          <img src="https://img.icons8.com/badges/48/null/experimental-bus-badges.png" />
          <h4>Buses</h4>
        </div>
        <div className="cab">
          <img src="https://img.icons8.com/ios/50/null/taxi.png" />
          <h4>Cabs</h4>
        </div>
        <div className="forex">
          <img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/1A1A1A/external-exchange-avitation-and-airport-xnimrodx-lineal-xnimrodx.png" />
          <h4>Forex</h4>
        </div>
        <div className="charter-flight">
          <img src="https://img.icons8.com/dotty/80/1A1A1A/airplane-front-view.png" />
          <h4>Charter Flights</h4>
        </div>
        <div className="activity">
          <img src="https://img.icons8.com/ios-glyphs/30/1A1A1A/canoe-sprint.png" />
          <h4>Activity</h4>
        </div>
      </div>
      </>
  )
}

export default NavSearch
