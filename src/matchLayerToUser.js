function matchLayerToUser(profile, layer) {
    const prefs = profile.preferences || {};
    const tags = profile.tags || [];
  
    // בדיקת סוג שכבה - לדוגמה רק שכבות "accommodation"
    if (layer.main_category && layer.main_category !== 'accommodation') {
      return false;
    }
  
    // 1. התאמה לפי תקציב
    if (prefs.daily_budget && layer.budgetLevel) {
      const levels = ['<$50', '$50–100', '$100–200', '$200+'];
      const budgetValues = ['low', 'medium', 'high'];
      const userLevel = levels.indexOf(prefs.daily_budget);
      const layerLevel = budgetValues.indexOf(layer.budgetLevel);
      if (layerLevel > userLevel) {
        return false;
      }
    }
  
    // 2. התאמה לפי נגישות/כשרות (אם סומן בדרישות)
    if (layer.sub_category === 'accessible' && !tags.includes('accessible')) {
      return false;
    }
    if (layer.sub_category === 'kosher' && !tags.includes('kosher')) {
      return false;
    }
  
    // 3. התאמה ל-families (אם המשתמש מטייל עם משפחה)
    if (layer.sub_category === 'family' && !tags.includes('family')) {
      return false;
    }
  
    // 4. התאמה לתתי-קטגוריות של תקציב (4 כוכבים, בוטיק, תקציבי)
    if (layer.sub_category === 'budget' && prefs.daily_budget && !['<$50', '$50–100'].includes(prefs.daily_budget)) {
      return false;
    }
  
    if (layer.sub_category === '4_star' && prefs.daily_budget && prefs.daily_budget === '<$50') {
      return false;
    }
  
    if (layer.sub_category === '5_star' && prefs.daily_budget && !['$100–200', '$200+'].includes(prefs.daily_budget)) {
      return false;
    }
  
    if (layer.sub_category === 'boutique' && prefs.daily_budget && prefs.daily_budget === '<$50') {
      return false;
    }
  
    // 5. (עתידי) אפשר להוסיף כאן התאמה לפי יעד
    // if (prefs.destination && layer.destination) { ... }
  
    return true;
  }
  
  export default matchLayerToUser;
  