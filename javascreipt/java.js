/// <reference types="jquery" />




$(".openNav").on("click",function () {
    $("#leftMenu").animate({ width: '250px' }, 50)
    $("#home-content").animate({ marginLeft: '250px' }, 50)
})

$(".closex").on("click",function () {
    $("#leftMenu").animate({ width: '0px' }, 50)
    $("#home-content").animate({ marginLeft: '0px' }, 50)
})


$("#leftMenu a").on("click",function () {

    var sectionId = $(this).attr("href");

    var positionOfSection = $(sectionId).offset().top;

    $("html , body").animate({ scrollTop: positionOfSection }, 1000);

})



$('#sliderDown .toggle').on("click",function () {
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});




let time = setInterval(() => {
    let now = new Date().getTime()
    let distance = new Date('2025-07-21 12:00:00').getTime() - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // console.log(days);
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    // console.log(hours);
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / (1000))
    display(days,hours,minutes,seconds)
}, 1000)

function display(days,hours,minutes,seconds) {
    let cartona = `
     <div class="col-md-3">
                        <div class="tim">
                            <span class=" days">${days}</span>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="tim">
                            <span class=" days">${hours}</span>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="tim">
                            <span class=" days">${minutes}</span>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="tim">
                            <span class=" days">${seconds}</span>
                        </div>
                    </div>
    
    
    `
    document.getElementById('row').innerHTML = cartona;
}




var maxLength = 100;
$('textarea').on("keyup", function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("your available character finished");

    }
    else {

        $("#chars").text(AmountLeft);
    }
});
