import PropTypes from "prop-types";
import Titulo from '../Titulo/Titulo';
import Formulario from '../Formulario/Formulario';

function Home({ saludo }) {
  const tituloApp = 'Marce Proyect';
  const subTituloApp = "Primera Pre-Entrega React JS";

  return (
    <div>
        <Titulo titulo={tituloApp} subTitulo={subTituloApp} />
        <Formulario />
        <p>{saludo}</p>
    </div>
  );
}

Home.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default Home;