var VideoPlayerView = Backbone.View.extend({
  initialize: function(video) {
    this.video = video;
    this.render();
  },

  render: function() {
    console.log(this.video.attributes);
    this.$el.html(this.template(this.video.attributes));
    $('.player').html(this.$el);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
