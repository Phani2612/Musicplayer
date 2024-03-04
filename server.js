const Express = require('express')

const App = Express()


App.use("/scripts" , Express.static("scripts"))


const Filesystem = require('fs')

App.get('' , function(req,res)
{
    res.sendFile(__dirname+'/scripts/index.html')

    
})


App.listen(3000 , function()
{
    console.log("Port running at 3000")
})


