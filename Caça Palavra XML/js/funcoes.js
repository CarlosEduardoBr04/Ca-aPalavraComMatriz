/* Lê o XML */  
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/lista_animes.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
let animes = xmlDoc.getElementsByTagName("anime");
var cont = animes.length;

matriz = new Array;
x = 0;


matriz = [
                ['B','L','E','A','C','H','E','O','L','D','N','S','C','S','A','U','E','N'],
                ['C','E','E','N','L','O','N','E','P','U','N','C','H','M','A','N','H','E'],
                ['A','P','A','S','H','T','O','K','Y','O','G','H','O','U','L','O','H','B'],
                ['R','S','O','C','H','G','T','S','Y','T','D','I','A','H','N','T','E','D'],
                ['I','A','N','R','N','E','N','P','O','K','É','M','O','N','Y','N','L','E'],
                ['T','L','N','A','R','U','T','O','S','U','I','T','A','L','U','T','A','A'],
                ['O','T','D','R','A','G','O','N','B','A','L','L','S','A','M','A','T','T'],
                ['A','J','O','I','E','H','N','W','I','S','E','E','T','E','S','F','H','H'],
                ['A','D','E','A','T','H','N','O','T','E','D','P','A','I','E','R','T','N'],
                ['G','H','L','I','I','I','D','F','F','A','I','R','Y','T','A','I','L','O'],
                ['I','N','U','Y','A','S','H','A','T','M','O','L','M','E','E','N','Y','T'],
                ['R','V','U','C','B','A','L','K','Z','O','T','J','S','N','Q','U','R','O'],
                ['N','T','R','P','S','V','T','S','S','O','U','L','E','A','T','E','R','O'],
];


document.write("<table>");
for(linha=0; linha<13; linha++){
    
    document.write("<tr>");
    for(coluna=0; coluna<18; coluna++){
       
        x++;
        document.write("<td id='" + x + "' align='center' >" + matriz[linha][coluna] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");


colorirPalavra();

function colorirPalavra(){
    for(i=0; i<=cont-1; i++){
        
        inicial = parseInt(animes[i].getElementsByTagName('inicial')[0].childNodes[0].nodeValue);
        final = parseInt(animes[i].getElementsByTagName('final')[0].childNodes[0].nodeValue);
        incremento = parseInt(animes[i].getElementsByTagName('incremento')[0].childNodes[0].nodeValue);
        cor = animes[i].getElementsByTagName('cor')[0].childNodes[0].nodeValue;

        for(z=inicial; z<=final; z=z+incremento){
           
            document.getElementById(z).style.background = cor;
        }
    }
}