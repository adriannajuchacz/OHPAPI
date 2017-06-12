setInterval(function () {
    $("#fs").removeClass("fs_first"),
    $("#fs").addClass("fs_second");
    setTimeout(function () {
        $("#fs").removeClass("fs_second"),
        $("#fs").addClass("fs_third");
        setTimeout(function () {
            $("#fs").removeClass("fs_third"),
            $("#fs").addClass("fs_first");
        }, 2000);
    }, 2000);
}, 4000);
setInterval(function () {
    $("#ig").removeClass("ig_first"),
    $("#ig").addClass("ig_second");
    setTimeout(function () {
        $("#ig").removeClass("ig_second"),
        $("#ig").addClass("ig_third");
        setTimeout(function () {
            $("#ig").removeClass("ig_third"),
            $("#ig").addClass("ig_first");
        }, 1500);
    }, 1500);
}, 5000);
