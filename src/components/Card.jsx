import PropTypes from 'prop-types';

const Card = ({name, birthday}) => {
  const date = new Date(birthday);
  const hoy = new Date();
  let edad = hoy.getFullYear() - date.getFullYear();
  const diferenciaMeses = hoy.getMonth() - date.getMonth();

  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < date.getDate())
  ) {
    edad--
  }

  const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dia = dias[date.getDay()]
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const mes = meses[date.getMonth()]

    return (                        
    <div className='card'>        
      <div className='card-box'>
        <h1 className='card-title'>Informacion</h1>
        <p className='card-body'><b>Nombre :</b> {name}</p>
        <p className='card-body'><b>Fecha de Nacimiento : </b>{date.toLocaleDateString()}</p>
        <p className='card-body'><b>Día :</b> {dia + ', ' + ' ' + date.getDate() + ' de ' + mes}</p>
        <p className='card-body'><b>Edad : </b>{edad} <b>años</b></p>
      </div>                          
    </div>
    );
  };

Card.propTypes = {
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string
}  

export default Card;

