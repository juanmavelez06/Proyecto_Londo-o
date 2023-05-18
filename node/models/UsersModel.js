import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UsersModel = db.define("users", {
  name: { type: DataTypes.STRING },
  surname: {type:DataTypes.STRING},
  telephone: { type: DataTypes.NUMBER },
  email: { type: DataTypes.STRING },
  fecha: { type: DataTypes.DATEONLY },
  hora: { type: DataTypes.TIME },
});

export default UsersModel;

