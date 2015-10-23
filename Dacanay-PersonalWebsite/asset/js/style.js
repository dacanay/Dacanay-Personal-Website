$(document).ready(function(){
 
    $('#read').click(function(){
        var read = $('#readValue').val();
        $('#response').html("<b>Loading response...</b>");
         
        $.ajax({
            type: "GET",
            data: {read:read},
            url: "getAll.php",
            dataType: "HTML",
            success: function (msg) {
                $('#resultRead').html(msg);
            }

        });
        return false;
 
    });
});