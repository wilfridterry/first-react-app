import { Component } from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            increase: props.user.increase,
            isGoingIncrease: false
        };
    }

    handleIncreaseOnClick() {
        this.setState(({increase}) => ({increase: !increase}))
    }

    handleSelectedForIncreseOnClick() {
        this.setState(({isGoingIncrease}) => ({isGoingIncrease: !isGoingIncrease}));
    }

    render() {
    
        const {name, salary} = this.props.user;
        
        let classList = 'list-group-item d-flex justify-content-between';

        if (this.state.increase) {
            classList += ' increase';
        }

        if (this.state.isGoingIncrease) {
            classList += ' like';
        }

        return (
            <li className={classList}>
                <span 
                    className="list-group-item-label" 
                    onClick={this.handleSelectedForIncreseOnClick.bind(this)}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center">
                    <button 
                        type="button"
                        className="btn-cookie btm-sm"
                        onClick={this.handleIncreaseOnClick.bind(this)}>   
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button 
                        type="button"
                        className="btn-trash btm-sm"
                        onClick={this.props.onDelete}>   
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;