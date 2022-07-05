import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({users, onDelete}) => {
    
    return (
        <ul className="app-list list-group">
            {users.map(user => 
                <EmployeesListItem 
                    key={user.id} 
                    user={user} 
                    onDelete={() => onDelete(user.id)}
                    /*{...item}*//>
            )}
        </ul>
    );
};

export default EmployeesList;