Ext.define('MyApp.store.Goods', {
    extend: 'Ext.data.Store',

    alias: 'store.goods',

    storeId: 'goods',

    data: { items: [
        { ID: '1', name: 'Laptop', description: 'переносной компьютер, в корпусе которого объединены типичные компоненты ПК, включая дисплей, клавиатуру', price: '30000', sum: '7' },
        { ID: '2', name: 'microwave oven', description: 'Микроволновая печь (также СВЧ-печь; устар. микроволновая; разг. микроволно́вка) — электроприбор, позволяющий совершать разогрев', price: '40000', sum: '0' },
        { ID: '3', name: 'electric kettle', description: 'полое изделие (сосуд) различной формы с крышкой, ручкой и носиком (так же существуют чайники без носика), предназначенное для', price: '10000', sum: '3' },
        { ID: '11', name: 'razor', description: 'Кремнёвыми ножами для бритья предположительно пользовались шумеры и древние египтяне. По мере развития металлургии во втором тысячелетии', price: '25000', sum: '2' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
