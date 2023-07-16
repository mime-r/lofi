

function ToastBuilder(options) {
var opts = options || {};

opts.defaultText = opts.defaultText || 'default text';
opts.displayTime = opts.displayTime || 3000;
opts.target = opts.target || 'body';

return function (text) {
    $('<div/>')
    .addClass('toast')
    .prependTo($(opts.target))
    .html(text || opts.defaultText)
    .queue(function(next) {
        $(this).css({
        'opacity': 1
        });
        var topOffset = 15;
        $('.toast').each(function() {
        var $this = $(this);
        var height = $this.outerHeight();
        var offset = 15;
        $this.css('top', topOffset + 'px');

        topOffset += height + offset;
        });
        next();
    })
    .delay(opts.displayTime)
    .queue(function(next) {
        var $this = $(this);
        var width = $this.outerWidth() + 20;
        $this.css({
        'right': '-' + width + 'px',
        'opacity': 0
        });
        next();
    })
    .delay(600)
    .queue(function(next) {
        $(this).remove();
        next();
    });
};
}
  


// customize it with your own options
var myOptions = {
defaultText: 'If you\'re seeing this, something went wrong.',
displayTime: 10000,
target: 'body'
};

const defaultmessage_list = [
    "Welcome to [Lofi Cafe]! ☕ We hope you enjoy your stay! ^^",
    'Stay tuned for more updates and join the community: <a href="https://discord.gg/wKmVXZCzQ8" target="_blank">https://discord.gg/wKmVXZCzQ8</a> 🎶',
];

var showtoast = new ToastBuilder(myOptions);

$(document).ready(function play_default() {
for (var i = 0; i < defaultmessage_list.length; i++) {
    setTimeout(function (message) {
    showtoast(message);
    }, i * 1500, defaultmessage_list[i]);
}
});
