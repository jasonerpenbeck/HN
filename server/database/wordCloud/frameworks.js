exports.wcFrameworks= function(req, res) {

  var sendBack = {
    results: 'Request Received',
    data: [
    'Angular',
    'Backbone',
    'Bootstrap',
    'D3',
    'Drupal',
    'Ember',
    'famo.us',
    'Flux',
    'jQuery',
    'JSON',
    'Kendo',
    'Meteor',
    'Mithril',
    'mongo',
    'Node.js',
    'OpenGL',
    'React',
    'Rust',
    'Sencha',
    'WebGL'
    ]
  };

  res.json(sendBack);
};