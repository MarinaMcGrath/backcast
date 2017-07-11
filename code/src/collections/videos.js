const query = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoDefinition=high&videoEmbeddable=true&maxResults=5&key=';
// q=javascript|backbonejs&
var Videos = Backbone.Collection.extend({
  model: Video,
  search: function(q) {
    Backbone.ajax({
      url: `${query}${window.YOUTUBE_API_KEY}`,
      type: 'GET',
      dataType: 'json',
      data: { q: q },
      success: function(data) {
        console.log(data);
        window.fetched = new Videos().parse(data);
      }
    });
  },
  parse: function(data) {
    return data.items;
  }
});
