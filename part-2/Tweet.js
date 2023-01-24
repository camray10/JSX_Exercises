function Tweet({ username, name, date, message }){
    return (
        <div className = "tweet">
            <span className = "username">{ username }</span>
            <span className = "name">{ name }</span>
            <span className = "date">{ date }</span>
            <p className = "message">{ message }</p>
        </div>
    );
}