
test('chopper is loaded and ready in the page', function () {
  var ch = chopped.onScroll(function () {}, 100, 'testChopper');
  ok(ch !== null, 'chopper instance is not null');
  ok(ch !== undefined, 'chopper instance is not undefined');
});
