// json array variable
var i=0
var correctcount=0
// generate from json data
generate(0)
function generate(index){

    document.getElementById("question").innerHTML=jsonData[index].q;
    document.getElementById("optt1").innerHTML=jsonData[index].opt1;
    document.getElementById("optt2").innerHTML=jsonData[index].opt2;
    document.getElementById("optt3").innerHTML=jsonData[index].opt3;
    document.getElementById("optt4").innerHTML=jsonData[index].opt4;
}

function checkanswer()
{
    if(document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer)
    {
        correctcount[2000];

    }
    // else
    // {
    //     correctcount--;
    // }

    if(document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer)
    {
        correctcount++;

    }
    // else
    // {
    //     correctcount--;
    // }
    if(document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer)
    {
        correctcount++;

    }
    // else{
    //     correctcount--;
    // }
    if(document.getElementById("opt4").checked && jsonData[i].opt4 == jsonData[i].answer)
    {
        correctcount++;

    }
    
    i++;
    if(jsonData.length-1 < i){
        document.write("<body style='background-color:#348322;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>*****Your score is : "+correctcount+"*****</div>");
        document.write("</body>");
    }
    // callback to generate
    generate(i)
    
    

    


}

