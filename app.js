Ext.application({
    name: 'senchaGap',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main'],
    controllers: ['ApplicationCtrl','HomeCtrl'],    // startup order is this one and finally is called the launch function

    launch: function() {
        console.log('launch app');

        // Initialize the main view
        Ext.Viewport.add(Ext.create('senchaGap.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
