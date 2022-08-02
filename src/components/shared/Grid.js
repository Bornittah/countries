import { PropTypes } from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Grid = ({ title, number, onClick }) => (
  <div className="grid">
    <div className="item">
      <FaArrowAltCircleRight onClick={onClick} />
      <div className="data-title">
        <h3>{title}</h3>
        <p>
          <span>{number}</span>
          <span>Countries</span>
        </p>
      </div>
    </div>
  </div>
);

Grid.defaultProps = {
  title: null,
  number: null,
  onClick: null,
};

Grid.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  onClick: PropTypes.func,
};

export default Grid;
