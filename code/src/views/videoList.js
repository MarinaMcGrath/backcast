var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
