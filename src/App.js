import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SideMenu from './pages/nav/SideMenu';
import React from 'react';
import { useState } from 'react';
import Eventos from './pages/nav/components/eventos.tsx';
import MisDatos from './pages/nav/components/MisDatos';
import Reportes from './pages/Reportes/Reportes';

import Gestion from  './pages/Reportes/components/Gestion_talento';
import Archivo from './pages/Reportes/components/gestion_finaciera';
import GestionC from '../src/pages/Reportes/components/gestion_cumunicacion';
import SeguridadO from '../src/pages/Reportes/components/seguridad_ocupacional';
import SaludO from '../src/pages/Reportes/components/salud_ocupacional';
import TrabajadoresA from '../src/pages/Reportes/components/Trabajadores_aptos';
import Restriccion from '../src/pages/Reportes/components/Restriccion';
import No_Apto from '../src/pages/Reportes/components/No_Apto';
import Consultas_Medicas from '../src/pages/Reportes/components/Consultas_Medicas';
import CondicionesIn from '../src/pages/Reportes/components/Indicador_cond_inseg';

import './App.css';
import Login from './pages/Login/Login';


function App() {

  const [inactive, setInactive] = useState(false);

  return (
     <div className="App">

      
      <Router>
        <SideMenu onCollapse={(inactive)=>{
          console.log(inactive);
          setInactive(inactive);
        }}/>
        <div className={`container ${inactive ? 'inactive': ''}`}>
        <Switch>
          <Route exact path={'/eventos'}>
            <Eventos />
          </Route>
          <Route path={'/misdatos'}>
            <MisDatos />
          </Route>
          <Route path={'/Reportes'}>
            <Reportes />
            </Route>
            <Route path={'/gestion_finaciera'}>
            <Gestion />
            </Route>
            <Route path={'/gestion_talento'}>
            <Archivo />
            </Route>
            <Route path={'/gestion_comunicacion'}>
            <GestionC />
            </Route>
            <Route path={'/seguridad_ocupacional'}>
            <SeguridadO />
            </Route>
            <Route path={'/Indicador_cond_inseg'}>
            <CondicionesIn />
            </Route>
            <Route path={'/salud_ocupacional'}>
            <SaludO />
            </Route>
            <Route path={'/Trabajadores_aptos'}>
            <TrabajadoresA />
            </Route>
            <Route path={'/Restriccion'}>
            <Restriccion />
            </Route>
            <Route path={'/No_Apto'}>
            <No_Apto />
            </Route>
            <Route path={'/Consultas_Medicas'}>
            <No_Apto />
            </Route>

            <Route path={'/Salud'}>
            <No_Apto />
            </Route>
           
        </Switch>
        </div>
      </Router>
     </div>
    
    
  );
}

export default App;