function init(){
	navigator.splashscreen.hide();
}

function TakePicture() { 
   navigator.camera.getPicture(onSuccess, onFail, {  
      quality: 25, 
      destinationType: Camera.DestinationType.DATA_URL 
   });  
   
   function onSuccess(imageData) { 
      var image = document.getElementById('myImage'); 
      image.src = "data:image/jpeg;base64," + imageData; 
   }  
   
   function onFail(message) { 
      alert('Failed because: ' + message); 
   } 
}

var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?73c27e26f610eb3c9f3feb0c75b03925";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();



