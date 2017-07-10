var VideoPlayerView = Backbone.View.extend({
  initalize: function(videos) {
    this.videos = videos;
  },
  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    new VideoListView(this.videos).render();
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
