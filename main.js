var Sarray=[];
function submit(){
    var n1= document.getElementById ("s1").value;
    var n2= document.getElementById ("s2").value;
    var n3= document.getElementById ("s3").value;
    var n4= document.getElementById ("s4").value;
    var n5= document.getElementById ("s5").value;

    Sarray.push(n1);
    Sarray.push(n2);
    Sarray.push(n3);
    Sarray.push(n4);
    Sarray.push(n5);

    document.getElementById ("display").innerHTML=Sarray;
    document.getElementById("submit_button").style.display="none";
document.getElementById("sorting_button").style.display="inline-block";
}
function sorting(){
    Sarray.sort();
    document.getElementById ("display").innerHTML=Sarray;
}