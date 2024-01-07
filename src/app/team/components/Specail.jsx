"use client";
import { useState } from "react";
export default function Specail({ name }) {
  const [check, setCheck] = useState("");
  const [show, setShow] = useState(false);
  const ravil = name === "Ravil Patel";
  const handleChange = (e) => {
    setCheck(e.target.value)
    if (check === "143Bandi") {
      setShow(!show);
      setCheck("");
    }
    
  };
  return (
    <>
      {ravil && (
        <input
          className="bg-transparent hidden !outline-none focus:!outline-none md:block"
          style={{
            position: "absolute",
            bottom: 15,
            right: 0,
            cursor: "default",
            width: 150,
          }}
          onChange={(e) => {
            handleChange(e);
          }} 
          value={check}
        />
      )}
      {show && (
        <div>
          <img
            style={{
              position: "absolute",
              height: "100%",
              width: "20%",
              left: "40%",
              top:0,
              border:5,
              borderStyle:"solid",
              borderColor:"white",
              borderRadius:50
            }}
            src={
              (require =
                "https://drive.google.com/uc?export=view&id=1eJ6hgQC6l686Eq2F4Pzt78qjP4idVg5T")
            }
          />
          <button
            style={{
              position: "absolute",
              height: "10%",
              width: "10%",
              top: "87%",
              right: "45%",
              color:"white",
              border:5,
              borderStyle:"solid",
              borderColor:"white",
              borderRadius:50
            }}
            onClick={() => setShow(!show)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
