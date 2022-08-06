import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FaGlobe } from 'react-icons/fa';

const NavBar = ({ title }) => (
  <header className="header">
    <nav>
      <ul className="menu flex">
        <li className="flex-1">
          <Link to="/" className="link"><FaGlobe /></Link>
        </li>
        <li className="flex-1">{title}</li>
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
