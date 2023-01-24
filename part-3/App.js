function App() {
    return (
      <div>
        <Person
          name="Bob"
          age={44}
          hobbies={["Working out", "Going on walks", "Playing Frisbee"]}
        />
        <Person
          name="Timmy"
          age={3}
          hobbies={["Playing with toys", "Crying"]}
        />
        <Person
          name="Carla"
          age={37}
          hobbies={["Cooking", "Soccer", "Painting"]}
        />
      </div>
    );
  }