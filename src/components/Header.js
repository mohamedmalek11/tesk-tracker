import Button from './Button'

const Header = () => {

    const onClick = () => {
        console.log("clicked from header")
    }

    return (
        <header className="header">
            <h1>Task Tracker</h1>
        <Button title="Add" color="green" onClick={onClick}/>
        </header>
    )
}

export default Header