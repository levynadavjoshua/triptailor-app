function analyzeAnswers(answers) {
    const profile = {
      tags: [],
      preferences: {},
    };
  
    // תכנון הטיול
    switch (answers.planning_level) {
      case 'Very planned':
        profile.tags.push('structured');
        profile.preferences.flexibility = 'low';
        break;
      case 'Flexible':
        profile.tags.push('moderate');
        profile.preferences.flexibility = 'medium';
        break;
      case 'Spontaneous':
        profile.tags.push('spontaneous');
        profile.preferences.flexibility = 'high';
        break;
      default:
        break;
    }
  
    // מרחק נסיעה
    switch (answers.travel_distance) {
      case 'Short drive':
        profile.tags.push('local');
        profile.preferences.range = 'short';
        break;
      case 'Within country':
        profile.tags.push('domestic');
        profile.preferences.range = 'medium';
        break;
      case 'International':
        profile.tags.push('global');
        profile.preferences.range = 'long';
        break;
      default:
        break;
    }
  
    // דרישות מיוחדות
    if (answers.requirements?.toLowerCase().includes('vegan')) {
      profile.tags.push('vegan');
    }
  
    if (answers.requirements?.toLowerCase().includes('wheelchair')) {
      profile.tags.push('accessible');
    }
  
    // יעד מועדף
    if (answers.destination) {
      profile.preferences.destination = answers.destination;
    }
  
    return profile;
  }
  
  export default analyzeAnswers;
  