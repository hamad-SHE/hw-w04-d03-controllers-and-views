var express = require("express");
var app = express();
port = 3100 ;



app.get("/", function(request,response){
    response.send("welcome");

})





app.listen(port, function(){
    console.log(`app is listening in port ${port}`);
})