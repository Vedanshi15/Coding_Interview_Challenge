// storing API URL to variable
		var API = "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php";
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", API, true);
		xhttp.onreadystatechange = function (){
				if(xhttp.readyState == 4 && xhttp.status == 200){
						var employees = JSON.parse(xhttp.responseText);
						// getting employee data
						for (var i = 1; i <= Object.keys(employees).length; i++){
								
							var id = employees[i].employeeid; 
							var name = employees[i].employeefname + " " + employees[i].employeelname;
							var bio = employees[i].employeebio;
							var result = "";
							//storing data with HTML to Output
							result += '<div class="section">';
							// print crown symbol for featured employee
							if(employees[i].employeeisfeatured == 1){
								result += '<div class="crown">👑</div>';
							}
							result += '<div class="img-section"><img src="http://sandbox.bittsdevelopment.com/code1/employeepics/' + id + '.jpg ">' + '</div>'; //displaying image
							result += '<div class="bio-section"><h2>' + name + '</h2>';
							result += '<p>' + bio + '</p></div><div class="role-section">';
							result += employees[i].roles.map(function(Role){ 
								return '<div class="role">' + 
									'<p style= "background-color:' + Role.rolecolor + '">' +Role.rolename + '</p>'
							}).join("  ");							
							result += '</div></div></div>';
							// Display the output
							document.getElementById("data").innerHTML += result;
						}
				}
		}
		xhttp.send();