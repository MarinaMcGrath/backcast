var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(videos) {
    this.videos = new Videos(videos);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView(this.videos.models[0]);
    new SearchView();
    new VideoListView({ collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
