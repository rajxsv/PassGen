import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/399160/pexels-photo-399160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <h1
        style={{
          padding: "50px",
          marginTop: "0px",
          fontFamily: "'Roboto', sans-serif",
          color: "#03017d",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "6rem",
        }}
      >
        pass
        <span
          style={{
            color: "#028a88",
          }}
        >
          Gen
        </span>
      </h1>

      <div style={{
          justifyContent: "center",
          textAlign: "center",
          fontSize: "2rem",
        }}>
        <div>
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            style={{
              padding: "12px 12px 12px 12px",
              borderRadius: "8px",
              borderColor: "#fff",
              width: "40%",
              marginRight: "10px",
              borderStyle:"none",
              fontFamily: "'Roboto', sans-serif",
              fontSize:"2rem",
            }}
          />
          <button
            onClick={copyPasswordToClipboard}
            style={{
              padding: "12px 12px 12px 12px",
              fontFamily:"Roboto",
              backgroundColor:"#028a88",
              borderStyle:"none",
              color:"white",
              fontSize:"2rem",
              borderRadius: "8px",
            }}
          >
            Copy
          </button>
        </div>
        <div style={{
          justifyContent: "center",
          textAlign: "center",
          display :"flex",
          flexDirection:"row",
          marginTop:"15px",
          color:"#03017d",
          fontWeight:"initial"
        }}>
          <div style={{
            marginRight:"10px",
            paddingRight:"10px"
          }}>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div style={{
            marginRight:"10px",
            paddingRight:"10px"
          }}>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div style={{
            marginRight:"10px",
            paddingRight:"10px"
          }}>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
