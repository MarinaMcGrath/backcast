var VideoListEntryView = Backbone.View.extend({
  initialize: function(model) {
    this.model = model.model;
    this.$el.on('click', () => this.model.select());
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes.snippet));
    $('.video-list').append(this.$el);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
