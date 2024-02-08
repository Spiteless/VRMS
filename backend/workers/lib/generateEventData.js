// grab the updatedDate
// check the time in LA/California
// get the timeZone offset
// if timeZone offset differs from the updatedDate to now
// normalize time to the updatedDate
//
// EG 7pm during daylight savings time is 8pm during standard time


function generateEventData(eventObj, TODAY_DATE = new Date()) {
    console.log(eventObj.startTime, TODAY_DATE, eventObj.startTime === TODAY_DATE)
    console.log(eventObj.hours)
    const oldStartTime = new Date(eventObj.startTime);
    // Create new event
    const oldHours = oldStartTime.getHours();
    const oldMinutes = oldStartTime.getMinutes();
    const oldSeconds = oldStartTime.getSeconds();
    const oldMilliseconds = oldStartTime.getMilliseconds();

    const newYear = TODAY_DATE.getFullYear();
    const newMonth = TODAY_DATE.getMonth();
    const newDate = TODAY_DATE.getDate();

    const newEventDate = new Date(newYear, newMonth, newDate, oldHours, oldMinutes, oldSeconds, oldMilliseconds);

    const newEndTime = new Date(newYear, newMonth, newDate, oldHours + eventObj.hours, oldMinutes, oldSeconds, oldMilliseconds)
    // console.log(eventData.startTime, TODAY_DATE)
    // console.log(eventData.endTime, newEndTime)

    const eventToCreate = {
        name: eventObj.name && eventObj.name,
        hacknight: eventObj.hacknight && eventObj.hacknight,
        eventType: eventObj.eventType && eventObj.eventType,
        description: eventObj.eventDescription && eventObj.eventDescription,
        project: eventObj.project && eventObj.project,
        date: eventObj.date && newEventDate,
        startTime: eventObj.startTime && newEventDate,
        endTime: eventObj.endTime && newEndTime,
        hours: eventObj.hours && eventObj.hours
    }
    
    if (eventObj.hasOwnProperty("location")) {
        eventToCreate.location = {
            city: eventObj.location.city ? eventObj.location.city : 'REMOTE',
            state: eventObj.location.state ? eventObj.location.state : 'REMOTE',
            country: eventObj.location.country ? eventObj.location.country : 'REMOTE'
        };
    }
    return eventToCreate
};

module.exports = { generateEventData };