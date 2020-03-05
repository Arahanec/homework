var firstName = prompt('firstname');
var lastName = prompt('lastname');

firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1);


alert('What’s up' + ' '+ firstName + ' ' + lastName); 
