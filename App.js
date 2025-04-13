import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PythonLabPage from "./pages/pythonLabPage";
import EditorPage from "./pages/EditorPage";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Python Hands-on Labs</h1>
      <Link to="/lab">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition">
          Open Lab
        </button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PythonLabPage />} />
        {/* <Route path="/editor/:filename" element={<PythonEditorPage />} /> */}
        <Route path="/editor/:filename" element={<EditorPage />} />
      </Routes>
    </Router>
  );
}
export default App;
