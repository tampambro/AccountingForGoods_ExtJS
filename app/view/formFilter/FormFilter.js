Ext.define('MyApp.view.formFilter.FormFilter', {
  extend: 'Ext.form.Panel',
  xtype: 'formFilter',
  margin: '10 0',
  controller: 'formFilter',
  items: [{
    xtype: 'numberfield',
    fieldLabel: 'ID',
    emptyText: 'Введите фильтер...',
    name: 'id',
    enableKeyEvents: true,
    listeners: [{
      keyup: 'idFilter'
    }]
  }, {
    xtype: 'textfield',
    fieldLabel: 'Описание',
    emptyText: 'Введите фильтер...',
    name: 'description',
    enableKeyEvents: true,
    listeners: [{
      keyup: 'descriptionFilter'
    }]
  }]
});