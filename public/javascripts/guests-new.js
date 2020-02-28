$(document).ready(function() {

    // Meal selection description

    populateMealDescription("meat");

    $("#guest_meal").change(function() {
        let value = $(this).val();
        populateMealDescription(value);
    })

    function populateMealDescription(selection) {
        switch(selection) {
            case "meat": 
                $("#meal-description").text("Description of delicious meat. Yum.");
                break;

            case "veggie":
                $("#meal-description").text("Description of delicious veggies. Yum?");
                break;

            case "lobster":
                $("#meal-description").text("Description of delicious lobster. Yum!");
                break;
        }
    }


    // Radio button styles

    $('.radio-td').click(function() {
        $(this).find("input[type=radio]").prop('checked', true);
        $(this).find("input[type=radio]").change();
    })

    $(".radio").change(function() {
        let container = $(this).closest('table');
        $(container).find('td').removeClass('selected');
        $(this).closest('td').addClass('selected');
    })

    $("#guest_attending_true, #guest_attending_false").change(function() {
        if($("#guest_attending_false").prop('checked')) {
            $("#meal-container").hide();
        } else {
            $("#meal-container").show();
        }
    })


})