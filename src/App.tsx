import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './routes/Index';
import { Onboarding } from './routes/Onboarding';
import { Mood } from './routes/Mood';
import { Result } from './routes/Result';
import { History } from './routes/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/result" element={<Result />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
