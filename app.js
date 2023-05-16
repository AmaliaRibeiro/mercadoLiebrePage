const express = require('express');
const path = require('path'); //con este modulo se unifican las rutas para identificarlas mejor
const app = express();


//MIDDLEWARE
app.use(express.static('public')); //se tiene la carpeta public como recurso estático para poder consumirlo
app.listen(process.env.PORT || 3001, () => {console.log("servidor corriendo en el puerto 3001")});

/*app.use(express.urlencoded({extended:false}));*/
 //RUTAS
/*app.listen(3000, ()=>{
    console.log('Servidor activo en el puerto 3000');
})*/

app.get ('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get ('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get ('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

