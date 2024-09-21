const FilterPeople = ({ changeFilter }) => {
  function handlechangeFilter(value) {
    changeFilter(value);
  }
  return (
    <>
      Filter <input type="text" onChange={handlechangeFilter} />
    </>
  );
};

export default FilterPeople;
