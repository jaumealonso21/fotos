
window.onload = function() {
    //alert("jfkjdkjf");
    var canvas = document.getElementById("foto");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "img/img.jpg";
    
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
    };
    
    if(img.onload) {
        //alert("fjkdjfkjd");
        gradient();
    }
    ////ctx.font = '12pt Calibri';
    //ctx.fillStyle = "white";
    
    function gradient() {
        // Create gradient
        //var grd=ctx.createLinearGradient(0,0,200,0);
        var grd = ctx.createLinearGradient(0, 0, 300, 332);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");

        // Fill with gradient
        ctx.fillStyle=grd;
        ctx.fillRect(0, 0,332,300);
    }
    
    
};

