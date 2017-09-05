var test = $.ajax({
    url : 'http://192.168.1.2:8000/public/secret.json',
    type : 'GET',
    dataType : 'json',

});

test.done(function(result) {
    console.log(result.secret)
    $(".result").html(result.secret)
});
test.fail(function(){
    console.log("erreur")
    $(".result").html("Erreur")
});
