var VideoListEntryView = Backbone.View.extend({
  initialize: function(videos) {
    if (videos === undefined) {
      videos = [];
    } else if (videos.collection.models === undefined && video.model) {
      video.model.on('select', this.render);
    } else {
      videos.collection.models.forEach(e => {
        e.on('select', () => {
          this.render();
          // console.log('hello');
        });
      });
    }
  },
  render: function(model) {
    this.$el.html(this.template(model));
    // this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
