/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-07-31 14:56:26
 * @version $Id$
 */

// imagesLoaded：用來防止計算圖片寬度和高度的錯誤
// itemSelector：要套用效果的DIV
// columnWidth：欄位寬度，當圖片載入失敗，或是還沒載入時，預設的寬高會以這為主
// animate：動態效果

// 側邊欄

// $("#profile-toggle").click(function(e) {
//   e.preventDefault();
//   $("#wrapper").toggleClass("toggled");
// });

// $("#profile-toggle-Close").click(function(e) {
//   e.preventDefault();
//   $("#wrapper").toggleClass("toggled");
// });

// // My Toy

// $("#My-Toy-toggle").click(function(e) {
//   e.preventDefault();
//   $("#wrapper").toggleClass("Toy-toggled");
// });

// // Inbox

// $("#Inbox-toggle").click(function(e) {
//   e.preventDefault();
//   $("#wrapper").toggleClass("Inbox-toggled");
// });

// 行動版選單自動關閉

$('#LovePalzClubMenu').click('li', function() {
  $('#LovePalzClubMenu').collapse('hide');
});