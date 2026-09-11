import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
        <div className="text-center p-12 border border-gray-200 bg-paper">
          <h1 className="text-4xl text-forest mb-4">AuraFIT</h1>
          <p className="text-stone text-lg">Development Environment</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
