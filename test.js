// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL, velocity:0.1, threshold:1 });

// listen to events...
mc.on("panleft panright panup pandown tap press", function(e) {
	console.log(e);
    myElement.textContent = ev.type +" gesture detected.";
});
