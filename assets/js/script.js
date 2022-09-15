// array to setup schedule
var planDay = [
    {
        id: "0",
        hour: "5",
        time: "0500",
        sun: "am",
        plan: ""
    },
    {
        id: "1",
        hour: "6",
        time: "0600",
        sun: "am",
        plan: ""
    },
    {
        id: "2",
        hour: "7",
        time: "0700",
        sun: "am",
        plan: ""
    },
    {
        id: "3",
        hour: "8",
        time: "0800",
        sun: "am",
        plan: ""
    },
    {
        id: "4",
        hour: "9",
        time: "0900",
        sun: "am",
        plan: ""
    },
    {
        id: "5",
        hour: "10",
        time: "1000",
        sun: "am",
        plan: ""
    },
    {
        id: "6",
        hour: "11",
        time: "1100",
        sun: "am",
        plan: ""
    },
    {
        id: "7",
        hour: "12",
        time: "1200",
        sun: "pm",
        plan: ""
    },
    {
        id: "8",
        hour: "1",
        time: "1300",
        sun: "pm",
        plan: ""
    },
    {
        id: "9",
        hour: "2",
        time: "1400",
        sun: "pm",
        plan: ""
    },
    {
        id: "10",
        hour: "3",
        time: "1500",
        sun: "pm",
        plan: ""
    },
    {
        id: "11",
        hour: "4",
        time: "1600",
        sun: "pm",
        plan: ""
    },
    {
        id: "12",
        hour: "5",
        time: "1700",
        sun: "pm",
        plan: ""
    }
];
// function to get the current day
function getDate() {
    var currentDate = moment().format("YYYY MMM, Do");
    $("#currentDay").text(currentDate)
};
getDate();
// Using jQuery, bootstrap, and moment to set up schedule
planDay.forEach(function (thisPlan) {
    var hourRow = $('<form>').attr({ "class": "row" });
    $(".container").append(hourRow);
    var hourTime = $("<div>")
        .text(thisPlan.hour + thisPlan.sun)
        .attr({ "class": "col-md-2 hour" });
    var hourPlan = $("<div>")
        .attr({ "class": "col-md-9 description p-0" });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisPlan.id);
    if (thisPlan.time < moment().format("HH")) {
        planData.attr({ "class": "past" })
    } else if (thisPlan.time === moment().format("HH")) {
        planData.attr({ "class": "present" })
    } else if (thisPlan.time > moment().format("HH")) {
        planData.attr({ "class": "future" })
    }
    var savePlan = $("<i class='far fa-save fa-lg'></i>")
    var saveGame = $("<button>")
        .attr({ "class": "col-md-1 saveBtn" });
    saveGame.append(savePlan);
    hourRow.append(hourTime, hourPlan, saveGame);
});