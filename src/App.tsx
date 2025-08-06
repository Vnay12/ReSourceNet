import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Login Page</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/suppliers" element={<div>Suppliers</div>} />
        <Route path="/analytics" element={<div>Analytics</div>} />
        <Route path="/sustainability" element={<div>Sustainability</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
