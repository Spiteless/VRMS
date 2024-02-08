const { generateEventData } = require('./generateEventData.js');

describe('generateEventData', () => {


  // beforeEach(() => {
  //   mockDate = new Date('2024-02-07T10:00:00.000Z');
  //   mockDatePlusThreeHours = new Date(mockDate.setHours(mockDate.getHours() + 3)),
    
  //   mockData = {
  //     name: 'Test Event',
  //     hacknight: true,
  //     eventType: 'Workshop',
  //     description: 'This is a test event',
  //     project: {
  //       name: 'Test Project'
  //     },
  //     date: mockDate,
  //     startTime: new Date('2024-02-07T10:00:00.000Z'), 
  //     endTime: new Date(mockDate.setHours(mockDate.getHours() + 3)),
  //     updatedDate: mockDate,
  //     hours: 3,
  //     videoConferenceLink: "test.com",
  //   };
    
  // })

  test("generateEventData fn() generates expected startTime", () => {
    const testDate = new Date('2024-02-07T10:00:00.000Z')
    const testDate2nd = new Date('2024-02-07T10:00:00.000Z')

    const mockData = {
      name: 'Test Event',
      date: new Date('2024-02-07T10:00:00.000Z'),
      startTime: new Date('2024-02-07T10:00:00.000Z'), 
      endTime: new Date(testDate2nd.setHours(testDate2nd.getHours() + 3)),
      updatedDate: testDate,
      hours: 3,
    };
    
    const result = generateEventData(mockData, testDate);
    
    // expect(result.startTime).toEqual(new Date('2024-02-07T12:00:00')); 
    expect(result.startTime).toEqual(mockData.startTime);
  });
  
  test("generateEventData fn() generates expected endTime (startTime + hours)", () => {
    const testDate = new Date('2024-02-07T10:00:00.000Z')
    const testDate2nd = new Date('2024-02-07T10:00:00.000Z')

    const mockData = {
      eventType: 'Workshop',
      date: testDate,
      startTime: new Date('2024-02-07T10:00:00.000Z'), 
      endTime: new Date(testDate2nd.setHours(testDate2nd.getHours() + 3)),
      updatedDate: testDate,
      hours: 3,
    };
    
    const result = generateEventData(mockData, testDate);
    expect(result.endTime).toEqual(mockData.endTime);   
  });

})