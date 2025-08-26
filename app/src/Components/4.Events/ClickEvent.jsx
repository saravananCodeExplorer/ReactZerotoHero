// ClickEvent.jsx
function ClickEvent() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Click Event Example</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickEvent;
