const jwt = require("jsonwebtoken");

const jwtMiddleware = (handler) => async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Obtém o token do header
  console.log("Verificando token:", token);

  if (!token) {
    console.log("Token ausente");
    return res.status(401).json({ message: "Token ausente ou inválido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica o token
    console.log("Token válido:", decoded);
    req.user = decoded; // Armazena os dados do usuário no request
    return handler(req, res); // Continua para o próximo handler
  } catch (error) {
    console.log("Token inválido");
    return res.status(401).json({ message: "Token inválido" });
  }
};

module.exports = { jwtMiddleware };
