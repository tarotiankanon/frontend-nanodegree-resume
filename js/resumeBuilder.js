// JSONs
var bio = {
  "name": "Taro Tiankanon",
  "role": "Front-End Web Developer",
  "contacts": {
    "mobile": "(66)83-007-4485",
    "email": "chondanai.t@gmail.com",
    "github": "tarotiankanon",
    "twitter": "@tarotiankanon",
    "location": "Bangkok, Thailand"
  },
  "welcomeMessage": "I want to be an alpha in everything",
  "skills": ["HTML(5)", "CSS(3)", "JS", "jQuery", "PSD", "AI"],
  "biopic": "https://scontent-sin1-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/12006368_10207618389757112_395727936218467907_n.jpg?oh=e7e22bbd4ee4e1c0804d15f9fbabd8d8&oe=56AE8750"
}

var work = {
  "jobs": [
    {
      "employer": "Siam Filter Products LTD., PART",
      "title": "Product Manager",
      "location": "Bangkok, Thailand",
      "dates": "July 2015 - Present",
      "description": "Siam Filter Products is Thailand's largest and most advanced manufacturer of filters for Automobiles, Heavy Duty Trucks, Forklifts, Motorcycles, Marines and Industrial Equipments."
    },
    {
      "employer": "Hokkaido University",
      "title": "Research Assitant",
      "location" : "Sapporo, Japan",
      "dates": "May 2013 - August 2013",
      "description": "Synthesis and Characterization of Sn-Cu Bimetallic nanoparticles. Two manuscripts submitted."
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Taradfilter.com",
      "dates": "June 2015 - Present",
      "description": "A self built Automotive's filter E-Commerce Site (B2B, B2C)",
      "images": "http://www.taradfilter.com/wp-content/uploads/2015/10/TARADFILTER-CART.png"
    },
    {
      "title": "Google Homepage Mockup with Bootstrap",
      "dates": "October 2015",
      "description": "Mock up a Google Homepage ASAP",
      "images": "https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/93616/area14mp/image-20150902-6700-t2axrz.jpg"
    }
  ]
}

var education = {
  "schools": [
    {
      "name": "Chulalongkorn University",
      "location": "Bangkok, Thailand",
      "degree": "Bachelor",
      "majors": "Nanoengineering",
      "dates": 2014,
      "url": "http://www.chula.ac.th"
    },
    {
      "name": "Patumwan Demonstration School",
      "location": "Patumwan, Bangkok, Thailand",
      "degree": "High School",
      "majors": "Math-Sci",
      "dates": 2010,
      "url": "http://www.patumwan.ac.th"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2015,
      "url": "http://www.udacity.com"
    },
    {
      "title": "Ruby on Rails Tutorial (3rd Ed.)",
      "school": "Michael Hartl",
      "dates": 2015,
      "url": "http://www.railstutorial.org"
    }
  ]
}

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  
  $("#header").prepend(formattedRole, formattedName);
  $("#header").append(formattedBioPic, formattedWelcomeMsg);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkills);
    }
  }

  $("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
  $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
};

work.display = function() { 
  for (job in work.jobs) {
    
    $("#workExperience").append(HTMLworkStart);

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);
  }
};

projects.display = function() {  
  for (project in projects.projects) {

    $("#projects").append(HTMLprojectStart);
    
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);
    
    var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDate);
    
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);
    
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(formattedProjectImage);
  }
};

education.displaySchools = function() {
  for (school in education.schools) {
    
    $("#education").append(HTMLschoolStart);
    
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
    
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedSchoolMajor);
  }
};

education.displayOnlineClasses = function() {
  
  $(".education-entry:last").append(HTMLonlineClasses);
  
  for (onlineCourse in education.onlineCourses) {
    
    $("#education").append(HTMLschoolStart);
    
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace("#", education.onlineCourses[onlineCourse].url);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
    
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
    $(".education-entry:last").append(formattedOnlineDates);
    
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url).replace("#", education.onlineCourses[onlineCourse].url);
    $(".education-entry:last").append(formattedOnlineURL);
  }
};

bio.display();
work.display();
projects.display();
education.displaySchools();
education.displayOnlineClasses();

function locationizer(work_obj) {
    var locations = [];
    
    for (var job in work_obj.jobs) {
        locations.push(work_obj.jobs[job].location);
    }
    
    return locations;
}

$("#mapDiv").append(googleMap);



