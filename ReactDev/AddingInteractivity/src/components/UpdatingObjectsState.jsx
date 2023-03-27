import { useState } from "react";
import { useImmer } from "use-immer";

export default function UpdatingObjectsState() {
  return (
    <>
      <MovingDot />
      <div>===============================</div>
      <Form />
      <div>===============================</div>
      <Form1 />
      <div>===============================</div>
      <Form2 />
      <div>===============================</div>
      <Scoreboard />
      <div>===============================</div>
      <Canvas />
      <div>===============================</div>
      <Canvas1 />
    </>
  );
}
// =============TODO==============
function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
// =============TODO==============
function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  //   function handleLastNameChange(e) {
  //     setPerson({
  //       ...person,
  //       lastName: e.target.value,
  //     });
  //   }

  //   function handleEmailChange(e) {
  //     setPerson({
  //       ...person,
  //       email: e.target.value,
  //     });
  //   }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleFirstNameChange}
        />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
// =============TODO==============
function Form1() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}

// =============TODO==============

export function Form2() {
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    updatePerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}

// =============TODO==============

export function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}

// =============TODO==============

const initialPosition = {
  x: 0,
  y: 0,
};

export function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    shape.position.x += dx;
    shape.position.y += dy;
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}

function Box({ children, color, position, onMove }) {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  function handlePointerDown(e) {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        backgroundColor: color,
        position: "absolute",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >
      {children}
    </div>
  );
}

function Background({ position }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(
        ${position.x}px,
        ${position.y}px
      )`,
        width: 250,
        height: 250,
        backgroundColor: "rgba(200, 200, 0, 0.2)",
      }}
    />
  );
}

// =============TODO==============

const initialPosition1 = {
  x: 0,
  y: 0,
};

export function Canvas1() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition1,
  });

  function handleMove(dx, dy) {
    shape.position.x += dx;
    shape.position.y += dy;
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition1} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}
