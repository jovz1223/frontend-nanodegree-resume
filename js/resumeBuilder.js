//$("#main").append(["Marco"]);

// var email = "jovz1223@gmail.com"

// var newEmail = email.replace("gmail","udacity");

// console.log(email);
// console.log(newEmail);

// var awesomeThoughts = "I am Marco and I am AWESOME."
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
// console.log(funThoughts);

// $("#main").append(funThoughts)


// var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer")
// var formattedName = HTMLheaderName.replace("%data%", "Marco");
// $("#header").prepend(formattedName);
// $("#header").prepend(formattedRole);


// var skills = ["awesomeness", "programming", "teaching", "JS"];
// $("#main").append(skills);
// $("#main").append(skills[0]);

var bio = {
    "name" : "Marco",
    "role": "Web Developer",
    "contacts": {
        "mobile": "444-444-4444",
        "email": "marco@example.com",
        "github": "jovz1223",
        "twitter": "@jovz",
        "location": "Miami"
    },
    "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
    "skills": [
        "awesomeness", "hacking", "being better than peter", "saving the universe"
    ],
    "bioPic": "images/Ninjacat.jpg"
};

var work = {};
work.position = "Jr Web Developer";
work.employer = "Google";
work.years = "0.5";

var education = {};
education["name"] = "University of Miami";
education["years"] = "2007-2011";
education["city"] = "Coral Gables, FL";

// var education = {

//  "schools": [
// { "name": "University of Miami",
//   "city": "Coral Gables, FL",
//   "degree": "BA",
//   "major": ["Finance", "Accounting"]
// },
// ]
// }


$("#main").append(work["position"]);
$("#main").append(education.name);

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);



