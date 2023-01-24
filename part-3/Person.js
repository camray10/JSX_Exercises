function Person({ name, age, hobbies }){
    const voteInfo = age >= 18 ? "You should vote!" : "You're not old enough yet.";
    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

    return(
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>
                    Name: { name }
                </li>
            </ul>
            <ul>
                <li>
                    Age: { age }
                </li>
            </ul>
            <ul>
                Hobbies: { hobbiesLIs }
            </ul>
            <ul>
                <h3>{ voteInfo }</h3>
            </ul>
        </div>
    );
}