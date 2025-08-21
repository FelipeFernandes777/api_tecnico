import Server from "./app";

const PORT = Number(process.env.PORT) || 3000;
const server = new Server();

server.startServer(PORT, `server running in http://localhost:${PORT}`)