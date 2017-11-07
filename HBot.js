/* HBot.js v1.0
 * Author: Oyedele Hammed Horlah
 * URL: http://www.oyedelehammed.ml/HBot.html
 * Release Date: 7th November, 2017
*/

(function () {
this.HBot = function (db, msg, defaultReply) {
for (var key in db) {
 if (!db.hasOwnProperty(key))
  continue;
 var regex = RegExp(key, 'i');
 if (regex.test(msg))
  return db[key](regex.exec(msg));
}
return defaultReply || "No match for " + msg + " in bot's database";
  }
})();