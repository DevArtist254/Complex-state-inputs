import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleEvent(e) {
    const { value, name } = e.target;

    setContact((prevData) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevData.lName,
          email: prevData.email
        };
      } else if (name === "lName") {
        return {
          fName: prevData.fName,
          lName: value,
          email: prevData.email
        };
      } else if (name === "email") {
        return {
          fName: prevData.fName,
          lName: prevData.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleEvent} />
        <input name="lName" placeholder="Last Name" onChange={handleEvent} />
        <input name="email" placeholder="Email" onChange={handleEvent} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
