import { React, useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () => {
    let textBox = document.getElementById("textbox");
    textBox.select();
    navigator.clipboard.writeText(text);
  };

  const handleSpace = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const handleReset = () => {
    let newText = "";
    setText(newText);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <div className="row">
          <h3>{props.heading}</h3>
          <div className="col-md-12">
            <div className="mb-3 text-center">
              <textarea
                className="form-control"
                id="textbox"
                rows="8"
                value={text}
                onChange={handleChange}
                style={{
                  backgroundColor: props.mode === "dark" ? "gray" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 d-flex flex-wrap justify-content-start align-items-center gap-3">
            <button className="btn btn-primary" onClick={handleUpperCase}>
              Convert Uppercase
            </button>

            <button className="btn btn-primary" onClick={handleLowerCase}>
              Convert Lowercase
            </button>

            <button className="btn btn-primary" onClick={handleCopy}>
              Copy Text
            </button>

            <button className="btn btn-primary" onClick={handleSpace}>
              Remove Space
            </button>

            <button className="btn btn-primary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        {/* summary section start here */}
        <div className="row my-3">
          <div className="col-md-12 border">
            <div
              style={{
                color: props.mode === "dark" ? "white" : "black",
                display: text.length ? "inline-block" : "none",
              }}
            >
              <h3>Your Text Summary</h3>
              <p>
                {text.split(" ").length} words and {text.length} characters
              </p>
              <p>{0.008 * text.split(" ").length} Minutes read</p>
            </div>
          </div>
        </div>
        {/* summary section ends here */}

        {/* Preview section start here */}
        <div className="row">
          <div className="col-md-12 border">
            <div
              style={{
                color: props.mode === "dark" ? "white" : "black",
                display: text.length ? "inline-block" : "none",
              }}
            >
              <h3 className="">Preview</h3>
              <p>
                {text.length > 0
                  ? text
                  : "Write somethinig in the above text box"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
