Tinytest.add('Server - Fast Render - fast render supproted route', function (test) {
  var expectedFastRenderCollData = [
    [{_id: "two", aa: 20}, {_id: "one", aa: 10}]
  ];

  var data = GetFRData('/the-fast-render-route');
  test.equal(data.collectionData['fast-render-coll'], expectedFastRenderCollData);
});

Tinytest.add('Server - Fast Render - no fast render supproted route', function (test) {
  var data = GetFRData('/no-fast-render');
  test.equal(data.collectionData, {});
});