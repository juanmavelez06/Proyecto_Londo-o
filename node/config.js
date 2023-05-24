import { config } from "dotenv";
config();

const PORT=process.env.PORT || 3001;
const DB_HOST=process.env.DB_HOST || "containers-us-west-24.railway.app";
const DB_PORT=process.env.DB_PORT || 7867;
const DB_USERNAME=process.env.DB_USERNAME || "root";
const DB_PASSWORD=process.env.DB_PASSWORD || "D45ciUH8P0CxSW4Pz2aV";
const DB_DATABASE= process.env.DB_DATABASE || "railway";  
export { PORT,  DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE  };

//HEAD separado de af8d748 nada que cometer, árbol de trabajo limpio