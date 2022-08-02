import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './shared/NavBar';
import Grid from './shared/Grid';
import { fetchCountries } from '../redux/countries';

const Home = () => {
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
  }, []);

  return (
    <div>
      <NavBar title="Home" />
      <div className="home-screen">
        <h2>The World</h2>
        <ul className="flex space-btn home-data">
          <li className="flex flex-column text-right">
            <span className="data-number">33</span>
            <span>ff</span>
          </li>
          <li className="flex flex-column text-right">
            <span className="data-number">55</span>
            <span>ff</span>
          </li>
          <li className="flex flex-column text-right">
            <span className="data-number">44</span>
            <span>vv</span>
          </li>
        </ul>
      </div>
      <div className="grid-container">
        {regions.map((region) => (
          <Grid key={region} title={region} number={countCountries(ctrs, region)} />
        ))}
      </div>
    </div>
  );
};

export default Home;
