import { useState } from "react";
import { useImmer } from "use-immer";

export default function UpdatingArrayState() {
  return (
    <>
      <List />
      <div>===============================</div>
      <List1 />
      <div>===============================</div>
      <ShapeEditor />
      <div>===============================</div>
      <CounterList />
      <div>===============================</div>
      <List4 />
      <div>===============================</div>
      <Listr5 />
      <div>===============================</div>
      <BucketList />
      <div>===============================</div>
      <ShoppingCart />
    </>
  );
}

// =============TODO==============
let nextId = 0;

export function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

// =============TODO==============

let initialArtists1 = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export function List1() {
  const [artists, setArtists] = useState(initialArtists1);
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}
            <button
              onClick={() => {
                setArtists(artists.filter((art) => art.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

// =============TODO==============
let initialShapes2 = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes2);

  function handleClick() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(nextShapes);
  }
  return (
    <>
      <button onClick={handleClick}>Move circles down!</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "purple",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  );
}

// =============TODO==============
let initialCounters3 = [0, 0, 0];

export function CounterList() {
  const [counters, setCounters] = useState(initialCounters3);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((counter, i) => {
      if (i === index) {
        return counter + 1;
      } else {
        return counter;
      }
    });
    setCounters(nextCounters);
  }
  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button
            onClick={() => {
              handleIncrementClick(i);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </ul>
  );
}

// =============TODO==============

let nextId1 = 3;
const initialArtists4 = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export function List4() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists4);

  function handleClick() {
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId1++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName("");
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
// =============TODO==============

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

export function Listr5() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}

// =============TODO==============
const initialList6 = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export function BucketList() {
  const [myList, setMyList] = useState(initialList6);
  const [yourList, setYourList] = useState(initialList6);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  }
  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

/*
import { useImmer } from 'use-immer';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, updateMyList] = useImmer(
    initialList
  );
  const [yourArtworks, updateYourList] = useImmer(
    initialList
  );

  function handleToggleMyList(id, nextSeen) {
    updateMyList(draft => {
      const artwork = draft.find(a =>
        a.id === id
      );
      artwork.seen = nextSeen;
    });
  }

  function handleToggleYourList(artworkId, nextSeen) {
    updateYourList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourArtworks}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
 */
// ==============TODODODODODODODODOTODO
/*

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if(product.id === productId) {
        return {...product, count: product.count + 1 }
        } else {
          return product
        }
      }
    ))
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
 */

// ==============TODODODODODODODODOTODO

const initialProducts7 = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts7);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleDelClick(productId) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else {
        return product;
      }
    });

    nextProducts = nextProducts.filter((product) => product.count > 0);
    setProducts(nextProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDelClick(product.id);
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}

// ==============TODODODODODODODODOTODO