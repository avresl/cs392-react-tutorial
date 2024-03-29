const TermButton = ({term, selection, setSelection}) => (
    <div data-cy={term}>
      <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
        onChange={() => setSelection(term)} />
      <label className="btn btn-success mb-1 p-2" htmlFor={term}>
      { term }
      </label>
    </div>
);

const TermSelector = ({terms, selection, setSelection}) => (
    <div className="btn-group me-auto">
      { 
        Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
      }
    </div>
);


export default TermSelector;