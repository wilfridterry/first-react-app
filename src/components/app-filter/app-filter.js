import './app-filter.css';

function AppFilter({filter, onFilterSelect}) {

    const buttonsData = [
        {dataFilter: 'all', content: 'All employees'},
        {dataFilter: 'rise', content: 'For a salary increase'},
        {dataFilter: 'more-1000', content: 'Salary more than 1000$'},
    ];
    
    const buttons = buttonsData.map(({dataFilter, content}) => {
        const active = dataFilter === filter;
        const className = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button
                className={`btn ${className}`}
                type='button'
                key={dataFilter}>
                onClick={() => onFilterSelect(dataFilter)}
                {content}
            </button>
        );
    });
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;