import './employees-list-item.css'

const EmployeesListItem = ({user}) => {
    let classList = 'list-group-item d-flex justify-content-between';

    if (user.increase) {
        classList += ' increase';
    }

    return (
        <li className={classList}>
            <span className="list-group-item-label">{user.name}</span>
            <input type="text" className="list-group-item-input" defaultValue={user.salary + '$'}/>
            <div className="d-flex justify-content-center">
                <button 
                    type="button"
                    className="btn-cookie btm-sm">   
                    <i className="fas fa-cookie"></i>
                </button>
                <button 
                    type="button"
                    className="btn-trash btm-sm">   
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeesListItem;