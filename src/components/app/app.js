import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

const users = [
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
];


function App() {
    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList users={users}/>
            <EmployeesAddForm />
        </div>
    );
}

export default App;