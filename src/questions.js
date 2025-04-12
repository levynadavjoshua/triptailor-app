const questions = [
    {
      id: 'name',
      question: "What's your name?",
      type: 'text',
      placeholder: 'Enter your name',
      required: true,
    },
    {
      id: 'participants',
      question: 'How many participants are traveling with you?',
      type: 'number',
      placeholder: 'e.g. 2',
      required: true,
    },
    {
      id: 'ages',
      question: "What are the participants' ages?",
      type: 'text',
      placeholder: 'e.g. 28, 31',
      required: false,
    },
    {
      id: 'planning_level',
      question: 'How planned do you want your trip to be?',
      type: 'select',
      options: ['Very planned', 'Flexible', 'Spontaneous'],
      required: true,
    },
    {
      id: 'requirements',
      question: 'Do you have any special requirements or restrictions?',
      type: 'text',
      placeholder: 'e.g. Vegan, wheelchair accessible...',
      required: false,
    },
    {
      id: 'destination',
      question: 'What’s your preferred destination?',
      type: 'text',
      placeholder: 'e.g. Paris, Japan, National parks...',
      required: true,
    },
    {
      id: 'travel_distance',
      question: 'How far are you willing to travel?',
      type: 'select',
      options: ['Short drive', 'Within country', 'International'],
      required: true,
    },
    {
      id: 'daily_budget',
      question: 'What’s your daily budget for this trip?',
      type: 'select',
      options: ['<$50', '$50–100', '$100–200', '$200+'],
      required: true,
    },
    {
      id: 'save_priority',
      question: 'Which area of the trip is most important to save on?',
      type: 'select',
      options: ['Accommodation', 'Food', 'Attractions', 'Transportation'],
      required: false,
    },
    {
      id: 'activities',
      question: 'What activities would you like to include?',
      type: 'text',
      placeholder: 'e.g. Hiking, museums, food tours...',
      required: false,
    },
    {
      id: 'off_beaten_path',
      question: 'How important is it for you to step off the beaten path?',
      type: 'select',
      options: ['Not important', 'Somewhat important', 'Very important'],
      required: true,
    },
    {
      id: 'perfect_trip',
      question: 'What defines the perfect trip for you?',
      type: 'text',
      placeholder: 'Write freely...',
      required: false,
    },
  ];
  
  export default questions;
  