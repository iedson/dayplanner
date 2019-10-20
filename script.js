$(document).ready(function(){
    var date = moment().format('MMM Do YY');
    var dateDiv = document.querySelector('.date')

    dateDiv.innerHTML = date.toString();

    var clock = moment().format('h:mm:ss a');
    var clockDiv = document.querySelector('.clock');

    clockDiv.innerHTML = clock.toString();
 
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






    /* set today's date in the header */
    
    /* color code past, current, and future bars - pick color for future, style past & current */
    
});




/* variables */

/* helper functions */

/* events */
    /* clicking save button */
        /* takes text and save it to local storage */



