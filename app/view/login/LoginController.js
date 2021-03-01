Ext.define('MyApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  onLoginClick: function (cmp) {
    var values = cmp.up('form').getForm().getValues();
    var fields = cmp.up('form').getForm().getFields().items;
    if (values.username !== 'admin' && values.password !== 'padmin') {
      fields[0].setValue('');
      fields[1].setValue('');
      fields[2].setRawValue('Неверный логин или пароль');
    } else {
      localStorage.setItem('AppLoggedIn', true);
      this.getView().destroy();

      Ext.create({
        xtype: 'app-main'
      })
    }
  },

  enterLogin: function (cmp, e) {
    if (e.getKey() === 13 && cmp.up('form').getForm().isValid()) {
      this.onLoginClick(cmp);
    }
  }
});