var $pic1 = $('.pic1');
var $win = $(window);
var clicked = false;
var top = $win.scrollTop();

$(window).on('mousemove', function(){
    if ( clicked == false && top > '100px') {
        $pic1.toggleClass('shake');
        clicked = true;
    }
});

$win.on('scroll', revealOnScroll);

function revealOnScroll(){
    var scrolled = $win.scrollTop();
    $(".box:not(.flash):nth-child(3n)").each(function(){
        var $this = $(this),
            offsetTop = $this.offset().top;

        if(scrolled + $this.height() > offsetTop){

            $this.toggleClass('flash');
        }
    });
    $(".box:not(.shake):nth-child(1n)").each(function(){
        var $this = $(this),
            offsetTop = $this.offset().top;

        if(scrolled + $this.height() > offsetTop){

            $this.toggleClass('shake');
        }
    });
}
/*$(window).on('mousemove', function(){
    if ( clicked[1] == false && top > '100px') {
        $pic1.toggleClass('shake');
        clicked[1] = true;
    }
});
$(window).on('scroll', function(){
    console.log($pic2.offset().top);
    if ( clicked[2] == false && top > '870px') {
        $pic2.toggleClass('shake');
        clicked[2] = true;
    }
});
$(window).on('scroll', function(){
    if ( clicked[3] == false && top > '1820px') {
        $pic3.toggleClass('shake');
        clicked[3] = true;
    }
});
$(window).on('scroll', function(){
    if ( clicked[4] == false && top > '2300px') {
        $pic4.toggleClass('shake');
        clicked[4] = true;
    }
});
$(window).on('scroll', function(){
    if ( clicked[5] == false && top > '2870px') {
        $pic5.toggleClass('shake');
        clicked[5] = true;
    }
});
$(window).on('scroll', function(){
    if ( clicked[6] == false && top > '3770px') {
        $pic6.toggleClass('shake');
        clicked[6] = true;
    }
});$(window).on('scroll', function(){
    if ( clicked[7] == false && top > '3370px') {
        $pic7.toggleClass('shake');
        clicked[7] = true;
    }
});
*/
