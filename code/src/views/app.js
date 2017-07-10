var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(videos) {
    this.videos = new Videos(videos);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView();
    new SearchView();
    new VideoListView();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
