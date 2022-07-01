var timeToday = moment();
var hourToday = moment().hour()
$("#currentDay").text(timeToday.format("dddd, MMMM Do"))

$(".btn").on("click", function() {
    var saveText = $(this).attr("hour-time")
    var storeUI = $(this).siblings("textarea").val()
    localStorage.setItem(saveText, storeUI)
})

$("input").each(function(){
    var trackTime = $(this).attr("hour-time");
    var dataStorage = localStorage.getItem(trackTime);
    $(this).siblings("textarea").val(dataStorage)
    if (trackTime < hourToday) {
        $(this).siblings("textarea").addClass("past")
    } else if(trackTime == hourToday) {
        $(this).siblings("textarea").addClass("present")
    } else {
        $(this).siblings("textarea").addClass("future")
    }
})