import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout'
import Home from '../containers/Home'
import Detalle from '../components/Detalle'

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/detalle/:id' element={<Detalle />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App
