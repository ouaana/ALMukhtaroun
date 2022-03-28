const wrapclass =document.querySelector(".wrapclasses")
const list4 =document.querySelector(".list4")
const list3 =document.querySelector(".list3")
const list2 =document.querySelector(".list2")
const list5 =document.querySelector(".list5")
const list =document.querySelectorAll(".list")
const list1 =document.querySelector(".list1")
const list2bac= "url(https://scontent.frba4-2.fna.fbcdn.net/v/t1.6435-9/208023207_10158532357389426_8418757265650632522_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8631f5&_nc_eui2=AeGvWYyLQFRfZqiIUX7KsYKs-b9U3RFAyf35v1TdEUDJ_ZbcfuyVXQJMxulWSaP9MpxVgZGTTgsqB8fgCB-MoBj_&_nc_ohc=Xlbrbg94x3IAX_YX594&_nc_ht=scontent.frba4-2.fna&oh=00_AT-QfP_276a0kdLh-c2Mk6oY0H3RKe6m622GXtOkevc6zQ&oe=6260914C)";
const upsidelist =document.querySelector(".upside_list4")
const title1=document.querySelector(".title1")
const tide1= document.querySelector(".tide1")
const box1 =document.querySelector(".boxn1")
const box2 =document.querySelector(".boxn2")
const box3 =document.querySelector(".boxn3")
///box hovering style
box1.addEventListener("mouseover",(e)=>{
    box1.classList.add("active-box")
    box2.classList.remove("active-box")
    
});
box1.addEventListener("mouseout",(e)=>{
    box1.classList.remove("active-box")
    box2.classList.add("active-box")
});
box3.addEventListener("mouseover",(e)=>{
    box3.classList.add("active-box")
    box2.classList.remove("active-box")
    
});
box3.addEventListener("mouseout",(e)=>{
    box3.classList.remove("active-box")
    box2.classList.add("active-box")
});

