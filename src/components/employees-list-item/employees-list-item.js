import './employees-list-item.css'

function EmployeesListItem(props) {
    const {onToggleProp, onDelete, user} = props;
    const {name, salary} = user;
    
    let classList = 'list-group-item d-flex justify-content-between';

    if (user.increase) {
        classList += ' increase';
    }

    if (user.rise) {
        classList += ' like';
    }

    return (
        <li className={classList}>
            <span 
                className="list-group-item-label" 
                onClick={onToggleProp}
                data-toggle="rise">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center">
                <button 
                    type="button"
                    className="btn-cookie btm-sm"
                    onClick={onToggleProp}
                    data-toggle="increase">   
                    <i className="fas fa-cookie"></i>
                </button>
                <button 
                    type="button"
                    className="btn-trash btm-sm"
                    onClick={onDelete}>   
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;