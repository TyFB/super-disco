var planDay = [
    { 
        id:"0",
        hour:"5",
        time:"500",
        sun:"am",
        plan:""
    },
    {
        id:"1",
        hour:"6",
        time:"600",
        sun:"am",
        plan:""
    },
    {
        id:"2",
        hour:"7",
        time:"700",
        sun:"am",
        plan:""
    },
    {
        id:"3",
        hour:"8",
        time:"800",
        sun:"am",
        plan:""
    },
    {
        id:"4",
        hour:"9",
        time:"900",
        sun:"am",
        plan:""
    },
    {
        id:"5",
        hour:"10",
        time:"1000",
        sun:"am",
        plan:""
    },
    {
        id:"6",
        hour:"11",
        time:"1100",
        sun:"am",
        plan:""
    },
    {
        id:"7",
        hour:"12",
        time:"1200",
        sun:"pm",
        plan:""
    },
    {
        id:"8",
        hour:"1",
        time:"1300",
        sun:"pm",
        plan:""
    },
    {
        id:"9",
        hour:"2",
        time:"1400",
        sun:"pm",
        plan:""
    },
    {
        id:"10",
        hour:"3",
        time:"1500",
        sun:"pm",
        plan:""
    },
    {
        id:"11",
        hour:"4",
        time:"1600",
        sun:"pm",
        plan:""
    },
    {
        id:"12",
        hour:"5",
        time:"1700",
        sun:"pm",
        plan:""
    }
];
var days = planDay[i]
for (i=0;i<planDay.length;i++) {
    $( "<p>" + days.hour + days.sun + "</p>").appendTo(".container")
};