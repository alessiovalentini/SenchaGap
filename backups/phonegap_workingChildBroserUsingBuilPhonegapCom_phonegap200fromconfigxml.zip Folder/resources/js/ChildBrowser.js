var ChildBrowser=(function(h){function f(i){return typeof i==="function"}function a(){}var g=0,b=1,d=2;function e(i){switch(i.type){case g:if(f(a.onClose)){a.onClose()}break;case b:if(f(a.onLocationChange)){a.onLocationChange(i.location)}break;case d:if(f(a.onOpenExternal)){a.onOpenExternal()}break}}function c(i){if(f(a.onError)){a.onError(i)}}a.install=function(){console.log("ChildBrowser.install is deprecated")};a.showWebPage=function(j,i){if(!i){i={showLocationBar:true}}h.exec(e,c,"ChildBrowser","showWebPage",[j,i])};a.close=function(){h.exec(null,null,"ChildBrowser","close",[])};a.openExternal=function(i,j){if(j){navigator.app.loadUrl(i)}else{h.exec(null,null,"ChildBrowser","openExternal",[i,j])}};h.addConstructor(function(){if(h.addPlugin){h.addPlugin("childBrowser",a)}else{if(!window.plugins){window.plugins={}}window.plugins.childBrowser=a}});return a})(window.cordova||window.Cordova||window.PhoneGap);