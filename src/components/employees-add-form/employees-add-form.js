import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form className="add-form d-flex gap-3">
                <input 
                    type="text" 
                    className="form-control new-post-label" 
                    placeholder="What is his name?"
                />
                 <input 
                    type="number" 
                    className="form-control new-post-label" 
                    placeholder="How much is his salary?"
                />
                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    );
}

export default EmployeesAddForm;