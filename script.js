function compute()
{
    //Create a variable called 'principal' and assign to it the value of the input element "principal":
    var principal = document.getElementById("principal").value;

    //Validation for principal (if less than or equal to zero give alert and return focus):
    var x = document.getElementById("principal").value;
    if (isNaN(x) || x <= 0) {
      alert("Enter a positive number");
      document.getElementById('principal').focus();
      return false;
    }

    //Create a variable called rate and assign to it the value of the input element "rate":
    var rate = document.getElementById("rate").value;

    //Create a variable called years and assign to it the value of the input element "years":
    var years = document.getElementById("years").value;

    //Create a variable called interest and assign to it the value of principal * years * rate / 100:
    var interest = principal * years * rate /100;

    //Logic to convert the 'No of Years' into the actual year in the future:
    var year = new Date().getFullYear()+parseInt(years);

    //Give result and highlight the values using <mark> tag and in css make the mark tag yellow:
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br/>at an interest rate of <mark>"+rate+"%</mark>.<br/>You will receive an amount of <mark>"+interest+"</mark>,<br/>in the year <mark>"+year+"</mark><br/>"
}


    //function that reads the value of the range slider and displays it the <span> adjacent to the slider:
    function updateRate()
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }