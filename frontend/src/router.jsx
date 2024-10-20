import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './pages/app'
import Erro from './pages/erro'
import Client from "./pages/client";

export default function Navegação(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/client" element={<Client/>} />
 
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}