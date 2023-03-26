import { flushSync } from "react-dom";

export default function RespondingToEvents() {
  return (
    <>
      <Button />
      <div>===============================</div>
      <TollBar />
      <div>===============================</div>
      <ToolBar1 />
      <div>===============================</div>
      <ToolBar2 />
      <div>===============================</div>
      <Tollbar3App />
      <div>===============================</div>
      <ToolBar4 />
      <div>===============================</div>
      <ToolBar5 />
      <div>===============================</div>
      <Signup />
      <div>===============================</div>
    </>
  );
}

export function Button() {
  function handleClick() {
    alert("You clciked me!");
  }

  return <button onClick={handleClick}>I don't do anything</button>;
}

// =============TODO==============

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export function TollBar() {
  return (
    <div>
      <AlertButton message="Playing 1">Play Movie</AlertButton>
      <AlertButton message="Uploading 1">Upload Image</AlertButton>
    </div>
  );
}

// =============TODO==============

function Button1({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`);
  }
  return <Button1 onClick={handlePlayClick}>Play "{movieName}"</Button1>;
}

function UploadButton() {
  return <Button1 onClick={() => alert("Uploading!")}>Upload Image</Button1>;
}

export function ToolBar1() {
  return (
    <div>
      <PlayButton movieName={"Kiki's Delivery Service"} />
      <UploadButton />
    </div>
  );
}

// =============TODO==============

function Button2({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export function ToolBar2() {
  return (
    <div>
      <Button2 onSmash={() => alert("Playing!")}>Play Movie</Button2>
      <Button2 onSmash={() => alert("Uploading!")}>Upload Image</Button2>
    </div>
  );
}

// =============TODO==============

export function Tollbar3App() {
  return (
    <ToolBar3
      onPlayMovie={() => alert("Playing!")}
      onUploadImage={() => alert("Uploading!")}
    />
  );
}

function ToolBar3({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button3 onClick={onPlayMovie}>Play Movie</Button3>
      <Button3 onClick={onUploadImage}>Upload Image</Button3>
    </div>
  );
}

function Button3({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

// =============TODO==============

export function ToolBar4() {
  return (
    <div
      className="Tollbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <button onClick={() => alert("Playing!")}>Play Movie</button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}

// =============TODO==============
function Button5({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export function ToolBar5() {
  return (
    <div
      className="Tollbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button5 onClick={() => alert("Playing!")}>Play Movie</Button5>
      <Button5 onClick={() => alert("Uploading!")}>Upload Image</Button5>
    </div>
  );
}

// =============TODO==============

export function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
