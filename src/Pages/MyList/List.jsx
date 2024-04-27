

const List = ({lists}) => {

  const {image, name, location} = lists;

  return (
    <div>
      <h2 className="text-white">{name}</h2>
    </div>
  );
};

export default List;