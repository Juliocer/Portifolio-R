
import {
    HashRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"

import { Home } from "./pages/Home"
import { Sobre } from "./pages/Sobre"
import { Projetos } from "./pages/Projetos"
import { Contato } from "./pages/contato"

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
