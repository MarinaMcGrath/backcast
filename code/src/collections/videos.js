var Videos = Backbone.Collection.extend({
  model: Video,
  search: function() {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET'
    });
  }
});

