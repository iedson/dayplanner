var textArea = document.querySelector('.description');

$(document).ready(function(){

    var update = function() {
        document.getElementById("clockDate")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(update, 1000);

    //function to loop through hour div
    //match div with current hour
    //if matches with current hour color text-area green
    //if less than current hour color red
    //else if greater than current hour color blue


    //save button 
    $('.saveBtn').on('click', function(){
        // get key value - key - value - keyvalue //
        var time =$(this).parent().attr('id'); 
        var value = $(this).siblings('.description').val();

        //save to local storage//
        localStorage.setItem(time, value);
    });
    // clear button
    $('#clearBtn').on('click', function(){
    localStorage.clear();
    renderStorage();
    });


// init 
function renderStorage() {
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
}
// pull from local storage //
renderStorage();
    
/* color code past, current, and future bars - pick color for future, style past & current */
    
});



