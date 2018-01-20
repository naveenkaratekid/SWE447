var gl = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clear( 1.0, 1.0, 1.0, 1.0 );

    render();
}

function render() {
    gl.clearColor( gl.COLOR_BUFFER_BIT );
}

window.onload = init;// JavaScript Document