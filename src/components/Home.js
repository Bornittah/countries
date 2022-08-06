import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './shared/NavBar';
import Grid from './shared/Grid';
import { fetchCountries } from '../redux/countries';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const countries = useSelector((state) => state.entities.countries);
  const ctrs = [];
  countries.map((data) => {
    ctrs.push(data.region);
    return ctrs;
  });
  const regions = [...new Set(ctrs)];
  const countCountries = (array, region) => array.filter((item) => item === region).length;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    setLoading(true);
  }, []);

  return (
    <div>
      <NavBar title="Home" />
      <div className="home-screen">
        <h2>The World</h2>
        <ul className="flex space-btn home-data">
          <li className="flex flex-column text-right">
            <span className="data-number">{regions.length}</span>
            <span>Major Regions</span>
          </li>
          <li className="flex flex-column text-right">
            <span className="data-number">{countries.length}</span>
            <span>Countries</span>
          </li>
        </ul>
      </div>
      <div className="grid-container">
        {loading ? (
          regions.map((region) => (
            <Grid key={region} title={region} number={countCountries(ctrs, region)} />
          ))) : ('loading data...')}
      </div>
    </div>
  );
};

export default Home;
