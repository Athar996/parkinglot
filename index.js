var row = 1;
var i = 3;

function done() 
{
  var name = document.getElementById("name").value;
  var vname = document.getElementById("vname").value;
  var vnum = document.getElementById("vnum").value;
  var entrydate = document.getElementById("entrydate").value;
  var exitdate = document.getElementById("exitdate").value;

  if (!name || !vname || !vnum || !entrydate || !exitdate) 
  {
    alert(" WARINING-Please fill VALID  details");

    var displaytable = document.getElementById("displaytable");
    var newRow = displaytable.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = "Not";
    cell2.innerHTML = "Added";
    cell3.innerHTML = "valid";
    cell4.innerHTML = "details";
    cell5.innerHTML = "Wasted";
    document.getElementById("li1").innerHTML = "enter correct details";
  } 
  else 
  {
    document.getElementById("li1").innerHTML ="your car " + " " + vname + " " + " is succesfully parked";
    i = i - 1;
    document.getElementById("inc").value = i;
        if (document.getElementById("inc").value < 0) 
            {
                alert("Parking Full");
                i = 0;
            }
        else 
            {
                var displaytable = document.getElementById("displaytable");
                var newRow = displaytable.insertRow(row);

                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);

                cell1.innerHTML = name;
                cell2.innerHTML = vname;
                cell3.innerHTML = vnum;
                cell4.innerHTML = entrydate;
                cell5.innerHTML = exitdate;
            }
  }
}

function unpark() 
{
    document.getElementById("li1").innerHTML ="Last inserted car was succesfully Unparked";
    var delrow = displaytable.deleteRow(row);
    delrow.deleteRow(0);
    i++;
    document.getElementById("inc").value = i;  

}
