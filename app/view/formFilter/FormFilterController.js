Ext.define('MyApp.view.login.FormFilterController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.formFilter',

  idFilter: function (cmp, e) {
    if (e.getKey() === 13) {
      var value = cmp.getValue();
      var cmpStore = cmp.up('grid').getStore('goods');
      if (value === null) {
        cmpStore.clearFilter();
        return;
      }
      cmpStore.addFilter({
        type: 'string',
        property: 'ID',
        value: value
      });
    }
  },

  descriptionFilter: function (cmp, e) {
    if (e.getKey() === 13) {
      var cmpStore = cmp.up('grid').getStore('goods');
      if (cmp.getValue() === '') {
        cmpStore.clearFilter();
        return;
      }
      cmpStore.clearFilter();
      cmpStore.filterBy(function (store) {
        return store.get('description').includes(cmp.getValue());
      });
    }
  }
})