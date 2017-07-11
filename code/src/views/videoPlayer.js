var VideoPlayerView = Backbone.View.extend({
  initialize: function(video) {
    this.video = video;
<<<<<<< HEAD
    if (video === undefined) {
      this.video = { attributes: null };
    }
=======
>>>>>>> c16ab57bb6005e8d8e4b647ac23e7a31cf36c08c
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
