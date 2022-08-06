import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import NavBar from './shared/NavBar';
import { fetchCountries } from '../redux/countries';

const Country = () => {
  const countries = useSelector((state) => state.entities.countries);
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  const country = countries.filter((country) => country.name.common === name);
  return (
    <div>
      <NavBar title={name} />
      <div className="home-screen">
        <ul className="flex space-btn home-data">
          <li className="text-right">
            <Link to={`/continent/${name}`} className="link flex justify-center align-center">
              <FaArrowLeft />
              Back
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <table className="country-table">
          <thead>
            <th>Field</th>
            <th>Details</th>
          </thead>
          {country.map((data) => (
            <tbody key={data.name.common}>
              <tr>
                <td>Name</td>
                <td>{data.name.common}</td>
              </tr>
              <tr>
                <td>Capital City</td>
                <td>{data.capital}</td>
              </tr>
              <tr>
                <td>Coat of Arm</td>
                <td><img src={data.coatOfArms.svg} alt={data.coatOfArms.svg} className="coat-of-arm" /></td>
              </tr>
              <tr>
                <td>Population</td>
                <td>{data.population}</td>
              </tr>
              <tr>
                <td>Sub Region</td>
                <td>{data.subregion}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Country;
