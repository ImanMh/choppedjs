
(function () {
  
  window.chopped = {};

function ChopScroll (handler, timeout, name) {
  this.timeout = timeout;
  this.handler = handler;
  this.name = name || 'unnamed';
  this.isExecuteTime = true;
  this.interval = '';
  var _this = this;
  init();

  function init() {
    //reset the execute determiner
    $(window).scroll(function () {
      _this.isExecuteTime = true;
    });

    //execute the handler based on the timeout user passed
    _this.interval = setInterval(function () {
      if (_this.isExecuteTime) {
        try {
          handler();
        } catch (err) {
          console.log(err);
        }
        //turn off the exec time until user scroll again
        _this.isExecuteTime = false;
      }
    }, _this.timeout);
  }

}


  choppedjs.onEvent = function (eventType, handler, timeoutm, options) {
    this.eventType = eventType;
    this.timeout = timeout;
    this.handler = handler;
    this.name = name || 'unnamed';
    this.isExecuteTime = true;
    this.interval = '';
    var _this = this;
    
    function init() {
      //reset the execute determiner
      $(window)[_this.eventType](function () {
        _this.isExecuteTime = true;
      });

      //execute the handler based on the timeout user passed
      _this.interval = setInterval(function () {
        if (_this.isExecuteTime) {
          try {
            handler();
          } catch (err) {
            console.log(err);
          }
         //turn off the exec time until user scroll again
          _this.isExecuteTime = false;
        }
      }, _this.timeout);
    }
    
  };

  choppedjs.onScroll = function (handler, timeout, options) {
    choppedjs.onEvent('scroll', handler, timeout, options);
  };

  choppedjs.onResize = function (handler, timeout, options) {
    choppedjs.onEvent('resize', handler, timeout, options);
  };

}());
