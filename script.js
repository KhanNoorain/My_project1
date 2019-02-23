var database=[
	{
	name: "John",
	password: "haha",
	},
	{
	name: "William",
	password: "haha",
	},
	{
	name: "Krish",
	password: "haha",
	},
];
 const obj={
 	name: "Noorain",
 	class: "Btech",
 }
var newsfeed=[
	{
		username: "ooda",
		timeline:"i just wanna code",
	},
	{
		username: "Kenty",
		timeline:"i just wanna sleep",
	}
	];
var usernamePrompt=prompt("Username:");
var passwordPrompt=prompt("password:");

function signIn(user, pwd)
{var x=false;
	for(var i=0;i<database.length;i++){
	if(user=== database[i].name &&
		pwd=== database[i].password)
	{
		console.log(newsfeed);
		x=true;
	}
	}if(x==false){

		alert("Sorry! Wrong name and password");
	
	}
}
signIn(usernamePrompt, passwordPrompt);
