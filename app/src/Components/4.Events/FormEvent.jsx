// FormEvent.jsx
import { useState } from "react";

function FormEvent() {
  const [name, setName] = useState('');

  function handleSubmit(e) {
   
    if(name == ''){
        alert("Invalid Name") 
           e.preventDefault(); // stop page reload
    }
    else{
    alert("Form submitted! Name: " + name);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Form Submit Event</h2>
      <form  onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormEvent;
