
$(document).ready(function () {

    setInterval(() => {
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
      }, 2000)
    
    
    //tombol field1
    $(".on1").click(function(){
        $.get("https://api.thingspeak.com/update?api_key=K6QDUSVJV99MIXBQ&field1=0",function(data){
            console.log(data)
        })
    });

    $(".off1").click(function(){
        $.get("https://api.thingspeak.com/update?api_key=K6QDUSVJV99MIXBQ&field1=1",function(data){
            console.log(data)
        })
    });


    //tombol field2
    $(".on2").click(function(){
        $.get("https://api.thingspeak.com/update?api_key=K6QDUSVJV99MIXBQ&field2=0",function(data){
            console.log(data)
        })
    });

    $(".off2").click(function(){
        $.get("https://api.thingspeak.com/update?api_key=K6QDUSVJV99MIXBQ&field2=1",function(data){
            console.log(data)
        })
    });

    
    //tombol field3
    $(".on3").click(function(){
        $.get("https://api.thingspeak.com/update?api_key=K6QDUSVJV99MIXBQ&field3=0",function(data){
            console.log(data)
        })
    });

    $(".off3").click(function(){
        $.get("https://api.thingspeak.com/update?api_key=K6QDUSVJV99MIXBQ&field3=1",function(data){
            console.log(data)
        })
    });


    //tombol field4
    $(".on4").click(function(){
        $.get("https://api.thingspeak.com/update?api_key=K6QDUSVJV99MIXBQ&field4=0",function(data){
            console.log(data)
        })
    });

    $(".off4").click(function(){
        $.get("https://api.thingspeak.com/update?api_key=K6QDUSVJV99MIXBQ&field4=1",function(data){
            console.log(data)
        })
    });


       
})

    
