const morgan=require('morgan')
const express=require('express')
const cors=require('cors')
const app=express();

const filmeRoutes=require('./src/routes/filmes.routes')
const usersRoutes=require('./src/routes/usuarios.routes')
const episodiosRoutes=require('./src/routes/episodios.routes')


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


app.use('/',filmeRoutes)
app.use('/usuario',usersRoutes)
app.use('/episodio',episodiosRoutes)

//Inicializar o servidor
app.listen(5000,(req,res)=>{
    console.log("Server Connect")
})