import css from "./PagSystem.module.css";

const PagSystem = ({ page, setNextPage, setPrevPage }) => {
  return (
    <div className={css.pag_div}>
      {page != 1 ? (
        <button className={css.button_pag} onClick={setPrevPage}>
          Back
        </button>
      ) : (
        <div></div>
      )}
      <button className={css.button_pag} onClick={setNextPage}>
        Next
      </button>
    </div>
  );
};

export default PagSystem;
