import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({users, onDelete, onToggleProp}) => {
    
    return (
        <ul className="app-list list-group">
            {users.map(user => 
                <EmployeesListItem 
                    key={user.id} 
                    user={user} 
                    onDelete={() => onDelete(user.id)}
                    onToggleProp={(e) => onToggleProp(user.id, e.currentTarget.dataset.toggle)}
                    /*{...item}*//>
            )}
        </ul>
    );
};

export default EmployeesList;