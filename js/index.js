var frame_name = document.getElementById("frame_name");
var frame_address = document.getElementById("frame_address");
var frame_university = document.getElementById("frame_university");
var frame_section = document.getElementById("frame_section");
var frame_name_link_n = document.getElementById("frame_name_link_n");
var frame_address_link_p = document.getElementById("frame_address_link_p");
var frame_address_link_n = document.getElementById("frame_address_link_n");
var frame_university_link_p = document.getElementById("frame_university_link_p");
var frame_university_link_n = document.getElementById("frame_university_link_n");
var frame_section_link_p = document.getElementById("frame_section_link_p");
var frame_section_link_n = document.getElementById("frame_section_link_n");
frame_name_link_n.addEventListener('click',function(){
    frame_address.style.display = "block"
    frame_name.style.display = "none"
    frame_university.style.display = "none"
    frame_section.style.display = "none"
})
frame_address_link_p.addEventListener('click',function(){
    frame_name.style.display = "block"
    frame_address.style.display = "none"
    frame_university.style.display = "none"
    frame_section.style.display = "none"
})

frame_address_link_n.addEventListener('click',function(){
    frame_university.style.display = "block"
    frame_name.style.display = "none"
    frame_address.style.display = "none"
    frame_section.style.display = "none"
})

frame_university_link_p.addEventListener('click',function(){
    frame_address.style.display = "block"
    frame_university.style.display = "none"
    frame_name.style.display = "none"
    frame_section.style.display = "none"
})

frame_university_link_n.addEventListener('click',function(){
    frame_section.style.display = "block"
    frame_address.style.display = "none"
    frame_university.style.display = "none"
    frame_name.style.display = "none"
})

frame_section_link_p.addEventListener('click',function(){
    frame_university.style.display = "block"
    frame_section.style.display = "none"
    frame_address.style.display = "none"
    frame_name.style.display = "none"
})

frame_section_link_n.addEventListener('click',function(){
    frame_name.style.display = "block"
    frame_university.style.display = "none"
    frame_section.style.display = "none"
    frame_address.style.display = "none"
})