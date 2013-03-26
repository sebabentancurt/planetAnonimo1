// JavaScript Document
    
    var user = document.getElementByName('user');

        user.addEventListener("input", function() {
            var value = new Date(user.value);
            if (value < new Date()) {
                user.setCustomValidity("Arrival date must be after now!");
            } else {
                user.setCustomValidity("");
            }
 
        });