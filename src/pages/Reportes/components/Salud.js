import React from 'react';
import './Trabajadores_aptos.css'
import estadistica from '../../Reportes/components/estadistica.png'
import logo from '../../Reportes/components/logo_login.png'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { textAlign } from '@mui/system';



const Salud = () => {

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
          <h3>Indicador deterioro de la Salud</h3>
          
        <br></br>
        <div style={{ display: 'flex', height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
                  
        <div className='piepagina'>
          <p>MUNICIPIO DE RIOBAMBA- ESPOCH</p>
    
        </div> 
      
      </div>   
    
    
      );
    
}
export default Salud

const rows= [
  { id: 1, col1: 'Enero', col2: '1', col3: '1', col4: '100,00%' ,col5: 'Incremento de casos covid 19' ,col6: 'Medidas de bioseguridad, prevención y conducta ante covid 19'},
  { id: 2, col1: 'Febrero', col2: '1', col3: '1', col4: '100,00%', col5: 'Ingreso de personal nuevo al GADMR' ,col6: 'Capacitación en prevencion de enfermedades y accidentes laborales, higiene postural, bioseguridad'},
  { id: 4, col1: 'Marzo', col2: '5', col3: '5', col4: '100,00%', col5: 'Plan de vigilancia de la Salud 2022' ,col6: 'Campaña de salud preventiva. Plan anual de capacitación 2023'},
  { id: 5, col1: 'Abril', col2: '1', col3: '1', col4: '100,00%',col5: 'Plan de vigilancia de la Salud 2022' ,col6: 'Campaña de salud preventiva. Plan anual de capacitación 2023'},
  { id: 6, col1: 'Mayo', col2: '3', col3: '3', col4: '100,00%',col5: 'Capacitación en prevención de enfermedades y accidentes laborales, higiene postural, primeros auxilios y Riesgo PSICOLOGICO' ,col6: 'Capacitación Pevención alcoholismo'},
  { id: 7, col1: 'Junio', col2: '3', col3: '3', col4: '100,00%',col5: 'Incremento de casos covid 19' ,col6: 'Capacitación Pevención alcoholismo'},
];

const columns= [
  { field: 'id', headerName: 'ID', width: 30},
  { field: 'col1', headerName: 'Mes', width: 100 },
  { field: 'col2', headerName: 'Numerador', width: 90 },
  { field: 'col3', headerName: 'Denominador', width: 95 },
  { field: 'col4', headerName: 'Resultados', width: 90 },
  { field: 'col5', headerName: 'Análisis de causas', width: 250},
  { field: 'col6', headerName: 'Acciones Propuestas', width: 250 }
];