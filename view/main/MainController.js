Ext.define('Menu.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	requires: [
		'Ext.window.MessageBox'
	],

	alias: 'controller.main',

	onBeforeRender: function(menu)
	{

		// menu.add();
		Ext.Ajax.request({
			url: 'php/menu.php',
			success: function(response){
				var obj = Ext.JSON.decode(response.responseText);
				console.log(obj);
				menu.add(obj);
		    }
		});
	}
});
