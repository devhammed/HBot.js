/** HBot.js | JavaScript AI Library
 * @author Oyedele Hammed Horlah
 * @version 1.0
 * @since October 12, 2017
 * @see http://www.oyedelehammed.ml/HBot.html
*/

function HBot( db, msg, defaultReply ) {
  for ( var key in db ) {
    if ( !db.hasOwnProperty( key ) ) continue;
    var regex = RegExp( key, 'i' );
    if ( regex.test( msg ) ) {
      return db[key]( regex.exec( msg ) );
    }
  }
  return defaultReply || 'I have no reply for that';
}