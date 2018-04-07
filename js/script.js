var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var day=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
	"22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
	var monthdays=[31,28,31,30,31,30,31,31,30,31,30,31];
	d = new Date(); 
	var dayy=day[d.getDay()];
	var monthh=month[d.getMonth()];
	var dayName = days[d.getDayName()];
	var yr=d.getFullYear();

function createTable()
		{
			var m= document.getElementById("month").innerHTML;
			var y=parseInt(document.getElementById("year").innerHTML);
			
			var yearr=y;
			var d1 = parseInt((yearr - 1)/4);
			var d2 = parseInt((yearr - 1)/100);
			var d3 = parseInt((yearr - 1)/ 400);
			var daycode = parseInt((yearr + d1 - d2 + d3)%7);

			if(yearr%4 == 0 && yearr%100 != 0 || yearr%400 == 0){
				monthdays[1] = 29;
				}
			else{
				monthdays[1] = 28;
				}
			
			var mn= new Array();
			for(var k=0; k<12; k++){
				mn[k]=daycode;
				daycode = ( daycode + monthdays[k] ) % 7;
				}
	
			for(var s=0; s<12; s++){
				if(m==month[s]){
				var daycod=mn[s];
				var monthday=monthdays[s];
				}
			}
			
			var table = document.getElementById("calandar");
			var r=0;
			for (var i = 0; i < 6; i++)
				{
					var row = table.insertRow(i);
					
					for (var j = 1; j <=7; j++)
						{
							var c= row.insertCell(j-1);
							if(i==0 && j<=daycod){
								c.innerHTML = "";
								}
							
							else if(r<monthday){
								c.innerHTML = day[r];
								//var dd=c.innerHTML;
								c.style.cursor="pointer";
								//c.addEventListener("click", showevent, false);
								c.onclick= function(){showevent(this.innerHTML,m,y);};
								r++;
								if( c.innerHTML==dayy && m==monthh && y==yearr ){
									c.style.color="#fff";
									c.style.border="1px solid #fafafa";
									c.style.cursor="pointer";
									c.style.background="teal";}
							
									
								}
								
							else {
								c.innerHTML = "";
								}
							if(j%7==1){c.style.color="#f00";}
							
						}						
				}
		}

		
function showevent(d,m,y){
 var form = document.createElement("form");
    var element1 = document.createElement("input"); 
    var element2 = document.createElement("input"); 
	var element3 = document.createElement("input"); 

    form.method = "POST";
    form.action = "view.php";   

    element1.value=d;
    element1.name="d";
	form.appendChild(element1);
	
	element2.value=m;
    element2.name="m";
	form.appendChild(element2);
	
	element3.value=y;
    element3.name="y";
	form.appendChild(element3);
	
	
    document.body.appendChild(form);

    form.submit();
}		

	function nextMonth()
	{
		
		var m=document.getElementById("month").innerHTML;
		var y=parseInt(document.getElementById("year").innerHTML);
		
		
		for(var i=0; i<11; i++)
		{
			if(m==month[i])
			{
				document.getElementById("month").innerHTML=month[i+1];
				document.getElementById('calandar').innerHTML = "";
				
				createTable();
				
			}

			else if(m==month[11])
			{
		
				document.getElementById("month").innerHTML=month[0];
				document.getElementById("year").innerHTML=y+1;
				document.getElementById('calandar').innerHTML = "";
				createTable();
			}
		}
	}
	
	function prevMonth(){
		var m=document.getElementById("month").innerHTML;
		var y=parseInt(document.getElementById("year").innerHTML);
		
		for(var i=11; i>0; i--)
		{
			if(m==month[i])
			{
				document.getElementById("month").innerHTML=month[i-1];
				document.getElementById('calandar').innerHTML = "";
				createTable();
			}
		else if(m==month[0])
			{
		
				document.getElementById("month").innerHTML=month[11];
				document.getElementById("year").innerHTML=y-1;
				document.getElementById('calandar').innerHTML = "";
				createTable();
			}
		}
	}