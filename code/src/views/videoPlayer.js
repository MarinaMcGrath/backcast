var VideoPlayerView = Backbone.View.extend({
  initialize: function(video) {
    this.video = video;
    if (video === undefined) {
      this.video = { attributes: null };
    }
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.video.attributes));
    $('.player').html(this.$el);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
