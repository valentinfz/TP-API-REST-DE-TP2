import express from 'express';
import usuariosRoutes from './routes/users.route.js';

const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use("/", usuariosRoutes);

//app.use("/", (req, res) => {
//    res.send("Ok")
//});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
app.on("Error", (err) => {console.log("Hay un error en el servidor")});
