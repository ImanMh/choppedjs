choppedjs
=========

A minimal library for throttling cirtical events

#1.Why choppedJS?
I made this tiny library to make it easy for you to add throttled events. Throttled events are regular events but they happen fewer times. They are used to reduce number of calls on events such as scroll, resize and mouse move. ChoppedJS is based on what Nicholas Zakas teaches in his awesome book "High Performance JavaScript".

#3.Installation
You can clone this repo or you can run one of the fallowing commands
```
  bower install choppedjs
  jam install choppedjs
```

#2.Usage
Here are a few sample codes that demonstrate usage of choppedJS


first inculde jQuery(jQuery dependency would be removed in feauture) then chopped.js

```javascript
  function myScrollRelatedFunc () {
    //You may want to do stuff here that takes some CPU
  }

  //handler passed will be executed once right away and then every 250ms while you are scrolling
  choppedjs.onScroll(myScrollRelatedFunc, 250);
  //handler wouldn't be executed until you begin scrolling
  choppedjs.onScroll(myOtherScrollRelatedFunc, 100, {
    immediate: false
  });


  choppedjs.onResize(myResizeRelatedFunc, 500);
  choppedjs.onMousemove(myMouseMoveRelatedFunc, 10);

  //will create a chopped event that will be activated progromatically
  var trr = choppedjs.onMosemove(myMouseMoveRelatedFunc, 10, {
    mute: true
  });
  $(document).ready(function () {
    if (ifNeeded())
      trr.options.mute = false;
  });

```
