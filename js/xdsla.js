$(function() {

    var last_accident = '01/29/2013'; //mm/dd/yyyy
    var person = 'Dino';
    
    var days = days_between_today(last_accident);
    $('#js-number-of-days-current-number').text(days);
    $('#js-number-of-days-current-units').text((days == 1) ? 'day' : 'days');
    $('#js-person-to-blame').text(person);
    $('.shout').bigtext();

});

function days_between_today (date) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    var today_ms = new Date().getTime();
    var d_ms = Date.parse(date);

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(today_ms - d_ms);

    // Convert back to days and return
    return Math.floor(difference_ms/ONE_DAY) - 1;
}