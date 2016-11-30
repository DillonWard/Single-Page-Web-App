// assigns new global variables for storage
var newScore = {
    name: null,
    score: null
} 

$("#savename").click(function(e){ // once the button with id savename is clicked call this function
            
    e.preventDefault(); // prevent the default
           
    newScore.name = $('#pname').val();    
    newScore.score = $('#score').val();
// takes the values from the game and stores them
    
        $.ajax({
            type: 'POST',
            url:'/saveScore',
            data: JSON.stringify(newScore),
            dataType: "json",
            contentType: "application/json",
            success: function(response){
                console.log(response);
            } // makes an ajax call to post them to the server
        });
});

var feedback = {
    fname: null,
    fmessage: null
}

$("#feed").click(function(e){
    e.preventDefault();
           
    feedback.fname = $('#fname').val();      
    feedback.fmessage = $('#fmessage').val();

        $.ajax({
            type: 'POST',
            url:'/feedback',
            data: JSON.stringify(feedback),
            dataType: "json",
            contentType: "application/json",
            success: function(response){
                console.log(response);
            }
        });
});