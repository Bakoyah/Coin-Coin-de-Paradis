/*Menu Hamburger*/

function showResponsiveMenu() {
    var menu = document.getElementById("topnav_responsive_menu");
    var icon = document.getElementById("topnav_hamburger_icon");
    var root = document.getElementById("root");
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}
/*------------------------------------------------------------*/
/* Carrousel*/

document.body.onload=function() {
        nbr=5;
        p=0;
        container=document.getElementById("container");
        g=document.getElementById("g");
        d=document.getElementById("d");
        container.style.width=(400*nbr)+"px";
        for(i=1;i<=nbr;i++) {
            div=document.createElement("div");
            div.className="photo2";
            div.style.backgroundImage="url('images/im"+i+".png')";
            container.appendChild(div);
        }
    }
    d.onclick=function() {
        if(p>-nbr+1)
            p--;
        container.style.transform="translate("+p*400+"px)";
        container.style.transition="all 0.5s ease";
    }
    g.onclick=function() {
        if(p<0)
            p++;
        container.style.transform="translate("+p*400+"px)";
        container.style.transition="all 0.5s ease";
    }