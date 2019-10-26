var format = 'hA'
var time = moment()
var WorkStarts = 9;
var WorkEnds = 17;
var TimeSlots = $(".container");
var data = { hours: [], tasks: []}
data = JSON.parse(localStorage.getItem('data'));

$("#currentDay").text(time.format('dddd, MMMM Do'));

for (i = WorkStarts; i <= WorkEnds; i++) {
    var TimeBlock = moment(i, format)
    var NextTimeBlock = moment(i + 1, format)
    var index = i - WorkStarts;

    NewHour = $("<div>");
    NewHour.addClass("row time-block");
    NewHour.attr("data-value",index);

    Hour = $("<div>");
    Hour.addClass("col-2 hour py-4");
    Hour.text(TimeBlock.format(format));
    data.hours[index] = TimeBlock.format(format)
    
    TimeFrame = $("<textarea>");
    TimeFrame.addClass("col-8 description")
    TimeFrame.text(data.tasks[index])
    if (time.isBetween(TimeBlock, NextTimeBlock)) {
        TimeFrame.addClass("present");
    }
    else if (time.isAfter(TimeBlock)) {
        TimeFrame.addClass("past");
    }
    else {
        TimeFrame.addClass("future");
    }

    SaveButton = $("<button>");
    SaveButton.addClass("col-2 saveBtn fas fa-save")

    NewHour.append(Hour, TimeFrame, SaveButton);
    TimeSlots.append(NewHour);
}

$(".saveBtn").click(function(){
    var id =$(this).parent().attr("data-value")
    var task = $(this).siblings("textarea").val();
    data.tasks[id]=task;
    localStorage.setItem("data", JSON.stringify(data));
});