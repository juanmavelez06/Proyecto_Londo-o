import MyNavbar from "../AppHeader/AppHeader";
import image from "../AppInfo/img/FamiliaLondoño.jpg"

import "./index.css";

const Info = () => {
  return (
    <section ClassName="container_info">
      <MyNavbar></MyNavbar>
      <div className="box_info">
        <div className="box_info2">
          <h1>Mi Historia!</h1>
          <h2>Pequeños pasos</h2>

          <p className="info_A">
            He dedicado mi vida profesional a convertirme en un(a) artesano(a)
            profesional. Mi amor por la artesanía nace de un deseo continuo de
            convertir conceptos en realidad. Es por eso que abrí mi estudio en
            el año 2000, para mostrarle a la gente de Ciudad de México la
            verdadera belleza detrás de mis piezas artesanales. <br />
            <p className="info_B">
              A lo largo de mi carrera, he creado una variedad de proyectos para
              clientes particulares, comerciales e industriales. Nada me da más
              satisfacción que ver a mis clientes descubrir una pieza terminada
              por primera vez. Contáctame para saber más.
            </p>
          </p>
        </div>
        <div className="box_info3">
        <img
          className="box_img"
          src={image}
          alt=""
        />
        </div>

        <div className="box_info4">
            <h2>@Familia Londoño</h2>
        </div>
      </div>
    </section>
  );
};

export default Info;
