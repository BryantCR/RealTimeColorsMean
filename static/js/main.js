console.log("Connection!");

let socket = io( 'http://localhost:8080');

$('.green').on('click', function(){
    let color = green;
    //socket.emit("color");
    socket.emit("color", color);
});

$('.blue').on('click', function(){
    let color = blue;
    //socket.emit("blue");
    socket.emit("color", color);
});

$('.pink').on('click', function(){
    let color = pink;
    //socket.emit("pink");
    socket.emit("color", color);
});

socket.on("listenAll", function(color){
    $("body").css("background-color", color);
});

socket.on("be_blue", function(){
    $("body").css("background-color", "blue");
});

socket.on("be_pink", function(){
    $("body").css("background-color", "pink");
});