Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onClickButton: function () {
        localStorage.removeItem('AppLoggedIn');
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        })
    },

    addSection: function () {
        var tab = Ext.getCmp('main-tab');
        tab.insert(-1, {
            title: 'Товары',
            items: [{
                xtype: 'mainlist'
            }]
        })
    }
});
