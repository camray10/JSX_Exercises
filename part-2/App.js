function App(){
    return(
        <div>
            <Tweet 
                username="Rayc287"
                name="Cameron Ray"
                date={ new Date().toDateString() }
                message="Hello, World."
                />
            <Tweet 
                username="Testy"
                name="Johnny Test"
                date={ new Date().toDateString() }
                message="wooohoo"
                />
            <Tweet 
                username="Tester 2"
                name="Test Man"
                date={ new Date().toDateString() }
                message="Display"
                />
        </div>
    );
}