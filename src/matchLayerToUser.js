function matchLayerToUser(profile, layer) {
    const {
      destination,
      budget_level,
      tags = [],
      preferences = {}
    } = profile;
  
    const layerTags = (layer.tags || "")
      .split(',')
      .map(tag => tag.trim().toLowerCase());
  
    // יעד
    if (destination && layer.destination) {
      if (layer.destination.toLowerCase() !== destination.toLowerCase()) {
        return false;
      }
    }
  
    // תקציב
    if (budget_level && layer.budget_level) {
      if (layer.budget_level.toLowerCase() !== budget_level.toLowerCase()) {
        return false;
      }
    }
  
    // תגיות (לפחות אחת צריכה להתאים)
    if (tags.length > 0 && layerTags.length > 0) {
      const hasTagMatch = tags.some(tag => layerTags.includes(tag));
      if (!hasTagMatch) return false;
    }
  
    // דרישות מיוחדות – שכבות עם תגית kosher/accessible יופיעו רק אם המשתמש צריך את זה
    if (layerTags.includes('kosher') && !tags.includes('kosher')) {
      return false;
    }
  
    if (layerTags.includes('accessible') && !tags.includes('accessible')) {
      return false;
    }
  
    // התאמה עתידית לפי פעילויות
    if (preferences.activities && Array.isArray(preferences.activities)) {
      const activityTags = preferences.activities.map(a => a.toLowerCase().replace(/\s/g, '_'));
      const hasActivityMatch = activityTags.some(tag => layerTags.includes(tag));
      if (!hasActivityMatch) {
        return false;
      }
    }
  
    // התאמה לרמת תכנון או ספונטניות (בהמשך ניתן לבדוק מול layer.structuring או layer.flexibility)
    if (preferences.flexibility && layer.flexibility) {
      if (layer.flexibility.toLowerCase() !== preferences.flexibility.toLowerCase()) {
        return false;
      }
    }
  
    // TODO: future compatibility with save_priority, off_beaten_path, etc.
  
    return true;
  }
  
  export default matchLayerToUser;
  