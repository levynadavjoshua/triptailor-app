import { createClient } from '@supabase/supabase-js';
import matchLayerToUser from './matchLayerToUser';

// התחברות ל-Supabase עם ENV
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// טבלאות שכבות
const layerTables = [
  'accommodations',
  'food',
  'culture',
  'history',
  'kids',
  'nature',
  'nightlife',
  'services',
  'shopping',
  'unique_layers'
];

async function getFilteredLayers(profile) {
  let results = [];

  for (const table of layerTables) {
    const { data, error } = await supabase
      .from(table)
      .select('*');

    if (error) {
      console.error(`Error fetching from ${table}:`, error.message);
      continue;
    }

    const filtered = data.filter(layer => matchLayerToUser(profile, layer));

    const enriched = filtered.map(layer => ({
      ...layer,
      source_table: table
    }));

    results = results.concat(enriched);
  }

  return results;
}

export default getFilteredLayers;
