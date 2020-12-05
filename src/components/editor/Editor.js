import React from "react";
import Toolbar from "../toolbar/Toolbar";
import "./Editor.css";
export default function Editor() {
  function paste(e) {
    e.preventDefault();
    const open = new RegExp("<", "gi");
    const close = new RegExp(">", "gi");
    const text = (e.originalEvent || e).clipboardData
      .getData("text/plain")
      .replace(open, "&lt")
      .replace(close, "&gt");
    document.execCommand("insertHTML", false, text);
  }

  return (
    <React.Fragment>
      <Toolbar />
      <div
        className="editor"
        id="editor"
        contentEditable="true"
        dir="ltr"
        onPaste={(e) => paste(e)}
        spellCheck="false"
        onKeyPress={(e) => {
          console.log(e);
        }}
        onChange={(e) => console.log("sdsdasdasd, ", e)}
      ></div>
    </React.Fragment>
  );
}
