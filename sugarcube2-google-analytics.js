Macro.add("ga", {
    skipArgs : true,
    handler  : function() {
            try {
                var gid = this.args[0];
                importScripts("https://www.googletagmanager.com/gtag/js?id=" + gid);
                try {
                    window.dataLayer = window.dataLayer || [];
                    window.gtag = function (){ dataLayer.push(arguments); };
                    gtag('js', new Date());
                    gtag('config', gid);
                } catch (ex) {
                    return this.error('Could not load gtag: ' + ex.message);
                }
            } catch (ex) {
                return this.error('bad expression: ' + ex.message);
            }
        }
    }
);

$(document).on('click', 'a', function (ev) {
    // Get the destination of the clicked link var passage 
    var passage = $(this).attr('data-passage');
    // Send the message to google analytics
    gtag('event', 'Navigation', {
        event_label    : passage,
        event_category : 'GuestClick'
    });
});