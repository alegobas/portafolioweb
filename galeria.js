$(document).ready(function(){
	$(".itemgaleria").click(function(){
		let cualcontenido=$(this).data("contenido")
		/*alert(cualcontenido)*/
		let idcontenido=$(this).attr("id")
		 openFullscreenImage(idcontenido)
	})
})
function openFullscreenImage(elementId) {
	var element = document.getElementById(elementId);
	
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) { /* Firefox */
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) { /* IE/Edge */
		element.msRequestFullscreen();
	}

}
