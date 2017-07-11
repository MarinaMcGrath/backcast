var VideoPlayerView = Backbone.View.extend({
  initialize: function(video) {
    this.video = video;
    this.render();
  },

  render: function() {
    if (this.video !== undefined) {
      this.$el.html(this.template(this.video.attributes));
      $('.player').html(this.$el);
    }  
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
