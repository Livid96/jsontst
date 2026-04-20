```javascript
let data;

fetch("data.json")
.then(res=>res.json())
.then(json=>{
data=json;
buildSidebar(data.chapters);
});

function buildSidebar(chapters){

const sidebar=document.getElementById("sidebar");

chapters.forEach((chapter,i)=>{

const box=document.createElement("div");
box.className="chapter";

const title=document.createElement("div");
title.className="chapter-title";
title.innerText=chapter.title;

const lessons=document.createElement("div");
lessons.style.display="none";

title.onclick=()=>{

lessons.style.display=
lessons.style.display==="none" ? "block":"none";

};

chapter.lessons.forEach(lesson=>{

const item=document.createElement("div");
item.className="lesson";
item.innerText=lesson.title;

item.onclick=()=>playVideo(lesson,item);

lessons.appendChild(item);

});

box.appendChild(title);
box.appendChild(lessons);
sidebar.appendChild(box);

});

}

function playVideo(lesson,el){

document.getElementById("empty").style.display="none";
document.getElementById("playerBox").style.display="block";

document.getElementById("videoTitle").innerText=lesson.title;

document.getElementById("player").src=
`https://www.youtube.com/embed/${lesson.video}?autoplay=1`;

document.querySelectorAll(".lesson").forEach(l=>{
l.classList.remove("active")
});

el.classList.add("active");

}

document.getElementById("search").addEventListener("input",e=>{

const text=e.target.value.toLowerCase();

document.querySelectorAll(".lesson").forEach(l=>{

l.style.display=l.innerText.toLowerCase().includes(text)
? "block"
: "none";

});

});
```
