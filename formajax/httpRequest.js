// JavaScript source code


function getHttpRequest() {

    let httpRequest = null;
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.XMLHttpRequest) {
            httpRequest = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            //IE 8-9-10-11
            try {
                httpRequest = new ActiveXObject("msxml2.XMLHTTP");
            } catch (e) {
                //IE 6-7
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP")
            }
        }


    } else {
        alert("Votre navigateur ne peut faire d'Ajax");
    }

    return httpRequest;
}