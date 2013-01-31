$(function() {

    $('.shout').bigtext();

    var last_accident = '01/29/2012'; //mm/dd/yyyy
    var days = days_between_today(last_accident);
    days = 1;
    $('#js-number-of-days-current-number').text(days);
    $('#js-number-of-days-current-units').text((days == 1) ? 'day' : 'days');

    function days_between_today(d) {

        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24;

        var today_ms = new Date().getTime();
        var d_ms = Date.parse(d);

        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(today_ms - d_ms);

        // Convert back to days and return
        return Math.round(difference_ms/ONE_DAY);

    }
});