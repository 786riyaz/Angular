//Declaring Form 
var app = angular.module("FormApp", []);

//Decalring Variable
app.controller("FormController", function ($scope) {

    //Variable Decalaration
    $scope.emailPattern = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$";
    $scope.namePattern = "^[A-Za-z]{2,30}$";
    $scope.pincodePattern = "^[1-9]{1}[0-9]{5}$";

    //Validate Function 
    $scope.sendForm = function () {
        $scope.msg = "Form Validated";
	console.log("Done");
    };

    //Check Firstname and  Lastname
    $scope.checkName = function () {
        //document.getElementById("same").innerHTML = "same";
        //document.getElementsByName("sameName").innerHTML = "same class";
        if ($scope.Firstname === $scope.Lastname) {
            	//document.getElementByClassName("same").innerHTML = "Class";
		console.log('First Name and Last Name are Same');
		//console.log($scope.Firstname);
		let ele = document.getElementsByClassName("same");
		for (let i = 0; i < ele.length; i++) 
		{
			ele[i].innerHTML = "First name & Last name Should be unique";
		}
            	//document.getElementById("same").innerHTML = "ID";
        }
        else {
            // document.getElementsByClassName("same").innerHTML = "";
            //document.getElementById("same").innerHTML = "";
            let ele = document.getElementsByClassName("same");
            for (let i = 0; i < ele.length; i++) 
	    {
		ele[i].innerHTML = "";
            }
        }
    };

    //Populate Age Field
    $scope.populateAge = function () {
        var d = new Date();
        if (d.getMonth() < $scope.Date.getMonth()) {
            age = d.getFullYear() - $scope.Date.getFullYear() - 1;
            $scope.Age = age;
        }
        else {
            age = d.getFullYear() - $scope.Date.getFullYear();
            $scope.Age = age;
        }
    };

    //Printing Data On Console
	$scope.print = function(){
	    console.log("Submit Button Pressed");
	    console.log("First Name = "+$scope.Firstname);
	    console.log("Middle Name = "+$scope.Middlename);
	    console.log("Last Name = "+$scope.Lastname);
	    console.log("Email ID = "+$scope.Email);
	    console.log("Birth Date = "+$scope.Date);
	    console.log("Gender = "+$scope.Gender);
	    console.log("Address = "+$scope.Address);
	    console.log("Pincode = "+$scope.Pincode);
	    console.log("\n\n");
	};
}); 
