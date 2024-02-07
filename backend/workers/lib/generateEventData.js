// grab the updatedDate
// check the time in LA/California
// get the timeZone offset
// if timeZone offset differs from the updatedDate to now
// normalize time to the updatedDate
//
// EG 7pm during daylight savings time is 8pm during standard time


function generateEventData(eventData, TODAY_DATE = new Date()) {
    // console.log("🦄")
    const eventDate = new Date(eventData.startTime);
    // Create new event
    const hours = eventDate.getHours();
    const minutes = eventDate.getMinutes();
    const seconds = eventDate.getSeconds();
    const milliseconds = eventDate.getMilliseconds();

    const yearToday = TODAY_DATE.getFullYear();
    const monthToday = TODAY_DATE.getMonth();
    const dateToday = TODAY_DATE.getDate();

    const newEventDate = new Date(yearToday, monthToday, dateToday, hours, minutes, seconds, milliseconds);

    const newEndTime = new Date(yearToday, monthToday, dateToday, hours + eventData.hours, minutes, seconds, milliseconds)

    const eventToCreate = {
        name: eventData.name && eventData.name,
        hacknight: eventData.hacknight && eventData.hacknight,
        eventType: eventData.eventType && eventData.eventType,
        description: eventData.eventDescription && eventData.eventDescription,
        project: eventData.project && eventData.project,
        date: eventData.date && newEventDate,
        startTime: eventData.startTime && newEventDate,
        endTime: eventData.endTime && newEndTime,
        hours: eventData.hours && eventData.hours
    }
    
    if (eventData.hasOwnProperty("location")) {
        eventToCreate.location = {
            city: eventData.location.city ? eventData.location.city : 'REMOTE',
            state: eventData.location.state ? eventData.location.state : 'REMOTE',
            country: eventData.location.country ? eventData.location.country : 'REMOTE'
        };
    }
    return eventToCreate
};

module.exports = { generateEventData };