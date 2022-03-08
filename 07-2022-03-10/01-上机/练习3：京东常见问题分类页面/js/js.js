// JavaScript source code
$(function () {
    $(".on").hover(
        function () {
            $(this).find(".topDown").show("slow");
        }, function () {
            $(this).find(".topDown").hide("fast");
        });
    $("dl").click(
        function () {
            if ($("dd").is(":hidden")) {
                $(this).children("dd").slideUp("slow");          
            } else {
                $(this).children("dd").slideDown("slow");        
            }
        }
    );
});