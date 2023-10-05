var count = document.querySelector("#count");
var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");
var reset = document.querySelector("#reset");
var start = document.querySelector("#start");
var isstart = false;
var ahm = 0;

plus.addEventListener("click",function () {
if(isstart==true){
    ahm++;
    count.innerHTML = ahm;
}
});
minus.addEventListener("click",function(){
    if(ahm>0&&isstart==true){
        ahm--;
        count.innerHTML = ahm;
    }
});
reset.addEventListener("click",function(){
    if(isstart == true){
        ahm = 0;
        count.innerHTML = ahm;
    }
});
start.addEventListener("click",function(){
    if(isstart == false){
        isstart = true;
        start.innerHTML = "Stop ";
    }
    else{
        isstart = false;
        start.innerHTML = "Start ";
    }
})