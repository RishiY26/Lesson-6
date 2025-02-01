show=()=>{
    n=document.getElementById("name").value;
    document.getElementById("paragraph1").innerHTML="Happy New Year"+" "+n+"!";
    document.getElementById("paragraph2").innerHTML="New year, new hopes and newer beginnings- all of us ardently wait for the clock to strike 12 and usher in the new year. It's such a celebratory, positive time which keeps everyone in good spirits!";
    document.getElementById("image1").src="./Assets/Image20250201140640.gif"}
document.getElementById("button1").addEventListener("click", show);