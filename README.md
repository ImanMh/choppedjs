choppedjs
=========

A minimal library for throttling cirtical events

#1.Why choppedJS?
I made this tiny library to make it easy for you to add throttled events. Throttled events are regular events but they happen fewer times. They are used to reduce number of calls on events such as scroll, resize and mouse move. ChoppedJS is based on what Nicholas Zakas teaches in his awesome book "High Performance JavaScript".

#2.Usage
Here are a few sample codes that demonstrate usage of choppedJS


first inculde jQuery(jQuery dependency would be removed in feauture) then chopped.js

```javascript
  function myScrollRelatedFunc () {
    //You may want to do stuff here that takes some CPU
  }

  //handler passed will be executed the once here and every 250ms when you are scrolling
  choppedjs.onScroll(myScrollRelatedFunc, 250);
  //handler wouldn't be executed until you begin scrolling
  choppedjs.onScroll(myOtherScrollRelatedFunc, 100, {
    immediate: false
  });


  choppedjs.onResize(myResizeRelatedFunc, 500);
  choppedjs.onMouseMove(myMouseMoveRelatedFunc, 10);

```
