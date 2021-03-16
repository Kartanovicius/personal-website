document.addEventListener('DOMContentLoaded',function(){
    const dataText = ["Creative solution." ,"I’m a student driven by web design and web programming. Interested in working on something awesome together."];
    let j = 0;

    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            if(j === 0){
                document.querySelector("h2").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            }
            else {
                document.querySelector("p").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            }
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 30);
        }
        else if (typeof fnCallback == 'function') {
            if (j === 0) {
                setTimeout(fnCallback, 700);
            }
        }
    }
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                j++;
                StartTextAnimation(i + 1);
            });
        }
    }
    StartTextAnimation(0);
});