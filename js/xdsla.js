var XDSLA = {

    ONE_DAY_MS: 86400000,
    update_interval_ms: 3600000, // 1 hour
    last_accident: '02/06/2013',
    blame_person: 'chawley',

    init: function() {
        XDSLA.update_dashboard();
        XDSLA.start_interval();
    },

    start_interval: function() {
        var interval_id = setInterval(XDSLA.update_dashboard, XDSLA.update_interval_ms);
    },

    update_dashboard: function() {
        var days = XDSLA.today_day_difference(XDSLA.last_accident);
        $('#js-number-of-days-current-number').text(days);
        $('#js-number-of-days-current-units').text((days == 1) ? 'day' : 'days');
        $('#js-person-to-blame').text(XDSLA.blame_person);
        $('.shout').bigtext();
    },

    today_day_difference: function (accident_date_string) {
        
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var today_ms = today.getTime();

        var accident_date = new Date(accident_date_string);
        accident_date.setHours(0, 0, 0, 0);
        var accident_date_ms = accident_date.getTime();
        
        var difference_ms = Math.abs(today_ms - accident_date_ms);
        var return_value = Math.floor(difference_ms / XDSLA.ONE_DAY_MS) - 1; // we don't count the day of the accident

        // special case if the day of the accident is today
        if (return_value == -1) {
            return_value = 0;
        }

        return return_value;
    }

};

// entry point
$(function () {
    XDSLA.init();
});
