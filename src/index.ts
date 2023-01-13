import express, { Request, Response } from "express";
import cors from "cors";

const PORT = process.env.PORT || 443;
const optioins: cors.CorsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
}

const app = express();

app.use(express.json());
app.use(cors(optioins));


app.get("/api/whoami", (request: Request, response: Response) => {
  const clientAgent = request.headers["user-agent"];
  const clientLanguage = request.headers["accept-language"];
  const clientIP = request.socket.remoteAddress;

  return response.json({
    ipaddress: clientIP,
    language: clientLanguage,
    software: clientAgent
  })
})

app.listen(PORT, () => {
  console.log(`Server listen at: [${PORT}]`);
})