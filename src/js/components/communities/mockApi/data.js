export default {
  communities: [
    {
      id: 1,
      name: 'Facebook Developer Circle Lagos',
      description: 'A community of developers united in knowledge sharing.',
      featured_image: '/login-bg.jpg',
      no_of_members: 200,
      no_of_upcoming_events: 2,
      focus: 'Technology',
      joined: true,
    },
    {
      id: 2,
      name: 'Google Developer Group',
      description: 'Developer community bringing up community interest, powereed by google.',
      featured_image: '/tech_is_in_you.png',
      no_of_members: 200,
      no_of_upcoming_events: 2,
      focus: 'Developers',
      joined: true,
    },
    {
      id: 3,
      name: 'Facebook Developer Circle Lagos',
      description: 'A community of developers united in knowledge sharing',
      featured_image: '/login-bg.jpg',
      no_of_members: 200,
      no_of_upcoming_events: 2,
      focus: 'Technology',
      joined: true,
    },
    {
      id: 4,
      name: 'Google Developer Group',
      description: 'Developer community bringing up community interest, powereed by google.',
      featured_image: null,
      no_of_members: 200,
      no_of_upcoming_events: 2,
      focus: 'Developers',
      joined: false,
    },
    {
      id: 5,
      name: 'Facebook Developer Circle Lagos',
      description: 'A community of developers united in knowledge sharing',
      featured_image: '/tech_is_in_you.png',
      no_of_members: 200,
      no_of_upcoming_events: 2,
      focus: 'Technology',
      joined: false,
    },
    {
      id: 6,
      name: 'Google Developer Group',
      description: 'Developer community bringing up community interest, powereed by google.',
      featured_image: null,
      no_of_members: 200,
      no_of_upcoming_events: 2,
      focus: 'Developers',
      joined: false,
    }
  ],

  events: [
    {
      id: 1,
      title: 'Tech is in you',
      featured_image: '/tech_is_in_you.png',
      interested: 211,
      community: {
        id: 1,
        name: 'Google Developer Group',
        description: 'Developer community bringing up community interest, powereed by google.',
        featured_image: '/login-bg.jpg',
        no_of_members: 200,
        no_of_upcoming_events: 2,
        focus: 'Developers',
        joined: false,
      }
    },
    {
      id: 2,
      title: 'Writers corner workshop',
      featured_image: '/login-bg.jpg',
      interested: 35,
      community: {
        id: 2,
        name: 'Facebook Developer Circle Lagos',
        description: 'A community of developers united in knowledge sharing',
        featured_image: '/tech_is_in_you.png',
        no_of_members: 200,
        no_of_upcoming_events: 2,
        focus: 'Technology',
        joined: false,
      }
    }
  ]
}