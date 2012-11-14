Ext.define('senchaGap.controller.ApplicationCtrl', {
	extend: 'Ext.app.Controller',

	init: function(){
		console.log('app ctrl');
		// phonegap starts
		document.addEventListener( "deviceready" , this.onDeviceReady, false);
		// phonegap resume
		document.addEventListener("resume", this.onDeviceResume, false);
		// app goes offline
		document.addEventListener("offline", this.onDeviceOffline, false);
		// app goes back online
		document.addEventListener("online", this.onDeviceOnline, false);
	},

	config: {

		// cache dom objects references + get functions for free
		refs: {

		},

		// how controller must react at events on the referenced objects
		control: {

		},

		// history support
		// note: As long as your controller uses redirectTo(url), the standard history.back() will function as expected.
		routes: {

			// 'dashboard/alerts'  		: 'showDashboardAlertsPanel',
		}
	},

	// /*********************************************************************************
	//  *
	//  *	transitions definitions
	//  *
	//  *********************************************************************************/

 //    slideRightTransition: { type: 'slide', direction: 'right' },
 //    slideLeftTransition: { type: 'slide', direction: 'left' },
 //    fadeTransition: { type: 'fade', duration: 1000 },

 //    /*********************************************************************************
	//  *
	//  *	routing methods
	//  *
	//  *********************************************************************************/

 //    showDashboardAlertsPanel: function(){
 //    	this.redirectToInnerCard( 0,'dashboard/alerts', this.fadeTransition);
 //    },

 //    showDashboardVehicleInfoPanel: function(){
 //    	this.redirectToInnerCard( 1,'dashboard/vehicle-info', this.fadeTransition);
 //    },

 //    showDashboardPerformancePanel: function(){
 //    	this.redirectToInnerCard( 2,'dashboard/performance', this.fadeTransition);
 //    },

 //    showDashboardRoundSummaryPanel: function(){
 //    	this.redirectToInnerCard( 3,'dashboard/round-summary', this.fadeTransition);
 //    },

 //    changeActiveContentPanel: function( itemTapped, index, target, record, e, eOpts ){
	// 	switch(index){

	// 		case 0: 	// alerts
	// 			this.redirectTo('dashboard/alerts');
	// 		    break;
	// 		case 1: 	// vehicle info
	// 			this.redirectTo('dashboard/vehicle-info');
	// 		    break;
	// 	    case 2: 	// performance
	// 	    	this.redirectTo('dashboard/performance');
	// 		    break;
	// 		case 3: 	// round
	// 			this.redirectTo('dashboard/round-summary');
	// 		    break;
	// 	}
	// },

	// /*********************************************************************************
	//  *
	//  *	Internal utility methods
	//  *
	//  *********************************************************************************/

	// /**
	//  *	the sidebar redirects to a particular content panel
	//  *	@params:
	//  *		- index: 		container card index (0,1,2,3) where 0 is the DashboardAlertsPanel
	//  *		- windowsHash:  what to print on the browser url (need this in order to have history support)
	//  *		- transition: 	what type of transition must be used
	//  */
	// redirectToInnerCard: function( index, windowHash, transition ){
 //    	// select the right item in the list
 //    	this.getDashboardSidebarNavigationList().select(index);							// index == 0 === alerts
 //    	// set the active inner card
 //    	this.getDashboardContainer().getAt(1).animateActiveItem(index, transition);		// getAt(1) === not the sidebar but the content container
 //    	// // if we are on another tab set dashboard as active one
 //    	// this.getMainTabPanel().animateActiveItem(0, transition);						// 0 == dashboard
	// }

	onDeviceReady: function() {
		alert('hallo gap');
        var loc = 'https://google.com';
        window.plugins.childBrowser.showWebPage( loc, { showLocationBar: true } );
    },

    onDeviceResume: function(){
    	alert('resume');
    },

    onDeviceOffline: function(){
    	alert('device offline');
    },

    onDeviceOnline: function(){
    	alert('device back online');
    }
});