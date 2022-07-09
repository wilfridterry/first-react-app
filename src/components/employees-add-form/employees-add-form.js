import { Component } from 'react';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: ''
        };
    }

    handleOnChange = (event) => {
        const {name, value} = event.target; 
        
        this.setState({
            [name]: value
        });    
    }

    handleOnCreate = (e) => {
        e.preventDefault();

        if (!this.state.name || !this.state.salary) {
            return;
        }
        
        const userData = {
            name: this.state.name,
            salary: this.state.salary,
        };

        this.props.onCreate(userData, e);

        this.setState({
            name: '',
            salary: ''
        });
    }

    render() {
        const {name, salary} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form 
                    onSubmit={this.handleOnCreate}
                    className="add-form d-flex gap-3">
                    <input 
                        type="text" 
                        className="form-control new-post-label" 
                        placeholder="What is his name?"
                        onChange={this.handleOnChange}
                        name="name"
                        value={name}
                    />
                     <input 
                        type="number" 
                        className="form-control new-post-label" 
                        placeholder="How much is his salary?"
                        onChange={this.handleOnChange}
                        name="salary"
                        value={salary}
                    />
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;