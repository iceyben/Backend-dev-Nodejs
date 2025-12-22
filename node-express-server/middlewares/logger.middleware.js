const fs = require("fs");
//Middleware to log endpoints requests
exports.loggerMiddleware = function(req,res,next){
      const log = `\n[Date:${Date.now()}] : Method:${req.method} : Path: ${req.path}`
      fs.appendFileSync("logs.txt", log, "utf-8");
      next();
}

