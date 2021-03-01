Ext.define('MyApp.view.main.ListController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.list',

  onItemSelected: function (selModel, record, index, options) {
    var info = record.data;
    Ext.create('Ext.window.Window', {
      title: 'Карточка товара: ' + '',
      height: 400,
      width: 400,
      layout: 'fit',
      closable: false,

      items: {
        xtype: 'form',
        reference: 'form',
        padding: '10 10',

        items: [{
          xtype: 'displayfield',
          name: 'ID',
          fieldLabel: 'ID',
          value: info.ID
        }, {
          xtype: 'displayfield',
          name: 'name',
          fieldLabel: 'Описание',
          value: info.description
        }, {
          xtype: 'numberfield',
          name: 'price',
          fieldLabel: 'Цена',
          value: info.price,
          validator: function (val) {
            var regexp = /^\d+(?:\.\d{1,2})?$/;
            var oldSum = this.up('form').getForm().getValues().sum;

            return (regexp.test(val)
              && !(val === info.price && oldSum === info.sum))
              ? true
              : (val === info.price && oldSum === info.sum)
                ? 'Одно из значений должно быть новым'
                : 'Только положительные целые числа';
          }
        }, {
          xtype: 'numberfield',
          name: 'sum',
          fieldLabel: 'Кол-во',
          value: info.sum,
            validator: function (val) {
              var regexp = /^\d+$/;
              var oldPrice = this.up('form').getForm().getValues().price;

              return (regexp.test(val)
                && !(val === info.sum && oldPrice === info.price))
                ? true
                : (val === info.sum && oldPrice === info.price)
                  ? 'Одно из значений должно быть новым'
                  : 'Только положительные целые числа';
          }
        }],

        buttons: [{
          text: 'Сохранить',
          formBind: true,

          listeners: {
            // Обновляется только последняя в списке таблица =(
            click: function () {
              var record = Ext.getStore('goods').getById(info.id);
              var values = this.up('form').getForm().getValues();

              record.set({
                price: values.price,
                sum: values.sum
              });

              this.up('window').close();
              Ext.Msg.alert('Сохранение', 'Данные обнавлены, но они могут не отображаться в текущей вкладке (перейдите на последнюю)');
            },
          },
        }, {
        text: 'Отмена',
        listeners: {
          click: function () {
            this.up('window').close();
          }
        }
        }],
      },

    }).show()
  }
});