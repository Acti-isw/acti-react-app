// import { useEffect } from 'react';
import './style.css'

function Horario( {Datahorario, setDatahorario, mode}) {

    // console.log(Datahorario)
    const horasFormato = [
        '09:00AM',
        '10:00AM',
        '11:00AM',
        '12:00PM',
        '01:00PM',
        '02:00PM',
        '03:00PM',
        '04:00PM',
        '05:00PM'
    ];

    let conteo = 0;
    function contador() {
        conteo++;
        return conteo - 1;
    }
    function horassum() {
      let conteo = 0;
      Datahorario.map((hora) => {
          hora.map((modulo) => {
              if (modulo[0]) {
                  conteo++;
              }
          });
      });
      return conteo;
  }
  let horasSemana = horassum();
  const onClick = (event)=>{
    if(mode==1){
        let horario = JSON.parse(JSON.stringify(Datahorario))
        let modulo = horario[getRow(event.target.id)].find(module => module[1]==event.target.id)
        modulo[0] = !modulo[0];
        setDatahorario(horario)
        // console.log(JSON.stringify(Data))
    }
    // event.target.className = event.target.className==="open"?"close":"open"
  }
  function getRow(id)
  {
    const option = id.substring(3,6)
    let linea;
    switch(option){
        case '09':
            linea= 0;
            break;
        case '10':
            linea = 1;
            break;
        case '11':
            linea=2;
            break;
        case '12':
            linea=3;
            break;
        case '01':
            linea=4;
            break;
        case '02':
            linea=5;
            break;
        case '03':
            linea=6;
            break;
        case '04':
            linea=7;
            break;
        case '05':
            linea=8;
            break;
        default:
            console.log('Error linea no encontrada')
            break;
    }
    return linea;
  }
    return (
        <>
        {/* <>{console.log("Render")}</> */}
            <table className="horario">
                <thead>
                    <tr key="horasRow">
                        <th key="Horas">Horas</th>
                        <th className='mov' key="lunes">Lun</th>
                        <th className='mov' key="martes">Mar</th>
                        <th className='mov' key="miercoles">Mie</th>
                        <th className='mov' key="jueves">Ju</th>
                        <th className='mov' key="viernes">Vi</th>
                        <th className='dsk' key="lunes dsk">Lunes</th>
                        <th className='dsk' key="martes dsk">Martes</th>
                        <th className='dsk' key="miercoles dsk">Miercoles</th>
                        <th className='dsk' key="jueves dsk">Jueves</th>
                        <th className='dsk' key="viernes dsk">Viernes</th>
                    </tr>
                </thead>
                <tbody>
                    {Datahorario.map((hora) => (
                        <tr key={`${horasFormato[conteo]}M`}>
                            <th key={horasFormato[conteo]}>{horasFormato[contador()]}</th>
                            {hora.map((modulo) => (
                                <td className={`${modulo[0] ? 'open' : 'close'} ${mode==1?'modificable':''}`} key={modulo[1]} id={modulo[1]} onClick={onClick}></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text">Horas semanales: {horasSemana}</p>
        </>
    );
}

export default Horario;
