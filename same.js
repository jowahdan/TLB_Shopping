

// localStorage.setItem("background color","black")
// localStorage.getItem("background color")
// // document.body.style.backgroundColor = localStorage.getItem("background color")
// function kard() {
    let f = document.getElementById("dar")
   
   
//     if (localStorage.getItem("background color")=="black") {
//         f.innerHTML="white"
//         localStorage.setItem("background color","whitesmoke")
        
        
//     }
//     else{
//         f.innerHTML="dark"
//         localStorage.setItem("background color","black")
      
//     }
// }
// if (localStorage.getItem("background color") === "black") {
//     document.body.style.backgroundColor = "red";
// } else {
//     document.body.style.backgroundColor = "white";
// }
let fm = document.getElementById("sho")
let fmo = document.getElementById("book")
let sm = document.getElementById("boo")
let smo = document.getElementById("bo")
let fdok = document.getElementById("fd")
if (localStorage.getItem("background color") === "black") {
    document.body.style.backgroundColor = "black";
    f.innerHTML="light"
    fm.style.color="white"
    fmo.style.color="white"
    sm.style.color="white"
    smo.style.color="white"
    fdok.style.color="white"
  } else {
    document.body.style.backgroundColor = "whitesmoke";
    f.innerHTML="dark"
    fm.style.color="black"
    fmo.style.color="black"
    sm.style.color="black"
    smo.style.color="black"
    fdok.style.color="black"
  }

  function kard() {
    let f = document.getElementById("dar")
    let fm = document.getElementById("sho")
    let fmo = document.getElementById("book")
    let sm = document.getElementById("boo")
    let smo = document.getElementById("bo")
    let fdok = document.getElementById("fd")
    if (document.body.style.backgroundColor === "whitesmoke") {
      localStorage.setItem("background color", "black");
      document.body.style.backgroundColor = "black";
      f.innerHTML="light"
      fm.style.color="white"
      fmo.style.color="white"
      sm.style.color="white"
      smo.style.color="white"
      fdok.style.color="white"
    } else {
      localStorage.setItem("background color", "whitesmoke");
      document.body.style.backgroundColor = "whitesmoke";
      f.innerHTML="dark"
      fm.style.color="black"
      fmo.style.color="black"
      sm.style.color="black"
      smo.style.color="black"
      fdok.style.color="black"
    }
  }
  

  function lamg() {
    let ish = document.getElementById("arab");
    let rad = document.getElementById("dar");
    let ni = document.getElementById("in");
    let pu = document.getElementById("up");
    let siw = document.getElementById("wis");
    let opp = document.getElementById("pop");
    let rs = document.getElementById("sr");
    let no = document.getElementById("on");
    let rb = document.getElementById("br");
    // let srf = document.getElementById("srm");
    // let on = document.getElementById("onm");
    // let br = document.getElementById("brm");
    let eet = document.getElementById("tee");
    let ft = document.getElementById("tf");
    let eft = document.getElementById("tfe");
    let seb = document.getElementById("bes");
    let sb = document.getElementById("bs");
    let osb = document.getElementById("bso");
    let tsal = document.getElementById("last");
    let tesal = document.getElementById("laset");
    let otesal = document.getElementById("laseto");
    let los = document.getElementById("sol");
    let loc = document.getElementById("col");
    let shop = document.getElementById("posh");
    let eloc = document.getElementById("cole");
    let aloc = document.getElementById("cola");
    let aeloc = document.getElementById("colea");
    let naeloc = document.getElementById("colean");
    let sez = document.getElementById("zes");
    let molc = document.getElementById("colm");
    let amloc = document.getElementById("colma");
    let emloc = document.getElementById("colme");
    let aemloc = document.getElementById("colmea");
    let lb = document.getElementById("bl");
    let olb = document.getElementById("blo");
    let ypoc = document.getElementById("copy");
    // let tat = document.getElementById("tat");
    let titam = document.getElementById("det");
    let tolb = document.getElementById("detf");
    let titim = document.getElementById("deto");
    let tita = document.getElementById("de");
    let els = document.getElementById("dete")
    let elsm = document.getElementById("detem")
    let islam = document.getElementById("detom")
    let ilsm = document.getElementById("deter")
    let ilasm = document.getElementById("detes")
    let mok = document.getElementById("detesm")
    let moka = document.getElementById("detefi")
    let isalm = document.getElementById("detor")
    let tra = document.getElementById("ha")
    
    
    if (ish.innerHTML === "العربيه") {
      localStorage.setItem("lang", "arab");
      ish.innerHTML = "english";
      
      tra.innerHTML="اضف الي العربه"
      tranb.innerHTML="اضف الي العربه"
      els.innerHTML="تفاصيل"
      elsm.innerHTML="تفاصيل"
      ilsm.innerHTML="تفاصيل"
      islam.innerHTML="تفاصيل"
      ilasm.innerHTML="تفاصيل"
      isalm.innerHTML="تفاصيل"
      tolb.innerHTML="تفاصيل"
      titam.innerHTML="تفاصيل"
      mok.innerHTML="تفاصيل"
      moka.innerHTML="تفاصيل"
      titim.innerHTML="تفاصيل"
      tita.innerHTML="تفاصيل"
    
     
      rad.innerHTML = "مظلم";
      ni.innerHTML = "تسجيل الدخول";
      pu.innerHTML = "انشاء حساب";
      siw.innerHTML = "نتمنى لك عملية تسوق أسهل وأكثر توفيرًا للوقت";
      opp.innerHTML = "الشائع مؤخرا";
      rs.innerHTML = "تيشرت";
      no.innerHTML = "تيشرت";
      rb.innerHTML = "تيشرت";
      srf.innerHTML = "تيشرت";
      on.innerHTML = "تيشرت";
      br.innerHTML = "تيشرت";
      eet.innerHTML = "قميص";
      eft.innerHTML = "قميص";
      ft.innerHTML = "قميص";
      seb.innerHTML = "بنطلون";
      sb.innerHTML = "بنطلون";
      osb.innerHTML = "بنطلون";
      tsal.innerHTML = "كوتشي";
      tesal.innerHTML = "كوتشي";
      otesal.innerHTML = "كوتشي";
      los.innerHTML = "أزياء الرجال";
      loc.innerHTML = "يقع العميل في قلب نموذج أعمالنا الفريد الذي يتضمن التصميم";
      shop.innerHTML = "التسوق";
      eloc.innerHTML = "محل الملابس";
      aloc.innerHTML = "أحذية رائجة";
      aeloc.innerHTML = "اكسسوارات";
      naeloc.innerHTML = "أُوكَازيُون";
      sez.innerHTML = "التسوق";
      molc.innerHTML = "تواصل معنا";
      amloc.innerHTML = "طرق الدفع";
      emloc.innerHTML = "توصيل";
      aemloc.innerHTML = "العودة والتبادلات";
      lb.innerHTML = "خطاب جديد";
      olb.innerHTML ="كن أول من يعرف عن الوافدين الجدد. مناظر.كتب ، تخفيضات ، عروض ترويجية";
      ypoc.innerHTML = "حقوق النشر @ 2023 جميع الحقوق محفوظة | TLB";
      // tat.innerHTML = "تيشرتات";
      
      // titam.innerHTML = "قمصان";
    } else {
      localStorage.setItem("lang", "eng");
      ish.innerHTML = "العربيه";
       rad.innerHTML = "dark";
      ni.innerHTML = "sign in";
      pu.innerHTML = "sign up";
      siw.innerHTML = "We wish you an easier and more time-saving shopping process";
      opp.innerHTML = "popular recently";
      rs.innerHTML = "T-shirt";
      no.innerHTML = "T-shirt";
      rb.innerHTML = "T-shirt";
      eet.innerHTML = "shirt";
      eft.innerHTML = "shirt";
      ft.innerHTML = "shirt";
      seb.innerHTML = "pants";
      sb.innerHTML = "pants";
      osb.innerHTML = "pants";
      tsal.innerHTML = "shoes";
      tesal.innerHTML = "shoes";
      otesal.innerHTML = "shoes";
      los.innerHTML = "Male fashion";
      loc.innerHTML = "The customer is at the heart of our unique business model which includes design";
      shop.innerHTML = "SHOPPING";
      eloc.innerHTML = "Clothing store";
      aloc.innerHTML = "Trending shoes";
      aeloc.innerHTML = "Accessories";
      naeloc.innerHTML = "Sale";
      sez.innerHTML = "SHOPPING";
      molc.innerHTML = "Contact Us";
      amloc.innerHTML = "Payment Methods";
      emloc.innerHTML = "Delivery";
      aemloc.innerHTML = "Return&Exchanges";
      lb.innerHTML = "NEWLETTER";
      olb.innerHTML =
        "Be the first to know about new arrivals.look.books,sales,promos!";
      ypoc.innerHTML = "Copyright @ 2023 ALL rights reserved|TLB";
     
    }
  }
  
 let ish = document.getElementById("arab");

      if (localStorage.getItem("lang") === "eng") {
        ish.innerHTML = "العربية";
      } else {
        ish.innerHTML = "English";
      }


