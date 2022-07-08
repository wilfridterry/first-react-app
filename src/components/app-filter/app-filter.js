import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {

    handleClick = (e) => {
        if (e.target.tagName === 'BUTTON') {
            this.props.onChange(e.target.dataset.filter);
        }
    }

    render() {

        const buttons = [
            {dataFilter: 'all', content: 'All employees'},
            {dataFilter: 'rise', content: 'For a salary increase'},
            {dataFilter: 'more-1000', content: 'Salary more than 1000$'},
        ];
        
        return (
            <div className="btn-group" onClick={this.handleClick}>
                {buttons.map(({dataFilter, content}) => {
                    const active = dataFilter === this.props.filter;
                    const className = active ? 'btn-light' : 'btn-outline-light';

                    return (
                        <button data-filter={dataFilter}
                            className={`btn ${className}`}
                            type='button'
                            key={dataFilter}>
                            {content}
                        </button>
                    );
                })}
            </div>
        );
   }
};

export default AppFilter;