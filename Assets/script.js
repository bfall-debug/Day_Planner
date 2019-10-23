var WorkHours = 9;
$TimeSlots = $(".container");


for (i = 0; i < WorkHours; i++) {
    $NewHour = $("<div class='row'>");

    $Time = $("<div class='col-2 hour'>" +  "</div>");
    $Time.text(`${i + 9}` + ":00");

    $TimeFrame = $("<input class='col-8'>");
    $TimeFrame.addClass("future");

    $SaveButton = $("<div class='col-2 saveBtn'>");

    $NewHour.append($Time,$TimeFrame,$SaveButton);
    $TimeSlots.append($NewHour);
}