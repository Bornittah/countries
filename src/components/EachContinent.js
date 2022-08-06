import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import NavBar from './shared/NavBar';
import { fetchRegionDetails } from '../redux/countries';

const EachContent = () => {
  const regionDetails = useSelector((state) => state.entities.countries);

  const { title } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRegionDetails(title));
  }, []);

  return (
    <div>
      <NavBar title={title} />
      <div className="home-screen flex flex-column">
        <ul className="flex space-btn home-data">
          <li className="text-right">
            <Link to="/" className="link flex justify-center align-center">
              <FaArrowLeft />
              Back to Home
            </Link>
          </li>
          <li className="flex flex-column text-right">
            <h2>{title}</h2>
            <p>
              {regionDetails.length}
              Countries
            </p>
          </li>
        </ul>
      </div>
      <div>
        <ul className="grid-container">
          { regionDetails.map((country) => (
            <Link to={`/country/${country.name.common}`} key={country.name.common} className="link">
              <li className="country-list flex space-btn">
                <div className="flex justify-center align-center">
                  <img src={country.flags.svg} className="flag" alt={country.flags.svg} />
                  <h3>{country.name.common}</h3>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EachContent;
