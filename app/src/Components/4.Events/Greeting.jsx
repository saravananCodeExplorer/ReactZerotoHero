// Greeting.jsx
function Greeting() {
  function sayHello(name) {
    alert("Hello, " + name);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Event with Parameters</h2>
      <button onClick={() => sayHello("Saravanan")}>Greet</button>
    </div>
  );
}

export default Greeting;
