const rateLimit = require("express-rate-limit");

export const apiLimit = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 5, // max requests number in the time defined by "windowMs"
    message: "ah excedido el maximo de peticiones, intente despues"
});
