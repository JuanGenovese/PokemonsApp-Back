require("dotenv").config();
const { getTypes } = require('./src/constrollers/typeControllers');
const server = require('./src/app.js');
const { sequelize } = require('./src/db.js');
const {PORT} = process.env;

sequelize.sync({ 
  force: true,
  alter: false
})
.then(() => {
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`servidor correctamente activo en ${PORT} y sincronizado con la DB`);
  });
  getTypes()
});
