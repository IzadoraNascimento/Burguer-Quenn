import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import PaginaSecundaria from './pages/PaginaSecundaria';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaInicial/>} />
            <Route path="/pagina-secundaria" element={<PaginaSecundaria/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
