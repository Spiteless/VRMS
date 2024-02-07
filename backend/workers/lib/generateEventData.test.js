const { generateEventData } = require('./generateEventData.js');

describe('generateEventData', () => {

  // resuable data here
  let mockDate;
  let mockDatePlusThreeHours;
  let mockData;

  beforeEach(() => {
    mockDate = new Date('2024-02-07T10:00:00.000Z');
    mockDatePlusThreeHours = new Date(mockDate.setHours(mockDate.getHours() + 3)),
    mockData = {
      name: 'Test Event',
      hacknight: true,
      eventType: 'Workshop',
      description: 'This is a test event',
      project: {
        name: 'Test Project'
      },
      date: mockDate,
      startTime: mockDate, 
      endTime: new Date(mockDate.setHours(mockDate.getHours() + 3)),
      updatedDate: mockDate,
      hours: 3,
      videoConferenceLink: "test.com",
    };
    
  })

  test("generateEventData fn() generates expected startTime", () => {
    const result = generateEventData(mockData, mockDate);
    
    // expect(result.startTime).toEqual(new Date('2024-02-07T12:00:00')); 
    expect(result.startTime).toEqual(mockData.startTime);
  });
  
  test("generateEventData fn() generates expected endTime (startTime + hours)", () => {
    const result = generateEventData(mockData, mockDate);
    console.log('mock start time: ', mockData.startTime);
    console.log('mock end time: ', mockData.endTime, mockDatePlusThreeHours);
    console.log('res start time: ', result.startTime);
    console.log('res end time: ', result.endTime);
    console.log('comparison: ', result.endTime === mockData.endTime);
    // expect(result.startTime).toEqual(new Date('2024-02-07T12:00:00'));
    expect(result.endTime).toEqual(mockData.endTime);   
  });

})