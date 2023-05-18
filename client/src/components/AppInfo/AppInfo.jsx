import MyNavbar from "../AppHeader/AppHeader";
import image from "../AppInfo/img/FamiliaLondoño.jpg"
import map from "../AppInfo/img/Map.png"
import { FaEarlybirds, FaUser, FaTractor, FaWordpress, FaAddressCard } from "react-icons/fa";

import "./index.css";

const Info = () => {

  return (
    <section ClassName="container_info" id="Servicios">
      <MyNavbar></MyNavbar>
      <div className="box_info">
        <div className="box_info2">
        
          <h1>Servicios disponibles</h1>
          
          <p className="evento_A">
          <FaUser className="icon_A" />
            Eventos dentro de la finca
            
          </p>
            <p className="evento_C">
            < FaTractor className="icon_C"/>
              Atencion a grupos empresariales 
              
            </p>
            <p className="evento_D">
            <FaAddressCard className="icon_D"/>
              Atencion a grupos de colegios y universidades 
              
            </p>
            <p className="evento_E">
            <FaWordpress className="icon_E"/>
              Atencion al publico <br />
              "Charlas silleteras"
          
            </p>
            <p className="evento_F">
            <FaEarlybirds className="icon_F"/>
             Realizacion de silletas
           
            </p>
            <aside className="map">
              <a href="https://goo.gl/maps/YU4Wy7KGtys5WpLm6" target="_blank" rel="noopener noreferrer" >
                  <img
          className="box_map"
          src={map}
          alt=""
        />
              </a>
          
            </aside>
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
