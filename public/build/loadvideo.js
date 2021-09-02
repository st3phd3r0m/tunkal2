(self["webpackChunk"] = self["webpackChunk"] || []).push([["loadvideo"],{

/***/ "./assets/home/loadvideo.js":
/*!**********************************!*\
  !*** ./assets/home/loadvideo.js ***!
  \**********************************/
/***/ (() => {

var player;
$(function () {
  $("a.player").on("click", onYouTubeIframeAPIReady);
}); // 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady(e) {
  e.preventDefault();
  var sreenWidth = screen.width - 60;
  player = new YT.Player(this.id, {
    height: Math.round(sreenWidth * 9 / 16),
    width: sreenWidth,
    videoId: this.dataset.videoid,
    events: {
      onReady: onPlayerReady
    }
  });
} // 4. The API will call this function when the video player is ready.


function onPlayerReady(event) {
  event.target.playVideo();
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/home/loadvideo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZHZpZGVvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBSjtBQUVBQyxDQUFDLENBQUMsWUFBWTtBQUNWQSxFQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNDLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEJDLHVCQUExQjtBQUNILENBRkEsQ0FBRCxFQUlBO0FBQ0E7O0FBQ0EsU0FBU0EsdUJBQVQsQ0FBaUNDLENBQWpDLEVBQW9DO0FBQ2hDQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFJQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBUCxHQUFhLEVBQTlCO0FBQ0FSLEVBQUFBLE1BQU0sR0FBRyxJQUFJUyxFQUFFLENBQUNDLE1BQVAsQ0FBYyxLQUFLQyxFQUFuQixFQUF1QjtBQUM1QkMsSUFBQUEsTUFBTSxFQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsVUFBVSxHQUFDLENBQVgsR0FBYSxFQUF4QixDQURvQjtBQUU1QkUsSUFBQUEsS0FBSyxFQUFFRixVQUZxQjtBQUc1QlMsSUFBQUEsT0FBTyxFQUFFLEtBQUtDLE9BQUwsQ0FBYUMsT0FITTtBQUk1QkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRUM7QUFETDtBQUpvQixHQUF2QixDQUFUO0FBUUgsRUFFRDs7O0FBQ0EsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDMUJBLEVBQUFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxTQUFiO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9tZS9sb2FkdmlkZW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHBsYXllcjtcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJChcImEucGxheWVyXCIpLm9uKFwiY2xpY2tcIiwgb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkpO1xufSk7XG5cbi8vIDMuIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhbiA8aWZyYW1lPiAoYW5kIFlvdVR1YmUgcGxheWVyKVxuLy8gICAgYWZ0ZXIgdGhlIEFQSSBjb2RlIGRvd25sb2Fkcy5cbmZ1bmN0aW9uIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHNyZWVuV2lkdGggPSBzY3JlZW4ud2lkdGgtNjA7XG4gICAgcGxheWVyID0gbmV3IFlULlBsYXllcih0aGlzLmlkLCB7XG4gICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChzcmVlbldpZHRoKjkvMTYpLFxuICAgICAgICB3aWR0aDogc3JlZW5XaWR0aCxcbiAgICAgICAgdmlkZW9JZDogdGhpcy5kYXRhc2V0LnZpZGVvaWQsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgb25SZWFkeTogb25QbGF5ZXJSZWFkeVxuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG4vLyA0LiBUaGUgQVBJIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIHZpZGVvIHBsYXllciBpcyByZWFkeS5cbmZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XG59Il0sIm5hbWVzIjpbInBsYXllciIsIiQiLCJvbiIsIm9uWW91VHViZUlmcmFtZUFQSVJlYWR5IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3JlZW5XaWR0aCIsInNjcmVlbiIsIndpZHRoIiwiWVQiLCJQbGF5ZXIiLCJpZCIsImhlaWdodCIsIk1hdGgiLCJyb3VuZCIsInZpZGVvSWQiLCJkYXRhc2V0IiwidmlkZW9pZCIsImV2ZW50cyIsIm9uUmVhZHkiLCJvblBsYXllclJlYWR5IiwiZXZlbnQiLCJ0YXJnZXQiLCJwbGF5VmlkZW8iXSwic291cmNlUm9vdCI6IiJ9