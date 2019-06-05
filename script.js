var a=6;
function test(){

    var a=7;
    function again(){
        var a=8;
        alert(a); //A
    }
    again();
    alert(a);//B
}
test();
alert(a);//C