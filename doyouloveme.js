function tb(){
    alert("This is right choice" )
}
function tele(){
    // alert("aaa")

    let posit1 = document.getElementById('bt2');
    console.log( posit1.style.top);
    posit1.style.top = (parseInt(posit1.style.top ) + parseInt(Math.random()*300)) + 'px';
    console.log( posit1.style.top);
    posit1.style.left = (parseInt(posit1.style.left ) +  parseInt(Math.random()*300)) + 'px';

}