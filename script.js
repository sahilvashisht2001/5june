function getfun(){

    var a=7;
    return function(b){
        alert(a+b);
    }
}
var f=getfun();
f(5);