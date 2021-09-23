var html = document.documentElement;

var fontsfile = document.createElement('link');
fontsfile.href = pathTemplate + 'css/fonts.css';
fontsfile.rel = 'stylesheet';
document.head.appendChild(fontsfile);

if (sessionStorage.fontsLoaded) {
    html.classList.add('fonts-loaded');
} else {
    var script = document.createElement('script');
    script.src = pathTemplate + 'js/fontfaceobserver.js';
    script.async = true;

    script.onload = function () {
        var Roboto400 = new FontFaceObserver('Roboto', {
            weight: 'normal'
        });
        var Roboto500 = new FontFaceObserver('Roboto', {
            weight: '500'
        });
        var Montserrat500 = new FontFaceObserver('Montserrat', {
            weight: '500'
        });
        var Montserrat700 = new FontFaceObserver('Montserrat', {
            weight: 'bold'
        });

        Promise.all([
            Roboto400.load(),
            Roboto500.load(),
            Montserrat500.load(),
            Montserrat700.load()
        ]).then(function () {
            html.classList.add('fonts-loaded');
            sessionStorage.fontsLoaded = true;
        });
    };
    document.head.appendChild(script);
}