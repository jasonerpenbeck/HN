angular.module('cloud', [])
.controller('CloudController', function ($scope) {
  var test = $scope.data = [
    { text: 'meteor', weight: 10 },
    { text: 'angular', weight: 5 },
    { text: 'lodash', weight: 3 },
    { text: 'underscore', weight : 1}
  ];
  test.forEach(function(val, index) {
    var properties = {
      html: {
        class: 'wordtopics'
      }
    };
    _.extend(val, properties);
  })
  $('.cloud').jQCloud(test);
  // $('.cloud').on('click', 'span', function(event) {
  //   console.log('This:', this);
  //   console.log('Event:', event);
  // })
  $('.cloud').on('mouseenter mouseleave', 'span', function(event) {
    $(this).toggleClass('active');
  })
});
