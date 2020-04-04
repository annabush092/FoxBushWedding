$(document).ready(function() {

    // Meal selection description

    populateMealDescription("chicken");

    $("#guest_meal").change(function() {
        let value = $(this).val();
        populateMealDescription(value);
    })

    function populateMealDescription(selection) {
        switch(selection) {
            case "chicken": 
                $("#meal-description").text("Chicken Marsala: Tender chicken breast, pan seared with Marsala cream sauce.");
                break;

            case "salmon":
                $("#meal-description").text("Caramelized Salmon Filet: Fresh salmon filet rubbed with seasoned ginger, sugar, and spices, then pan seared until caramelized. Drizzled with a maple butter.");
                break;

            case "lobster":
                $("#meal-description").text("Lucerne Inn Delight (Filet and Lobster): A juicy filet of beef topped with a fresh grilled lobster tail, finished with compound tarragon butter.");
                break;

            case "veggie":
                $("#meal-description").text("Eggplant Parmesan: Served with the Lucerne's own maranara and topped with Provolone and Parmesan cheeses. Served with fettuccini.");
                break;

            default:
                $("#meal-description").text("Please select a menu option.");
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