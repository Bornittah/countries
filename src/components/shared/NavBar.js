import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FaSearch, FaGlobe } from 'react-icons/fa';

const NavBar = ({ title }) => (
  <header className="header">
    <nav>
      <ul className="menu flex space-btn">
        <li>
          <Link to="/" className="link"><FaGlobe /></Link>
        </li>
        <li>{title}</li>
        <li><FaSearch /></li>
      </ul>
    </nav>
  </header>
);

NavBar.defaultProps = {
  title: null,
};

NavBar.propTypes = {
  title: PropTypes.string,
};

export default NavBar;
