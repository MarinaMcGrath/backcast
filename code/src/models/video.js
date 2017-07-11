var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    window.app.playing = this;
    window.app.render();
    window.eventListeners();
    this.trigger('select', this);
  }

});
