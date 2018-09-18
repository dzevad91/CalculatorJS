$(function () {
   
    var field = $("#field");


    
    $(".button").click(function (event) {

        
        var button = event.target;

        
        var buttonContent = button.textContent;

        
        var currentValueInField = field.val();

       
        field.val(currentValueInField + buttonContent);
        
        $(".button").on("click", function () {
            if ($(field).val() == 0) {
                $(field).val("0.");
            }
        });
        
        $(".equals").click(function () {
            field.val(eval(field.val()));
         });
      
        $(".special").click(function(){
            field.val("");
        });

    });
});