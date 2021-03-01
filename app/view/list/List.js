Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    controller: 'list',

    requires: [
        'MyApp.store.Goods',
        'MyApp.view.formFilter.FormFilter',
        'MyApp.view.main.ListController'
    ],

    title: 'Список товаров',

    store: {
        type: 'goods',
    },

    dockedItems: [{
        xtype: 'formFilter',
    }],

    columns: [
        { text: 'ID',  dataIndex: 'ID' },
        { text: 'Имя', dataIndex: 'name', flex: 1 },
        { text: 'Описание', dataIndex: 'description', flex: 1 },
        { text: 'Цена', dataIndex: 'price', flex: 1 },
        {
            text: 'Кол-во',
            dataIndex: 'sum',
            flex: 1,
            renderer: function (value, meta) {
                if (value <= 0) {
                    meta.style = 'background-color: red';
                    return value;
                } else {
                    return value;
                }
            }
        }
    ],

    listeners: {
        select: 'onItemSelected',
        updatedata: function (cmp) {
            console.log('hi')
            cmp.refresh()
        }
    }
});
