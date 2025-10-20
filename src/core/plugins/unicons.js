import app from '../../config/configApp';
import Unicon from 'vue-unicons';
import * as unicons from "vue-unicons/dist/icons";

const icons = [];
Object.values(unicons).map(icon => icons.push(icon));

Unicon.add(icons);

// Debug logging
if (import.meta.env.DEV) {
  console.log('[Unicons] Loaded', icons.length, 'icons');
  console.log('[Unicons] Sample icons:', icons.slice(0, 5).map(i => i.name));
}

app.use(Unicon);
