var VideoListEntryView = Backbone.View.extend({
  initialize: function(model) {
    this.model = model.model;
    this.render();

    this.on('all', function() {
      console.log('hi')
      this.model.select();
    }.bind(this));
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