//list1
//list2
list1.addEventListener("mouseover",()=>{
    console.log("clickedd")
    wrapclass.style.background="purple"

    title1.innerText="مكتبة آراجالوري"
    tide1.innerText="الكالري العربي الأكبر"
    wrapclass.style.transition="all ease-in-out 0.2s"
    wrapclass.style.backgroundImage="url(https://scontent.frba4-2.fna.fbcdn.net/v/t1.6435-9/208023207_10158532357389426_8418757265650632522_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8631f5&_nc_eui2=AeGvWYyLQFRfZqiIUX7KsYKs-b9U3RFAyf35v1TdEUDJ_ZbcfuyVXQJMxulWSaP9MpxVgZGTTgsqB8fgCB-MoBj_&_nc_ohc=Xlbrbg94x3IAX_YX594&_nc_ht=scontent.frba4-2.fna&oh=00_AT-QfP_276a0kdLh-c2Mk6oY0H3RKe6m622GXtOkevc6zQ&oe=6260914C)";
    wrapclass.style.backgrounsRepeat="no-repeat"
})
list2.addEventListener("mouseover",()=>{
    console.log("clickedd")
    wrapclass.style.background="purple"
    title1.innerText="مجمع آراساينس"
    tide1.innerText="نقدم لك العلوم بأبسط الصور"
    
    wrapclass.style.transition="all ease-in-out 0.2s"
    wrapclass.style.backgroundImage="url(https://scontent.frba4-1.fna.fbcdn.net/v/t1.6435-9/206600778_10158527507409426_1783793828801875136_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8631f5&_nc_eui2=AeHBIDUf5392d5avKVAVJEjsi2uwj3LiTTGLa7CPcuJNMeBk3G6FY1j9bm7zVBilauBixavSQ8nvwWY0VIyZCGp7&_nc_ohc=ELf-i6yRs2IAX_NRuZ4&_nc_ht=scontent.frba4-1.fna&oh=00_AT_di8FklxfVRD4eAz1Sy7kh0HaZarbCrQUNDSJE0g9Uqg&oe=62606907)";
    wrapclass.style.backgrounsRepeat="no-repeat"
})
//list3
list3.addEventListener("mouseover",()=>{
    console.log("clickedd")
    wrapclass.style.background="purple"
    
    tide1.innerText="تعلم ما تريد من الألف إلى الياء"
    title1.innerText="موسوعة آراكورس"
    wrapclass.style.transition="all ease-in-out 0.2s"
    wrapclass.style.backgroundImage="url(https://scontent.frba4-2.fna.fbcdn.net/v/t1.6435-9/209509616_10158535642749426_6439776323221484254_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8631f5&_nc_eui2=AeFWmDtZo1CR0qkd_mspcT0d2pFQ6ZG-5P3akVDpkb7k_X_TIu4Qg0mk8kzYRl33_FWFbgrM4enOgTKlmKPCR429&_nc_ohc=jCjrPmglLc4AX_bREOy&_nc_ht=scontent.frba4-2.fna&oh=00_AT8eSJPykCunwQO9A5zCevXDvvlTLgXotuWwgDbvFY3edg&oe=626113C1)";
    wrapclass.style.backgrounsRepeat="no-repeat"
})
//list4
list4.addEventListener("mouseover",()=>{
    console.log("clickedd")
    wrapclass.style.background="purple"
    
    tide1.innerText="أناملنا تصنع الفن"
    title1.innerText="مجمع آراميد"
    wrapclass.style.transition="all ease-in-out 0.2s"
    wrapclass.style.backgroundImage="url(https://scontent.frba4-2.fna.fbcdn.net/v/t1.6435-9/206992999_10158535587204426_4827432706483506000_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-5&_nc_sid=8631f5&_nc_eui2=AeGlH6Hw1kkEuyuWOPybr6KD0baTrX0_96HRtpOtfT_3oXyQMh9HpUFqh7vhwWMKApNBhchxwlmYM5uzphha99RG&_nc_ohc=I8QV2R26pK0AX9lz4jm&_nc_ht=scontent.frba4-2.fna&oh=00_AT_S8UWMRFShDKwY0k_Jl28ySJUy_Y1zI1sXeEVoMicKWA&oe=625F30AD)";
    wrapclass.style.backgrounsRepeat="no-repeat"
})
//list5
list5.addEventListener("mouseover",()=>{
    console.log("clickedd")
    wrapclass.style.background="purple"
    title1.innerText="خدمة القرآن الكريم"
    tide1.innerText="تلاوات عذبة لكتاب الله"
    
    wrapclass.style.transition="all ease-in-out 0.2s"
    wrapclass.style.backgroundImage="url(https://scontent.frba4-2.fna.fbcdn.net/v/t39.30808-6/269628416_10158838963794426_3159668872548618197_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-5&_nc_sid=8631f5&_nc_eui2=AeEEvQP6sZAlViqLDz_ZtbMbFfO4qcT-DiwV87ipxP4OLFfzBc0aXYF5PsE0TU7IFxkb9FPCHOmzrtL9gPtk-fPW&_nc_ohc=1iFZ41PRrfoAX9S-W9V&_nc_zt=23&_nc_ht=scontent.frba4-2.fna&oh=00_AT_lDlZZh9o6YHV7Fkga4LXhhH_5p1pIHL4Tec__gZhjLw&oe=623F3A59";
    wrapclass.style.backgrounsRepeat="no-repeat"
})

list1.forEach(addEventListener("mouseout",()=>{
     title1.innerText="موسوعة آرابيدي"
     tide1.innerText="نكتب كل شيئ بأقلام موسوعية حرة"
     
     wrapclass.style.backgroundImage="url(https://scontent.frba4-2.fna.fbcdn.net/v/t1.6435-9/199391629_10158504899494426_1407856927489155889_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8631f5&_nc_eui2=AeG1JLti59O8GxtYmBcduyZUJ6frfULurrUnp-t9Qu6utXHkjRDbaCJrHwiGJsmAkn5mqBhWM3RtFn2bw2k7bYqs&_nc_ohc=a0O0yUyNBH8AX_NFmqI&_nc_ht=scontent.frba4-2.fna&oh=00_AT9-7v9_iUMBWA58HdAY84Ev9m1eSmnk06Nkz5s2j89Kpg&oe=625FA6DF)";
     
 }))
////change title

document.addEventListener("blur",()=>{
    document.title="new notification";
})


///sidebar togle


const toggled= document.querySelector("#toggle-side")
const searchbar = document.querySelector(".search-bar")

toggled.addEventListener("click",()=>{
    console.log("hello")
})


body.addEventListener("scroll",(e)=>{
    console.log(e)
})
//remove loading page


function loaded() {
    setInterval(() => {
          const loading =document.querySelector("#loading")
          loading.style.display="none"
          window.scrollX="0"
      }, 5000);
      
  }
 