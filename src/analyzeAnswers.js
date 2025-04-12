function analyzeAnswers(answers) {
    const profile = {
      tags: [],
      preferences: {}
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
  
    // תקציב יומי
    if (answers.daily_budget) {
      profile.preferences.daily_budget = answers.daily_budget;
      profile.budget_level = answers.daily_budget.toLowerCase(); // לדוגמה: "low", "mid", "high"
    }
  
    // תחום חשוב לחיסכון
    if (answers.save_priority) {
      profile.preferences.save_priority = answers.save_priority;
    }
  
    // פעילויות רצויות
    if (answers.activities) {
      profile.preferences.activities = answers.activities;
      answers.activities.forEach(act => {
        profile.tags.push(act.toLowerCase().replace(/\s/g, '_'));
      });
    }
  
    // יציאה מהמסלול
    if (answers.off_beaten_path) {
      profile.preferences.off_beaten_path = answers.off_beaten_path;
    }
  
    // דרישות מיוחדות
    const req = answers.requirements?.toLowerCase() || "";
  
    if (req.includes('vegan')) profile.tags.push('vegan');
    if (req.includes('kosher')) profile.tags.push('kosher');
    if (req.includes('wheelchair')) profile.tags.push('accessible');
  
    // גילאי משתתפים (אם יש ילדים)
    if (answers.participants_ages?.some(age => age < 13)) {
      profile.tags.push('kids', 'family');
    }
  
    // יעד מועדף
    if (answers.destination) {
      profile.preferences.destination = answers.destination;
      profile.destination = answers.destination;
    }
  
    // מניעת כפילויות בתגיות
    profile.tags = [...new Set(profile.tags)];
  
    return profile;
  }
  
  export default analyzeAnswers;
  