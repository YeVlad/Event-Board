const PagSystem = ({ page, setNextPage, setPrevPage }) => {
  return (
    <div className="pag_div">
      {page != 1 ? (
        <button className="button_pag" onClick={setPrevPage}>
          Back
        </button>
      ) : (
        <div></div>
      )}
      <button className="button_pag" onClick={setNextPage}>
        Next
      </button>
    </div>
  );
};

export default PagSystem;
