import { Component } from 'react';
import {nanoid} from 'nanoid';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {users: [
            {
                id: 1,
                name: 'Jonh Smith',
                salary: 1000,
                increase: true,
            },
            {
                id: 2,
                name: 'Sam Makarti',
                salary: 800,
                increase: false,
            },
            {
                id: 3,
                name: 'Den Vin',
                salary: 2100,
                increase: true,
            },
        ]};
    }

    handleOnDelete = (i) => {
        this.setState(({users}) => {
            return {users: users.filter(user => user.id !== i)};
        });
    }

    handleOnCreate = ({name, salary}) => {
        this.setState(state => {
            const newUsers = state.users.slice();

            newUsers.push({
                id: nanoid(),
                name: name,
                salary: salary,
                increase: false
            });

            return {users: newUsers};
        });
    }

    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList 
                    users={this.state.users}
                    onDelete={this.handleOnDelete}
                    />
                <EmployeesAddForm onCreate={this.handleOnCreate}/>
            </div>
        );
    }
}

export default App;