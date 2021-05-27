const express=require('express')
const geocode=require('./utils/geocode')
const forecast=require('./utils/app')
const app=express()
console.log(__dirname)
path=require('path')
hbs=require('hbs')
const publicDirectoryPath=path.join(__dirname,'../public')
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname,'../templates/partials'))
app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))
app.get('',(req,res)=>{
res.render('index',{
    title:'weather app',
    name:'ishan rawat'
})
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'pls provide query string'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location }={}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help app',
        name:'ishan rawat'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'This is an about page',
        name:'ishan'
    })
})
app.get('/help/new',(req,res)=>{
    res.send('this is a new page')
})
app.get('/help/*',(req,res)=>{
    res.render('404pages',{
        text:'sorry the help page is not found'
    })
})
// app.get('*',(req,res)=>{
//     res.send('my 404 page')
// })
//app.com
//app.com/help
//app.com/about


app.listen(3000,()=>{
    console.log('server is up for port 3000') })
// app.get('/help',(req,res)=>{
//     res.send('help page')
// })
// app.get('/about',(req,res)=>{
// res.send('<h1>hi this is an about page </h1>')
// })
// app.get('/weather',(req,res)=>{
//     res.send({
//         place:'california',
//         temperature:34
//     })
// })