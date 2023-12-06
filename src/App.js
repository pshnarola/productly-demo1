import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ProductList from "./pages/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route
            path="/*"
            element={
              <h1 className="m-1 text-center text-dark-emphasis fs-4">
                Not Found !!
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
