function myFunction(a, b) {
   
    return a + b;//the function returns the product

}
function arrays() {
    var pens;
   
    pens = ['red', 'green', 'pink', 'black', 'orange'];
    markers = pens;
    console.log(markers);
    var i;
    for (i = 0; i <markers.length; i++)
    {
       alert( i+1+"marker is of color"+markers[i]);
    }
    alert("length of array is:" + markers.length);
}
