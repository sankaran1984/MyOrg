this.sessions = this.allSessions = [
    {
      id: '1',
      name: 'Mock session',
      dateTime: '2099-01-01 00:00:00',
      room: 'Mock room',
      description: "Mock description",
      speakers: [
        {
          id: '1',
          name: 'Mock speaker 1',
          bio: 'Bio for mock speaker 1',
          email: 'mock1@trailhead.com',
          pictureUrl:'https://developer.salesforce.com/files/js-dev/speaker-images/john_doe.jpg'
        },
        {
          id: '2',
          name: 'Mock speaker 2',
          bio: 'Bio for mock speaker 2',
          email: 'mock2@trailhead.com',
          pictureUrl:'https://developer.salesforce.com/files/js-dev/speaker-images/laetitia_arevik.jpg'
        }
      ]
    }
  ];

  this.session = {
    id: '1',
    name: 'Mock session',
    dateTime: '2099-01-01 00:00:00',
    room: 'Mock room',
    description: "Mock description",
    speakers: [
      {
        id: '1',
        name: 'Mock speaker 1',
        bio: 'Bio for mock speaker 1',
        email: 'mock1@trailhead.com',
        pictureUrl: 'https://developer.salesforce.com/files/js-dev/speaker-images/john_doe.jpg'
      },
      {
        id: '2',
        name: 'Mock speaker 2',
        bio: 'Bio for mock speaker 2',
        email: 'mock2@trailhead.com',
        pictureUrl: 'https://developer.salesforce.com/files/js-dev/speaker-images/laetitia_arevik.jpg'
      }
    ]
  };

export const getSessions = () => {
    return this.sessions;
}

export const getSession = () => {
    return this.session;
}