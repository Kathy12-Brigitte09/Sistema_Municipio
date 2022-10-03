import React from 'react';
import '../../Reportes/Reportes.css'
import estadistica from '../../Reportes/components/estadistica.png'
import logo from '../../Reportes/components/logo_login.png';




import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const salud_ocupacional = () => {

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
        <div className='menudesplegable'>
          <div className='desplegable'>
            <div className='Seguridad'>
                <br></br>
                <h3>Indicadores de Seguridad Ocupacional</h3>
                <br></br>
                <br></br>
                <div className='botn'>
               
            <ButtonGroup variant="contained" aria-label="outlined primary button group" className='botones' >
                    <Button  className='boton1' href='Trabajadores_aptos'>
                        <EngineeringIcon sx={{ fontSize:50 }}/>
                        Indicador de trabajadores Aptos</Button>
                    <Button className='boton2' href='Trabajadores_aptos'>
                        <AirlineSeatFlatIcon sx={{ fontSize:50 }}/>
                        Indicador de Personal con Restricción</Button>
                    <Button  className='boton1' href='Trabajadores_aptos' >
                    <WarningOutlinedIcon sx={{ fontSize:50 }} />
                        Indicador de Trabajadores no Aptos</Button>
            </ButtonGroup>
      
            </div>
            <div className='botn2'>
               
            <ButtonGroup variant="contained" aria-label="outlined primary button group" className='botones2' >
                    <Button  className='boton4' href='Trabajadores_aptos'>
                        <LocalHospitalIcon sx={{ fontSize:50 }} />
                        Indicador de Consultas Médicas </Button>
                    <Button className='boton5' href='Trabajadores_aptos'>
                        <GroupIcon sx={{ fontSize:50 }}/>
                        Indicador deterioro de la Salud</Button>
                    
            </ButtonGroup>
      
            </div>
            </div>
    <br></br>
    
   
    </div>       
        
          
    
          <br></br>
          
        </div>
    
          
        <div className='piepagina'>
          <p>MUNICIPIO DE RIOBAMBA- ESPOCH</p>
    
        </div> 
          
     
      
      </div>   
    
    
      );
    
}
export default salud_ocupacional


