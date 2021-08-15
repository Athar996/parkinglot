        // alert("PLEASE FILL ALL THE DETAILS")

var row=1;



function done()
{
    var name= document.getElementById("name").value;
    var vname= document.getElementById("vname").value;
    var vnum= document.getElementById("vnum").value;
    var entrydate= document.getElementById("entrydate").value;
    var exitdate= document.getElementById("exitdate").value;

    if(!name ||!vname ||!vnum ||!entrydate ||!exitdate)
    {
        alert(" WARINING-Please fill VALID  details")
        
    var  displaytable=document.getElementById("displaytable");
    var newRow = displaytable.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);

    cell1.innerHTML = "Not";
    cell2.innerHTML = "Added";
    cell3.innerHTML = "valid";
    cell4.innerHTML = "details";
    cell5.innerHTML = "Wasted";
    document.getElementById("li1").innerHTML="enter correct details";  
  
}
    else 
    // return;

    // if (confirm("Do you want to save?") == true)
    // {
    //     alert("data saved is"+ " : "+ "Name : " +name+"\n"+"Vname : "+vanme+"\n"+"Vnum : "+vnum+"\n"+"Entrydate : "+entrydate+"\n"+"Exitdate : "+exitdate);    

    // }
    // else
    // {
    //     document.write("not saved ")
    // }

    // alert("data saved is"+ " : "+ "Name : " +name+"\n"+"Vname : "+vname+"\n"+"Vnum : "+vnum+"\n"+
                                //   "Entrydate : "+entrydate+"\n"+"Exitdate : "+exitdate);    

    //  alert("your car is sucessfully parked");

    document.getElementById("li1").innerHTML="your car "+" " + vname +" " + " is succesfully parked";  
        //   and exits on  : " + document.getElementById("exitdate").value;

    // const timeout = document.getElementById('li1')
    // setTimeout(hideElement, 3000) //milliseconds until timeout//
    // function hideElement() {
    // timeout.style.display = 'none'
    // }

    // document.getElementById("li2").innerHTML="\ncar names are " + document.getElementById("vname").value;
   
    var  displaytable=document.getElementById("displaytable");
     var newRow = displaytable.insertRow(row);

     var cell1=newRow.insertCell(0);
     var cell2=newRow.insertCell(1);
     var cell3=newRow.insertCell(2);
     var cell4=newRow.insertCell(3);
     var cell5=newRow.insertCell(4);

     cell1.innerHTML = name;
     cell2.innerHTML = vname;
     cell3.innerHTML = vnum;
     cell4.innerHTML = entrydate;
     cell5.innerHTML = exitdate;

}


function unpark()
{
    // alert("sucessfully unparked");
    document.getElementById("li1").innerHTML="Last inserted car was succesfully Unparked";  
    // const timeout = document.getElementById('li1')
    // setTimeout(hideElement, 3000) //milliseconds until timeout//
    // function hideElement() {
    // timeout.style.display = 'none'
    // }
    var delrow=displaytable.deleteRow(row);
    delrow.deleteRow(0);

    // document.getElementById("unparkedcar").innerHTML="sucessfully unparked";
}

