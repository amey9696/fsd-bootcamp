import './css/Location.css';

const Location = ({ location }) => {
  return <div className="location">
      <p>City- {location.city}</p>
      <p>Country- {location.country}</p>
    </div>;
};

export default Location;
