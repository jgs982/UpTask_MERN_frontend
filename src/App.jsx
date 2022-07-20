import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthProvider'
import { ProyectosProvider } from './context/ProyectosProvider'

import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import ConfirmarCuenta from './pages/ConfirmarCuenta'
import Login from './pages/Login'
import NuevoPassword from './pages/NuevoPassword'
import OlvidePassword from './pages/OlvidePassword'
import Registrar from './pages/Registrar'
import Proyectos from './pages/Proyectos'
import NuevoProyecto from './pages/NuevoProyecto'
import Proyecto from './pages/Proyecto'
import EditarProyecto from './pages/EditarProyecto'
import NuevoColaborador from './pages/NuevoColaborador'



const App = () => {
    
    return (
        <BrowserRouter>
            <AuthProvider>
                <ProyectosProvider>
                    <Routes>                                
                        {/* Área Pública */}
                        <Route path='/' element={<AuthLayout/>}>
                            <Route
                                index
                                element={<Login/>}
                            />

                            <Route
                                path='registrar'
                                element={<Registrar/>}
                            />

                            <Route
                                path='olvide-password'
                                element={<OlvidePassword/>}
                            />

                            <Route
                                path='olvide-password/:token'
                                element={<NuevoPassword/>}
                            />

                            <Route 
                                path='confirmar/:id'
                                element={<ConfirmarCuenta/>}
                            />
                        </Route>

                        {/* Área Privada */}
                        <Route path='/proyectos' element={<RutaProtegida/>}>
                            <Route index element={<Proyectos/>}/>
                            
                            <Route 
                                path='crear-proyecto'
                                element={<NuevoProyecto/>}
                            />

                            <Route
                                path=':id'
                                element={<Proyecto/>}
                            />

                            <Route
                                path='editar/:id'
                                element={<EditarProyecto/>}
                            />

                            <Route
                                path='nuevo-colaborador/:id'
                                element={<NuevoColaborador/>}
                            />
                        </Route>
                    </Routes>
                </ProyectosProvider>                
            </AuthProvider>            
        </BrowserRouter>
    )
}

export default App