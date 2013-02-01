var XDSLA = {

    ONE_DAY_MS: 86400000,
    last_accident: '01/29/2013',
    blame_person: 'Dino',
    update_interval_ms: 1000,

    init: function() {
        startInterval();
    },

    start_interval: function() {
        update_dashboard();
        var interval_id = setInterval(update_dashboard, update_interval_ms);
    },

    today_day_difference: function (date, ignoreToday) {
        var today_ms = new Date().getTime();
        var date_ms = Date.parse(date);
        var difference_ms = Math.abs(today_ms - d_ms);
        return Math.floor(difference_ms / ONE_DAY_MS) - (ignoreToday ? 1 : 0);
    },

    update_dashboard: function() {
        var days = today_day_difference(last_accident, true);
        $('#js-number-of-days-current-number').text(days);
        $('#js-number-of-days-current-units').text((days == 1) ? 'day' : 'days');
        $('#js-person-to-blame').text(blame_person);
        $('.shout').bigtext();
        alert('yes');
    }

};

// entry point
$(function () {
    XDSLA.init();
});