import { createRoot } from 'react-dom/client';
document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app'));
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
*/
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

root.render(Profile());
