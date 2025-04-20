    function randomNumberGenerator(){
    var r = Math.floor(Math.random() * 7) + 1; // r: 1 to 7
    return r;
    }
    var s1 = "Happiness is not by chance, but by choice.";
    var s2 = "Believe in yourself and all that you are. \n Know that there is something inside you that is greater than any obstacle.";
    var s3 = "The only place where success comes before work is in the dictionary.";
    var s4 = "Set your goals high, and don't stop till you get there.";
    var s5 = "Don't watch the clock; do what it does. Keep going.";
    var s6 = "The future belongs to those who believe in the beauty of their dreams.";
    var s7 = "The soul always knows what to do to heal itself. \n The challenge is to silence the mind.";

    var i1 = "https://picsum.photos/id/646/367/267";
    var i2 = "https://picsum.photos/id/177/367/267";
    var i3 = "https://picsum.photos/id/5/367/267";
    var i4 = "https://picsum.photos/id/4/367/267";
    var i5 = "https://picsum.photos/id/357/367/267";
    var i6 = "https://picsum.photos/id/304/367/267";
    var i7 = "https://picsum.photos/id/349/367/267";

    function setParameters(){
        var k = randomNumberGenerator();
        
        if(k===1){
            document.querySelector(".img").setAttribute("src", i1);
            setTimeout(() => {
            document.querySelector(".quote").textContent = s1;
                }, 900);
            }
        else if(k===2){
            document.querySelector(".img").setAttribute("src", i2);
            setTimeout(() => {
            document.querySelector(".quote").textContent = s2;
                }, 900);
            }

        else if(k===3){
            document.querySelector(".img").setAttribute("src", i3);
            setTimeout(() => {
            document.querySelector(".quote").textContent = s3;
            }, 900);
        }
        else if(k===4){
            document.querySelector(".img").setAttribute("src", i4);
            setTimeout(() => {
            document.querySelector(".quote").textContent = s4;
            }, 900);
        }

        else if(k===5){
            document.querySelector(".img").setAttribute("src", i5);
            setTimeout(() => {
            document.querySelector(".quote").textContent = s5;
            }, 900);
        }
        else if(k===6){
            document.querySelector(".img").setAttribute("src", i6);
            setTimeout(() => {
            document.querySelector(".quote").textContent = s6;
            }, 900);
        }
        else if(k===7){
            document.querySelector(".img").setAttribute("src", i7);
            setTimeout(() => {
            document.querySelector(".quote").textContent = s7;
            }, 900);
        }
    }

    document.querySelector(".refresh").addEventListener("click", setParameters);
