Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        var loggedIn;

        loggedIn = localStorage.getItem('AppLoggedIn');

        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        })
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
