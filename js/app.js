$(document).ready(function(){

    $('#mysticpass').keypress(function(event){
        if (event.which == 13){

            console.log("ENTER WAS PRESSED")
            var request = new XMLHttpRequest();
            var password = $('#mysticpass').val();
            $('#mysticpass').val('');
            console.log("PASSWORD:"+password);
            request.open("POST","https://pokeclubgo.herokuapp.com/passwordcheck" , true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send("password="+password+"&team=mystic");
            // These lines of code initialize the httprequest object and send information in order to receive the proper JSON data 

            request.onreadystatechange = function() {
                console.log("Waiting for password confirmation...");
                console.log(request.readyState);
            if (request.readyState == 4){
                parsedDatapass = JSON.parse(request.responseText);
                console.log("Response Text: " + parsedDatapass);


                if (parsedDatapass.password_status == 'Incorrect'){
                    $('#mysincorrect').show();
                }
                else{
                    $('#mysincorrect').hide(1000);
                    console.log("CORRECT PASSWORD. REDIRECT..")
    
                    sessionStorage.setItem('team', "mystic");
                    sessionStorage.setItem("is_secure", "y");

                    window.location.replace("login.html");
                }
                }
            }
       }
       else{
            console.log("WAS NOT THE ENTER KEY")
       }
        });
        $('#valorpass').keypress(function(event){
                if (event.which == 13){

                    console.log("ENTER WAS PRESSED")
                    var request = new XMLHttpRequest();
                    var password = $('#valorpass').val();
                    //var parsedDatapass;
                    $('#valorpass').val('');
                    console.log("PASSWORD:"+password);
                    request.open("POST","https://pokeclubgo.herokuapp.com/passwordcheck" , true);
                    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    request.send("password="+password+"&team=valor");
                    // These lines of code initialize the httprequest object and send information in order to receive the proper JSON data 



                    request.onreadystatechange = function() {
                        console.log("Waiting for password confirmation...");
                        console.log(request.readyState);
                        if (request.readyState == 4){
                            parsedDatapass = JSON.parse(request.responseText);
                            console.log("Response Text: " + parsedDatapass);

                            if (parsedDatapass.password_status == 'Incorrect'){
                                $('#valincorrect').show();
                            }
                            else{
                                $('#valincorrect').hide(1000);
                                sessionStorage.setItem('team', "valor");
                                sessionStorage.setItem("is_secure", "y");
                                console.log("CORRECT PASSWORD. REDIRECT..")
                                window.location.replace("login.html");

                            }
                        }

                    }
               }
               else{
                    console.log("WAS NOT THE ENTER KEY")
               }

        });
        $('#instinctpass').keypress(function(event){
                if (event.which == 13){

                    console.log("ENTER WAS PRESSED")
                    var request = new XMLHttpRequest();
                    var password = $('#instinctpass').val();
                    $('#instinctpass').val('');
                    console.log("PASSWORD:"+password);
                    request.open("POST","https://pokeclubgo.herokuapp.com/passwordcheck" , true);
                    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    request.send("password="+password+"&team=instinct");

                    // These lines of code initialize the httprequest object and send information in order to receive the proper JSON data 

                    request.onreadystatechange = function() {
                        console.log("Waiting for password confirmation...");
                        console.log(request.readyState);
                    if (request.readyState == 4){
                        parsedDatapass = JSON.parse(request.responseText);
                        console.log("Response Text: " + parsedDatapass);

                        

                            if (parsedDatapass.password_status == 'Incorrect'){
                                $('#instincorrect').show();
                            }
                            else{
                                $('#instincorrect').hide(400);
                                sessionStorage.setItem('team', "instinct");
                                sessionStorage.setItem("is_secure", "y");
                                console.log("CORRECT PASSWORD. REDIRECT..")
                                window.location.replace("login.html");

                            }
                        }
                    }

               }
               else{
                    console.log("WAS NOT THE ENTER KEY")
               }


        });

});


/*
    $('#mysticsend').click(function(){

        console.log("BUTTON WAS PRESSED")
        var request = new XMLHttpRequest();
        var password = $('#mysticpass').val();
        $('#mysticpass').val('');
        console.log("PASSWORD:"+password);
        request.open("POST","https://pokeclubgo.herokuapp.com/passwordcheck" , true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send("password="+password);
        // These lines of code initialize the httprequest object and send information in order to receive the proper JSON data 

        request.onreadystatechange = function() {
            console.log("Waiting for password confirmation...");
            console.log(request.readyState);
        if (request.readyState == 4){
            parsedDatapass = JSON.parse(request.responseText);
            console.log("Response Text: " + parsedDatapass);

            }
        }

    });
    $('#valorsend').click(function(){

        console.log("BUTTON WAS PRESSED")
        var request = new XMLHttpRequest();
        var password = $('#valorpass').val();
        $('#valorpass').val('');
        console.log("PASSWORD:"+password);
        request.open("POST","https://pokeclubgo.herokuapp.com/passwordcheck" , true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send("password="+password);
        // These lines of code initialize the httprequest object and send information in order to receive the proper JSON data 

        request.onreadystatechange = function() {
            console.log("Waiting for password confirmation...");
            console.log(request.readyState);
        if (request.readyState == 4){
            parsedDatapass = JSON.parse(request.responseText);
            console.log("Response Text: " + parsedDatapass);

            }
        }

    });
    $('#instinctsend').click(function(){

        console.log("BUTTON WAS PRESSED")
        var request = new XMLHttpRequest();
        var password = $('#instinctpass').val();
        $('#instinctpass').val('');
        console.log("PASSWORD:"+password);
        request.open("POST","https://pokeclubgo.herokuapp.com/passwordcheck" , true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send("password="+password);
        // These lines of code initialize the httprequest object and send information in order to receive the proper JSON data 

        request.onreadystatechange = function() {
            console.log("Waiting for password confirmation...");
            console.log(request.readyState);
        if (request.readyState == 4){
            parsedDatapass = JSON.parse(request.responseText);
            console.log("Response Text: " + parsedDatapass);

            }
        }

    }); */


