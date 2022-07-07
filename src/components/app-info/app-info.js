import './app-info.css'

const AppInfo = ({all, increased}) => {
    return (
        <div className="app-info">
            <h1>Accounting for empoyees of company N</h1>
            <h2>Number of employees: {all}</h2>
            <h2>The award will be receive to: {increased}</h2>
        </div>
    );
}

export default AppInfo;