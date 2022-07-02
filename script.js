// get this moment
var timeToday = moment();
// get hours from moment
var hourToday = moment().hour()
// set the current day
$("#currentDay").text(timeToday.format("dddd, MMMM Do"))

// on click, the button will save the time slot and text input to local storage 
$(".btn").on("click", function() {
    var saveText = $(this).attr("hour-time")
    var storeUI = $(this).siblings("textarea").val()
    localStorage.setItem(saveText, storeUI)
})

// saves the time slot selected and retrieves the text entered previously from the local storage 
$("button").each(function(){
    var trackTime = $(this).attr("hour-time");
    var dataStorage = localStorage.getItem(trackTime);
    $(this).siblings("textarea").val(dataStorage)
    // compares the time slot selected to the current hour to determine color
    if (trackTime < hourToday) {
        $(this).siblings("textarea").addClass("past")
    } else if(trackTime == hourToday) {
        $(this).siblings("textarea").addClass("present")
    } else {
        $(this).siblings("textarea").addClass("future")
    }
})