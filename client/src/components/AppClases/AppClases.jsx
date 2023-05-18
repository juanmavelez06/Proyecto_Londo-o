import "./index.css";
import MyNavbar from "../AppHeader/AppHeader";
import { FaCalendar} from "react-icons/fa";

const Clase = () => {
  return (
    <section ClassName="container_info">
      <MyNavbar></MyNavbar>
      <div className="box_contec">
        <h1>Mis talleres</h1>
        <p>Visita el estudio</p>
        <div className="box_info1">
        <FaCalendar className="icon"/>
          <h2>CLASE DE NIVEL <br /> INTERMEDIO</h2>
          <p>Este(a) Clase de nivel intermedio popular es tu oportunidad de practicar tus habilidades en mi estudio pequeño pero exitoso. En unas cuantas sesiones, estarás listo para crear tus ideas y llevar tus maravillosas creaciones a casa.</p>
        </div>
        <div className="box_info2">
        <FaCalendar className="icon2"/>
          <h2>CLASE PARA JÓVENES</h2>
          <p>Mi Clase para jóvenes es una excelente opción para aquellos que buscan adquirir una nueva habilidad y dominarla. Te invito a aprender, experimentar y descubrir el mundo que se encuentra dentro de mi oficio. Si deseas registrarte, contáctame hoy mismo.</p>
        </div>
        <div className="box_info3">
        <FaCalendar className="icon3"/>
          <h2>CLASES DE NIVEL <br /> PRINCIPIANTE</h2>
          <p>Es difícil describir la sensación de crear una pieza de principio a fin, así que te invito a experimentarlo por tu cuenta. Me encantaría que me acompañes en mi Clases de nivel principiante. Contáctame si tienes preguntas.</p>
        </div>
      </div>

      <div className="box_info4">
        <h2>@Familia Londoño</h2>
      </div>
    </section>
  );
};

export default Clase;
