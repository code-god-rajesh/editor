import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/regular.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import Editor from "./components/editor/Editor";

function App() {
  return (
    <div className="row mx-auto">
      <div className="col-6">
        <Editor />
      </div>
    </div>
  );
}

export default App;
