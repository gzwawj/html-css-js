document.write("<table>");
var str = "js九九乘法表";
document.write("<h1>" + str + "</h1>");
for ( var x = 1; x <= 9; x++) {
    document.write("<tr>");
    for ( var y = 1; y <= x; y++) {
        document.write("<th>" + x + "*" + y + "=" + (x * y) + "</th>");
    }
    document.write("</tr>");
}
document.write("</table>");