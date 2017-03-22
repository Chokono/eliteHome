/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	[].forEach.call(document.getElementById("form").querySelectorAll('[name="form"]'), function (el) {
	    el.addEventListener('focus', function (e) {
	        if (!el.parentNode.getElementsByTagName('label')[0].classList.contains("active")) {
	            el.parentNode.getElementsByTagName('label')[0].classList.add("active");
	        };
	    });
	    el.addEventListener('blur', function (e) {
	        if (el.parentNode.getElementsByTagName('label')[0].classList.contains("active") && el.value === "") {
	            el.parentNode.getElementsByTagName('label')[0].classList.remove("active");
	        }
	    });
	});
	
	document.getElementById("form").querySelector('[type="submit"]').addEventListener('click', function (e) {
	    e.preventDefault();
	    var name = document.getElementById("name");
	    var phone = document.getElementById("phone");
	    if (name.value === "") {
	        name.classList.add("error");
	        setTimeout(function () {
	            name.classList.remove("error");
	        }, 3000);
	    } else if (phone.value === "") {
	        phone.classList.add("error");
	        setTimeout(function () {
	            phone.classList.remove("error");
	        }, 3000);
	    } else {
	        (function () {
	            var data = JSON.stringify({ name: '' + name.value, phone: '' + phone.value });
	            var xhr = new XMLHttpRequest();
	            xhr.open("POST", '/document', true);
	            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	            xhr.onreadystatechange = function () {
	                if (xhr.readyState != 4) return;
	            };
	            console.log(data);
	            xhr.send(data);
	            name.value = '';
	            phone.value = '';
	            [].forEach.call(document.getElementById("form").getElementsByTagName('label'), function (el) {
	                el.classList.remove('active');
	            });
	        })();
	    };
	});
	var icon = document.getElementsByTagName('i')[0];
	var menu = document.querySelector('.inner');
	icon.addEventListener('click', function (e) {
	    if (icon.classList.contains('fa-bars')) {
	        menu.classList.add('open');
	        icon.classList.remove('fa-bars');
	        icon.classList.add('fa-times');
	    } else {
	        menu.classList.remove('open');
	        icon.classList.remove('fa-times');
	        icon.classList.add('fa-bars');
	    };
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTAzMGE4ZjUyY2QxNDQyZjY2MGEiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ob21lLmpzIl0sIm5hbWVzIjpbImZvckVhY2giLCJjYWxsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnROb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInZhbHVlIiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJwaG9uZSIsInNldFRpbWVvdXQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJpY29uIiwibWVudSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxJQUFHQSxPQUFILENBQVdDLElBQVgsQ0FBZ0JDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLGdCQUFoQyxDQUFpRCxlQUFqRCxDQUFoQixFQUFtRixjQUFNO0FBQ3JGQyxRQUFHQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixhQUFLO0FBQzlCLGFBQUksQ0FBQ0QsR0FBR0UsVUFBSCxDQUFjQyxvQkFBZCxDQUFtQyxPQUFuQyxFQUE0QyxDQUE1QyxFQUErQ0MsU0FBL0MsQ0FB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dUIsY0FBS3hCLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixNQUFuQjtBQUNBcUIsY0FBS3ZCLFNBQUwsQ0FBZUksTUFBZixDQUFzQixTQUF0QjtBQUNBbUIsY0FBS3ZCLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixVQUFuQjtBQUNBLE1BSkQsTUFJTztBQUNOc0IsY0FBS3hCLFNBQUwsQ0FBZUksTUFBZixDQUFzQixNQUF0QjtBQUNBbUIsY0FBS3ZCLFNBQUwsQ0FBZUksTUFBZixDQUFzQixVQUF0QjtBQUNBbUIsY0FBS3ZCLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixTQUFuQjtBQUNBO0FBQ0QsRUFWRCxFIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMDMwYThmNTJjZDE0NDJmNjYwYSIsIltdLmZvckVhY2guY2FsbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJmb3JtXCJdJyksIGVsID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGUgPT4ge1xuICAgICAgICBpZiAoIWVsLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xhYmVsJylbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsYWJlbCcpWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4ge1xuICAgICAgICBpZiAoZWwucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGFiZWwnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgJiYgZWwudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xhYmVsJylbMF0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pXG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG4gICAgbGV0IHBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG9uZVwiKTtcbiAgICBpZiAobmFtZS52YWx1ZSA9PT0gXCJcIikge1xuICAgIFx0bmFtZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKSB9LCAzMDAwKTtcbiAgICB9IGVsc2UgaWYgKHBob25lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgXHRwaG9uZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBwaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIikgfSwgMzAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7bmFtZTpgJHtuYW1lLnZhbHVlfWAsIHBob25lOmAke3Bob25lLnZhbHVlfWB9KTtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgJy9kb2N1bWVudCcsIHRydWUpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgbmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBwaG9uZS52YWx1ZSA9ICcnO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsYWJlbCcpLCBlbD0+e1xuICAgICAgICBcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9O1xufSk7XG5sZXQgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpJylbMF07XG5sZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcicpO1xuaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9Pntcblx0aWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1iYXJzJykpIHtcblx0XHRtZW51LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcblx0XHRpY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMnKTtcblx0XHRpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXRpbWVzJyk7XG5cdH0gZWxzZSB7XG5cdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG5cdFx0aWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS10aW1lcycpO1xuXHRcdGljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuXHR9O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9ob21lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==