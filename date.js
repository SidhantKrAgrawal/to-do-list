//jshint esversion:6

exports.getDate  = function(){
   
    const today = new Date();

    const options ={
        weeday: "long",
        day:"numeric",
        month:"long"
    };

    let day = today.toLocaleDateString("en-US",options);

    return day;
}


exports.getDay  = function(){
   
    const today = new Date();

    const options ={
        weeday: "long",
      
    };

    let day = today.toLocaleDateString("en-US",options);

    return day;
}