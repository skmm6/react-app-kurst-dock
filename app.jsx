import { createRoot } from 'react-dom/client';
import { useState } from 'react';

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
/*
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
};


function MyButton() {
  return <button>I'm a button</button>;
}


function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there <br />
        How do you?
      </p>
    </>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <h2>{user.name}</h2>
      <img className="avatar" src={user.imageUrl} />
    </div>
  );
}

root.render(MyApp());

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`Photo of ${user.name}`}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
*/

// ====================================Условный рендер TODO==========================
// ====================================Условный рендер TODO==========================
// ====================================Условный рендер TODO==========================
/*
let content;
let isLoggedIn = true;

function AdminPanel() {
  return (
    <>
      <h1>Админ панель</h1>
    </>
  );
}
function LoginForm() {
  return (
    <>
      <h1>Логин</h1>
    </>
  );
}

// function RenderContent() {
//   if (isLoggedIn) {
//     content = <AdminPanel />;
//     console.log('1');
//   } else {
//     content = <LoginForm />;
//   }
// }

function ToggleButton() {
  if (isLoggedIn) {
    isLoggedIn = false;
  } else {
    isLoggedIn = true;
  }

  root.render(RenderYsl());
}

function RenderYsl() {
  return (
    <div>
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}
      <button onClick={ToggleButton}>Переключатель</button>
    </div>
  );
}

// function RenderYsl() {
//   return (
//     <div>
//       {isLoggedIn && <AdminPanel />}
//       <button onClick={ToggleButton}>Переключатель</button>
//     </div>
//   );
// }




*/

// ====================================Визуализация списков  TODO==========================
// ====================================Визуализация списков  TODO==========================
// ====================================Визуализация списков  TODO==========================
/*
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 1 },
  { title: 'Apple', isFruit: true, id: 1 },
];

export default function ShoppingList() {
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

root.render(ShoppingList());

// ====================================Реагирование на события   TODO==========================
// ====================================Реагирование на события   TODO==========================
// ====================================Реагирование на события   TODO==========================
/*
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }
  return <button onClick={handleClick}>Click me</button>;
}

root.render(MyButton());
*/
// ====================================Обновление экрана  TODO==========================
// ====================================Обновление экрана  TODO==========================
// ====================================Обновление экрана  TODO==========================

// import { useState } from 'react';

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}> Clicked {count} times</button>;
// }

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

root.render(MyButton());
