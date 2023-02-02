import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawerAppBar from './Componentes/Menu/DrawerAppBar';
import Inicio from './pages/Inicio/Inicio'
import SobreMim from './pages/SobreMim/SobreMim'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <DrawerAppBar></DrawerAppBar>
      <Routes>
        <Route
          path="/Home"
          element={<Inicio />}
         />
        <Route
          path="/About"
          element={<Inicio />}
         />
         <Route
          path="/Contact"
          element={<SobreMim />}
         />
         <Route
          path="*"
          element={<h1>Página não encontrada</h1>}
         />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
