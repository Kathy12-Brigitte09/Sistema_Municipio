import React from 'react';
import '../../Reportes/Reportes.css'
import estadistica from '../../Reportes/components/estadistica.png'
import logo from '../../Reportes/components/logo_login.png'

import { DataGrid } from '@mui/x-data-grid';

const Indicador_cond_inseg = () => {

    return (

        <div className=''>
          <div className='encabezado'>
            <div className='logoprovincia'>
            <img src={logo} width={'100%'} height={'100%'}/>
            </div>
    
            <div className='tituloreporte'>
            <p>GOBIERNO AUTÓNOMO DESCENTRALIZADO MUNICIPAL DEL CANTÓN RIOBAMBA </p>
            <p>SUBPROCESO DE DESARROLLO INSTITUCIONAL  </p>
            <p>INDICADORES DE GESTIÓN </p>
        </div>
          </div>
          <div className='botton'>
      </div>
     
        <div className='divisor'>
          
        </div>
    
        <br></br>
        <div className='indicInseg'> <h3>Indicador de Condiciones Inseguras</h3></div>
        <br/>
        
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    
    <br></br>
    
  
          
    
          <br></br>
          
       
          
        <div className='piepagina'>
          <p>MUNICIPIO DE RIOBAMBA- ESPOCH</p>
    
        </div> 
          
     
      
      </div>   
    
    
      );
    
}
export default Indicador_cond_inseg 


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'mes', headerName: 'Mes', width: 100 },
    { field: 'numerador', headerName: 'Numerador', width: 120 },
    { field: 'denominador', headerName: 'Denomidador', width: 120},
    { field: 'resultados', headerName: 'Resultados', width: 100 },
    { field: 'analisis', headerName: 'Analisis de Causas', width: 150},
    { field: 'acciones', headerName: 'Acciones Propuestas', width: 150 }
    

  ];
  
  const rows = [
    { id: 1, mes: 'Enero', numerador: '16', denominador: '16', resultados: '100%', analisis: 'planificación', acciones:'planificación'},
    { id: 2, mes: 'Febrero', numerador: '90', denominador: '180', resultados: '83,33%', analisis: 'ninguno', acciones:'ninguno'},
    
  ];