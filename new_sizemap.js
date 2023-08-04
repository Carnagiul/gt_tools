// Récupérer les paramètres de l'URL
const urlParams = new URLSearchParams(window.location.search);

// Vérifier si le paramètre "screen" avec la valeur "map" existe dans les paramètres de l'URL
if (urlParams.has('screen') && urlParams.get('screen') === 'map') {
  // Le paramètre "screen" avec la valeur "map" existe dans l'URL
  console.log('Le paramètre "screen" est présent avec la valeur "map"');
  $("#minimap_chooser_select").append("<option value='150'>150x150</option>");
  $("#minimap_chooser_select").append("<option value='200'>200x200</option>");
  $("#minimap_chooser_select").append("<option value='225'>225x225</option>");
  $("#minimap_chooser_select").append("<option value='250'>250x250</option>");
  $("#minimap_chooser_select").append("<option value='275'>275x275</option>");
  $("#minimap_chooser_select").append("<option value='300'>300x300</option>");
} else {
  // Le paramètre "screen" avec la valeur "map" n'est pas présent dans l'URL
  console.log('Le paramètre "screen" n\'est pas présent avec la valeur "map"');
}
