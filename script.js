function validate()
{
    var k=document.getElementById("principal").value;
    if(k<1 || k==NaN)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    return true;
}
function compute()
{
    if(validate()==true){
    var p = document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;   
    var yr=document.getElementById("years").value;
    var interest= (p*yr*rate)/100;
    const d=new Date();
    var year = d.getFullYear()+parseInt(yr);
    
    document.getElementById("result").innerHTML="<br><b>If you deposit <mark>"+p+"</mark>,<br>at an interest rate of <mark>"+rate+"%</mark>.<br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+year+"</mark></b>";
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    console.log(rateval);
    document.getElementById("rate_val").innerText=rateval;
}

        
