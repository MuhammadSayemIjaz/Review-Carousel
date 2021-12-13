
const profiles = [
    {
     id: 1,
     name: "Susan Smith",
     job: "Web Developer",
     img:  "images/bgimg-01.jpeg",
     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas voluptates fugiat sed error, eos quaerat saepe eligendi, unde veritatis, sint possimus ad? Facilis, odit temporibus reprehenderit nulla doloribus officia nostrum.",
    },
    {
    id: 2,
    name: "John Doe",
    job: "Back End Developer",
    img: "images/Bg-image-03.jpg",
    desc:"Consectetur adipisicing elit. Voluptas voluptates fugiat sed error, eos quaerat saepe eligendi, unde veritatis, sint possimus ad? Facilis, odit temporibus reprehenderit nulla doloribus officia nostrum.",
    },
    {
    id: 3,
     name: "Oliver",
     job: "Front End Developer",
     img:"images/bgimg-01.jpeg",
     desc:"Dolor, sit amet consectetur adipisicing elit. Voluptas voluptates fugiat sed error, eos quaerat saepe eligendi, unde veritatis, sint possimus ad? Facilis, odit temporibus reprehenderit nulla doloribus officia nostrum.",
    },
    {
    id: 4,
     name: "James",
     job: "Web Designer",
     img:"images/Bg-image-03.jpg",
     desc:"Sit amet consectetur adipisicing elit. Voluptas voluptates fugiat sed error, eos quaerat saepe eligendi, unde veritatis, sint possimus ad? Facilis, odit temporibus reprehenderit nulla doloribus officia nostrum.",
    }
];

// Get Values From Webpage

const img = document.getElementById("proImage");
const UserName = document.getElementById("Name"); 
const Profession = document.getElementById("Profession");
const Description = document.getElementById("description");


const ForwardBtn = document.querySelector(".forwardBtn");
const PreviousBtn = document.querySelector(".previousBtn");
const RandomBtn = document.querySelector(".randomBtn");

let CurrentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
   ShowProfiles(CurrentItem); 
});

function ShowProfiles(items) {
    const item = profiles[items];
    img.src = item.img;
    UserName.textContent = item.name;
    Profession.textContent = item.job; 
    Description.textContent = item.desc;
    console.log(item);
};

ForwardBtn.addEventListener("click" , function () {

    CurrentItem++;
    if(CurrentItem > profiles.length -1){

        CurrentItem = 0 ;
    }
    ShowProfiles(CurrentItem);
});
PreviousBtn.addEventListener("click" , function () {

    CurrentItem--;

    if(CurrentItem < 0){

        CurrentItem = profiles.length -1 ;
    }
    ShowProfiles(CurrentItem);
});

RandomBtn.addEventListener("click", function () {
    
    const RandomNumber = Math.floor(Math.random() * 3);
    ShowProfiles(RandomNumber);
    
});