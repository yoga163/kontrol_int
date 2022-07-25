
$(document).ready(function () {
    
    $.get("https://api.thingspeak.com/channels/1558007/fields/1/last",function(data){
        if(data == 1){
           $("#status1").text("OFF");
        }else{
            $("#status1").text("ON");
        }
    });

    $.get("https://api.thingspeak.com/channels/1558007/fields/2/last",function(data){
        if(data == 1){
           $("#status2").text("OFF");
        }else{
            $("#status2").text("ON");
        }
    });
    $.get("https://api.thingspeak.com/channels/1558007/fields/3/last",function(data){
        if(data == 1){
           $("#status3").text("OFF");
        }else{
            $("#status3").text("ON");
        }
    });
    $.get("https://api.thingspeak.com/channels/1558007/fields/4/last",function(data){
        if(data == 1){
           $("#status4").text("OFF");
        }else{
            $("#status4").text("ON");
        }
    });

    $(".on1").click(function(){
        $.post("https://api.thingspeak.com/update?api_key=K6QDUSVJV99MIXBQ&field1=0",function(data){
            console.log(data)
        })
    })

       
})
    
