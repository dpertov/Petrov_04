
do {
	var hight = +prompt ('Введите высоту вершины прямоугольного треугольника');
	if (hight<=0 || hight!==hight) {
		alert(' Можно ввести только цифры!');
	}
	else {
		break;	
	}
} while (hight>0);

var i=1,o="\n";
var j="",n="*";
var rezult ="*";
while (i<=hight ) {
	j +=rezult+o;
	rezult +=n;
	i++;
}
alert (j);
