var format = 'hA'
var time = moment()
var WorkStarts = 9;
var WorkEnds = 17;
var TimeSlots = $(".container");

for (i = WorkStarts; i < WorkEnds; i++) {
    var TimeBlock = moment(i, format)
    var NextTimeBlock = moment(i + 1, format)

    NewHour = $("<div>");
    NewHour.addClass("row");

    Hour = $("<div>");
    Hour.addClass("col-2 hour");
    Hour.text(TimeBlock.format(format));

    TimeFrame = $("<input>");
    TimeFrame.addClass("col-8")
    if ( time.isBetween(TimeBlock,NextTimeBlock)) {
        TimeFrame.addClass("present");
    }
    else if (time.isAfter(TimeBlock)) {
        TimeFrame.addClass("past");
    }
    
    else {
        TimeFrame.addClass("future");
    }

    SaveButton = $("<div class='col-2 saveBtn'>");
    SaveButton.addClass("col-2 saveBtn")

    NewHour.append(Hour, TimeFrame, SaveButton);
    TimeSlots.append(NewHour);
}