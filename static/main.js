var newScore = {
    name: null,
    score: null
}

console.log($('#score').val());

$("#savename").click(function(e){
            e.preventDefault();
    
            newScore.name = $('#pname').val();
            newScore.score = $('#score').val();
    
            $.ajax({
                type: 'PUT',
                url:'/postScores',
                data: JSON.stringify(newScore),
                dataType: "json",
                contentType: "application/json",
                success: function(response){
                    console.log(response);
                }
            });
})