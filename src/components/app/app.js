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

        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Jonh Smith',
                    salary: 1000,
                    increase: true,
                    rise: true
                },
                {
                    id: 2,
                    name: 'Sam Makarti',
                    salary: 800,
                    increase: false,
                    rise: false
                },
                {
                    id: 3,
                    name: 'Den Vin',
                    salary: 2100,
                    increase: true,
                    rise: false
                },
            ],
            term: '',
            filter: 'all'
        };
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
                increase: false,
                rise: false
            });

            return {users: newUsers};
        });
    }

    handleToggleProp = (id, prop) => {
        this.setState(({users}) => ({
            users: users.map(user => {
                if (user.id === id) {
                    return {...user, [prop]: !user[prop]}
                }
                return user;
            })
        }));
    }

    searchUsers = (users, term) => {
        if (term.length === 0) {
            return users;
        }

        return users.filter(item => {
            return item.name.search(term) !== -1;
        });
    }

    filterUsers = (users, filter) => {
        if (filter === 'rise') {
            return users.filter(user => user.rise);
        }

        if (filter === 'more-1000') {
            return users.filter(user => user.salary >= 1000);
        }

        return users;
    }

    handleChangeSearch = (term) => {
        this.setState({term});
    }

    handleFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {users, term, filter} = this.state;
        const increased = users.filter(user => user.increase);
        
        let filteredUsers = this.filterUsers(users, filter);

        filteredUsers = this.searchUsers(filteredUsers, term);

        return (
            <div className="app">
                <AppInfo all={filteredUsers.length} increased={increased.length}/>
                <div className="search-panel">
                    <SearchPanel term={term} onChange={this.handleChangeSearch}/>
                    <AppFilter 
                        onFilterSelect={this.handleFilterSelect} 
                        filter={filter}     
                    />
                </div>
                <EmployeesList 
                    users={filteredUsers}
                    onDelete={this.handleOnDelete}
                    onToggleProp={this.handleToggleProp}
                    />
                <EmployeesAddForm onCreate={this.handleOnCreate}/>
            </div>
        );
    }
}

export default App;