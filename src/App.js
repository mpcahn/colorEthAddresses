import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import Jdenticon from "react-jdenticon";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("#b32aa9");
  const [address, setAddress] = useState(
    "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
  );

  let arr = [];
  let remStr;

  if (address.length === 42) {
    for (let i = 0; i < 6; i++) {
      arr.push("#" + address.substring(6 * i + 2, 6 * i + 8));
    }

    remStr = address.substring(38);
  }

  return (
    <div className="App">
      <h2>Enter Address</h2>
      <input onChange={(e) => setAddress(e.target.value)} size="42" />

      {address.length === 42 ? (
        <div>
          <div>
            <div>Jdenticon:</div>
            <Jdenticon size="100" value={address} />
          </div>
          <div>Jazzicon:</div>
          <div>
            <Jazzicon diameter={100} seed={jsNumberForAddress(address)} />
          </div>
          <div>Colors From Address: {address}</div>
          {arr.map((hex, i) => (
            <div className="value" key={i} style={{ borderLeftColor: hex }}>
              {hex}
            </div>
          ))}
          Remainder: {remStr}
          <br />
          <br />
          need 6 colors and something to do with remainder
        </div>
      ) : (
        <div>Not a valid ETH Address</div>
      )}

      <HexColorPicker color={color} onChange={setColor} />
      <div className="value" style={{ borderLeftColor: color }}>
        Current color is {color}
      </div>
      <div className="buttons">
        <button onClick={() => setColor("#c6ad23")}>Choose gold</button>
        <button onClick={() => setColor("#556b2f")}>Choose green</button>
        <button onClick={() => setColor("#207bd7")}>Choose blue</button>
      </div>
    </div>
  );
}
