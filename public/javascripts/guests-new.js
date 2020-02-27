$(document).ready(function() {

    populateMealDescription("meat");

    $(".radio").change(function() {
        let container = $(this).closest('table');
        $(container).find('td').removeClass('selected');
        $(this).closest('td').addClass('selected');
    })

    $('.radio-td').click(function() {
        $(this).find("input[type=radio]").prop('checked', true);
        $(this).find("input[type=radio]").change();
    })

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

})