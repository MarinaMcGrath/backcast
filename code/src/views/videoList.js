var VideoListView = Backbone.View.extend({
  initialize: function(videos) {
    this.videos = videos;
    this.videos.collection.on('sync', this.render, this);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    if (this.videos.collection.models && this.videos.collection.models.length > 0) {
      this.videos.collection.models.forEach(element => {
        new VideoListEntryView({ model: element});
      });
    }

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
