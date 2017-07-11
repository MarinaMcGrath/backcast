const query = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&maxResults=5&key=';
// q=javascript|backbonejs&
var Videos = Backbone.Collection.extend({
  model: Video,
  search: function(q, cb) {
    Backbone.ajax({
      url: `${query}${window.YOUTUBE_API_KEY}${'&q=' + q}`,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        // console.log(data);
        window.fetched = new Videos().parse(data);
        cb(data);
      }
    
    });
  },
  parse: function(data) {
    return data.items;
  }
});



