

const CountryBasedFiltered = ({spot}) => {

  const {name, image, location, short_description, average_cost, travel_time} = spot;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="" />
    </div>
  );
};

export default CountryBasedFiltered;