var mc = new Hammer(myElement, myOptions);
mc.on('pan', function(ev) {
    console.log(ev);
});
