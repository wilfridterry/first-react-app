import './search-panel.css';

const SearchPanel = (props) => {
    return (
        <input 
            type="text" 
            className="form-control search-input"
            placeholder="Find an employee"
            value={props.term}
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
};

export default SearchPanel;