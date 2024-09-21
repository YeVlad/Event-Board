const FilterPeople = ({ changeFilter }) => {
  function handlechangeFilter(value) {
    changeFilter(value);
  }
  return (
    <div className="forFil">
      <p className="small_text"> Filter</p>
      <input type="text" onChange={handlechangeFilter} className="filter" />
    </div>
  );
};

export default FilterPeople;
