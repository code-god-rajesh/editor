import React from "react";
import "./Toolbar.css";
export default function Toolbar() {
  function format(com, val) {
    document.execCommand(com, false, val);
  }

  const addLink = () => {
    let linkURL = prompt("Enter the link here: ", "http://");
    format("insertHTML", `<a href=${linkURL} target="_blank">${linkURL}</a>`);
  };
  const formatBlock = (value) => {
    format("formatBlock", `<${value}>`);
  };
  return (
    <div className="toolbar">
      <select onChange={(e) => formatBlock(e.target.value)}>
        <option value="p">Paragraph</option>
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
      </select>
      <button className="btn" onClick={(e) => format("bold")}>
        <i className="fas fa-bold"></i>
      </button>
      <button className="btn" onClick={(e) => format("italic")}>
        <i className="fas fa-italic"></i>
      </button>
      <button className="btn" onClick={(e) => format("underline")}>
        <i className="fas fa-underline"></i>
      </button>
      <button className="btn" onClick={(e) => format("strikeThrough")}>
        <i className="fas fa-strikethrough"></i>
      </button>
      <button className="btn" onClick={(e) => format("subscript")}>
        <i className="fas fa-subscript"></i>
      </button>
      <button className="btn" onClick={(e) => format("superscript")}>
        <i className="fas fa-superscript"></i>
      </button>
      <button className="btn" onClick={(e) => format("undo")}>
        <i className="fas fa-undo"></i>
      </button>
      <button className="btn" onClick={(e) => format("redo")}>
        <i className="fas fa-redo"></i>
      </button>
      <button className="btn" onClick={(e) => format("insertUnorderedList")}>
        <i className="fas fa-list-ul"></i>
      </button>
      <button className="btn" onClick={(e) => format("insertOrderedList")}>
        <i className="fas fa-list-ol"></i>
      </button>
      <button className="btn" onClick={(e) => format("justifyLeft")}>
        <i className="fas fa-align-left"></i>
      </button>
      <button className="btn" onClick={(e) => format("justifyRight")}>
        <i className="fas fa-align-right"></i>
      </button>
      <button className="btn" onClick={(e) => format("justifyFull")}>
        <i className="fas fa-align-justify"></i>
      </button>
      <button className="btn" onClick={(e) => format("justifyCenter")}>
        <i className="fas fa-align-center"></i>
      </button>
      <button className="btn" onClick={(e) => format("indent")}>
        <i className="fas fa-indent"></i>
      </button>
      <button className="btn" onClick={(e) => format("outdent")}>
        <i className="fas fa-outdent"></i>
      </button>
      <button className="btn" onClick={(e) => addLink()}>
        <i className="fas fa-link"></i>
      </button>
      <button className="btn" onClick={(e) => format("unlink")}>
        <i className="fas fa-unlink"></i>
      </button>
    </div>
  );
}
