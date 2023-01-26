import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import "./header.css";
import { MdFlightTakeoff } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { IoMdTrain } from "react-icons/io";


const Header = () => {
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setMailId(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const navigate = useNavigate();
  let username = localStorage.getItem("username")
  
  

  return (
    <nav className='navbar'>
      <div className='container'>
        <a className='navbar' href='/'>
          <img src={logo} alt='logo' width='120' height='40' className='logo' />
        </a>
        <div className='navLinks'>
          <ul>
            <li>
              <button
                type='button'
                className='btn btn-outline-danger'
                onClick={() => navigate("/Master")}
              >
                <MdFlightTakeoff/> FLIGHTS
              </button>
            </li>
            <li>
              <button
                type='button'
                className='btn btn-outline-danger'
                onClick={() => navigate("/hotels")}
              >
                <RiHotelFill/> HOTELS
              </button>
            </li>
            <li>
              <button
                type='button'
                className='btn btn-outline-danger'
                onClick={() => navigate("/trains")}
              >
                <IoMdTrain/> TRAINS
              </button>
            </li>
            <li>
              <div className='dropdown ms-2'>
                <button
                  className='btn btn-primary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {username}
                </button>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <li>
                    <a className='dropdown-item' href='.'>
                      Hello {username}
                    </a>
                  </li>

                  <li>
                    <a
                      className='dropdown-item'
                      href='.'
                      onClick={() => navigate("/")}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
