import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import MusicDetail from './page/MusicDetail/MusicDetail';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music/:id" element={<MusicDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
