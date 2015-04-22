/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Menu.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Menu.view.main.MainController',
        'Menu.view.main.MainModel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        margin: '5 5 5 5',
/*        bind: {
            title: '{name}'
        },
*/        region: 'west',
        layout: {
            type: 'accordion'
        },
        bodyStyle: 'padding:0px',
        width: 200,
        split: false,
        listeners: {
            render: 'onBeforeRender'
        }
    },{
        region: 'center',
        margin: '5 5 5 0',
        xtype: 'tabpanel',
    }]
});
