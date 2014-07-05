
(function () {

  window.choppedjs = {};

  function extend(){
    for(var i=1; i<arguments.length; i++)
    for(var key in arguments[i])
      if(arguments[i].hasOwnProperty(key))
        arguments[0][key] = arguments[i][key];
    return arguments[0];
  }
  
  choppedjs.onEvent = function (eventType, handler, timeout, config) {
    var defaults = {
      name: 'unnamed',
      mute: false,
      immediate: true
    };
    this.options = extend({}, defaults, config);
    this.eventType = eventType;
    this.timeout = timeout;
    this.handler = handler;
    this.isExecuteTime = this.options.immediate;
    this.interval = '';
    var _this = this;
    init();

    function init() {
      //reset the execute determiner
      $(window)[_this.eventType](function () {
        _this.isExecuteTime = true;
      });

      //execute the handler based on the timeout user passed
      _this.interval = setInterval(function () {
        if (_this.isExecuteTime && !_this.options.mute) {
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
    return new choppedjs.onEvent('scroll', handler, timeout, options);
  };

  choppedjs.onResize = function (handler, timeout, options) {
    return new choppedjs.onEvent('resize', handler, timeout, options);
  };

  choppedjs.onMousemove = function (handler, timeout, options) {
    return new choppedjs.onEvent('mousemove', handler, timeout, options);
  };
  
}());
