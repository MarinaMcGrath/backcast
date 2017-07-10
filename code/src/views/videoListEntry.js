var VideoListEntryView = Backbone.View.extend({
  initialize: function(model) {
    this.model = model.model;
    this.render();

    this.$el.on('click', () => this.model.select());
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
