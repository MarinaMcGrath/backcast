var VideoListView = Backbone.View.extend({
  initialize: function(videos) {
    // this.collection.on('select', function() {
    //   console.log('hello');
    // }, this);
    this.videos = videos;
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    new VideoListEntryView(this.videos);
    return this;
  },
  template: templateURL('src/templates/videoList.html')

});
