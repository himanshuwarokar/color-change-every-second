const randomcolor = function(){
        let hex = '123456789ABCDEF';
        let color ='#' ;
        for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
    };
     let intervalid ;
    const startChangeColor = function(){
        if(!intervalid){
        intervalid = setInterval(colorramdom,1000);
    }
          function colorramdom(){
            document.body.style.backgroundColor = randomcolor();
        }
    }

    const stopChangeColor = function(){
        clearInterval(intervalid);
        intervalid = null;
    }

    document.querySelector(".start").addEventListener("click",startChangeColor);
    document.querySelector(".stop").addEventListener("click",stopChangeColor);
