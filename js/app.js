$(document).ready(function(){

    /*$("#submitpass").click(function(){

        submitPass();
    }); */
    $("form").submit(function(){
        console.log("MADE IT HERE");
        submitPass();
    });

});


function submitPass(){

    var request = new XMLHttpRequest();
    var password = $('#masterpassword').val();
    request.open("POST","https://pokeclubgo.herokuapp.com/passwordcheck" , true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("password="+password);
    // These lines of code initialize the httprequest object and send information in order to receive the proper JSON data 

    request.onreadystatechange = function() {
        console.log("Waiting for password confirmation...");
        console.log(request.readyState);
    if (request.readyState == 4){
        parsedData = JSON.parse(request.responseText);
        console.log("Response Text: " + parsedData);

        }
    }

}