var XDSLA = {

    ONE_DAY_MS: 86400000,
    last_accident: '01/29/2013',
    blame_person: 'Dino',
    update_interval_ms: 1000 * 60 * 60,

    init: function() {
        XDSLA.start_interval();
    },

    start_interval: function() {
        XDSLA.update_dashboard();
        var interval_id = setInterval(XDSLA.update_dashboard, XDSLA.update_interval_ms);
    },

    today_day_difference: function (date, ignoreToday) {
        var today_ms = new Date().getTime();
        var date_ms = Date.parse(date);
        var difference_ms = Math.abs(today_ms - date_ms);
        return Math.floor(difference_ms / XDSLA.ONE_DAY_MS) - (ignoreToday ? 1 : 0);
    },

    update_dashboard: function() {
        var days = XDSLA.today_day_difference(XDSLA.last_accident, true);
        $('#js-number-of-days-current-number').text(days);
        $('#js-number-of-days-current-units').text((days == 1) ? 'day' : 'days');
        $('#js-person-to-blame').text(XDSLA.blame_person);
        $('.shout').bigtext();
    }

};

// entry point
$(function () {
    XDSLA.init();
});