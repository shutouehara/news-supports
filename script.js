let dt = new Date();
let year = dt.getFullYear();
let month = dt.getMonth()+1;
let date = dt.getDate();
let today = year + "/" + month + "/" + date;

let taTitle = '';
let youtubeTitle = '';
let youtubeLead = '';

function clickBtn1() {
  const ta1 = document.form1.text1.value;
  let array = ta1.split(/\n/);
  taTitle = array[0];
  let youtubeTitle = 'RBC NEWS「' + taTitle + '」' + today;
  let taLead1 = '';

  for (let i = 5; i < array.length; i++){
    taLead1 += array[i];
    if(i !== array.length-1){
      taLead1 += '<br>';
    }
  }

  document.getElementById("title1").textContent = youtubeTitle;
  document.getElementById("lead1").innerHTML = taLead1;

  document.getElementById("showAtitle").textContent = taTitle;
  document.getElementById("showAlead").innerHTML = taLead1;
  document.getElementById("showAyoutube").textContent = youtubeTitle;
}

function clickBtnAtitle() {
  let copy1 = document.getElementById("copy1title");
  let youtubeTitle = document.getElementById("title1").textContent;
  navigator.clipboard.writeText(youtubeTitle);
  copy1.innerHTML = 'copied!'
  //setTimeout(() => copy1.innerHTML = 'copy', 1000)
}
function clickBtnAlead() {
  let copy2 = document.getElementById("copy1lead");
  let youtubeLead = document.getElementById("lead1").innerText;
  navigator.clipboard.writeText(youtubeLead);
  copy2.innerHTML = 'copied!'
}

function clickBtn2() {
  const ta2 = document.form2.text2.value;
  let array = ta2.split(/\n/);
  taTitle = array[0];
  let youtubeTitle = 'RBC NEWS「' + taTitle + '」' + today;
  let taLead2 = '';

  for (let i = 5; i < array.length; i++){
    taLead2 += array[i];
    if(i !== array.length-1){
      taLead2 += '<br>';
    }
  }

  document.getElementById("title2").textContent = youtubeTitle;
  document.getElementById("lead2").innerHTML = taLead2;

  document.getElementById("showBtitle").textContent = taTitle;
  document.getElementById("showBlead").innerHTML = taLead2;
  document.getElementById("showByoutube").textContent = youtubeTitle;
}

function clickBtnBtitle() {
  let copy1 = document.getElementById("copy2title");
  let youtubeTitle = document.getElementById("title2").textContent;
  navigator.clipboard.writeText(youtubeTitle);
  copy1.innerHTML = 'copied!'
}
function clickBtnBlead() {
  let copy2 = document.getElementById("copy2lead");
  let youtubeLead = document.getElementById("lead2").innerText;
  navigator.clipboard.writeText(youtubeLead);
  copy2.innerHTML = 'copied!'
}

function clickBtn3() {
  const ta3 = document.form3.text3.value;
  let array = ta3.split(/\n/);
  taTitle = array[0];
  let youtubeTitle = 'RBC NEWS「' + taTitle + '」' + today;
  let taLead3 = '';

  for (let i = 5; i < array.length; i++){
    taLead3 += array[i];
    if(i !== array.length-1){
      taLead3 += '<br>';
    }
  }

  document.getElementById("title3").textContent = youtubeTitle;
  document.getElementById("lead3").innerHTML = taLead3;

  document.getElementById("showCtitle").textContent = taTitle;
  document.getElementById("showClead").innerHTML = taLead3;
  document.getElementById("showCyoutube").textContent = youtubeTitle;
}

function clickBtnCtitle() {
  let copy1 = document.getElementById("copy3title");
  let youtubeTitle = document.getElementById("title3").textContent;
  navigator.clipboard.writeText(youtubeTitle);
  copy1.innerHTML = 'copied!'
}
function clickBtnClead() {
  let copy2 = document.getElementById("copy3lead");
  let youtubeLead = document.getElementById("lead3").innerText;
  navigator.clipboard.writeText(youtubeLead);
  copy2.innerHTML = 'copied!'
}

function clickBtn4() {
  const ta4 = document.form4.text4.value;
  let array = ta4.split(/\n/);
  taTitle = array[0];
  let youtubeTitle = 'RBC NEWS「' + taTitle + '」' + today;
  let taLead4 = '';

  for (let i = 5; i < array.length; i++){
    taLead4 += array[i];
    if(i !== array.length-1){
      taLead4 += '<br>';
    }
  }

  document.getElementById("title4").textContent = youtubeTitle;
  document.getElementById("lead4").innerHTML = taLead4;

  document.getElementById("showDtitle").textContent = taTitle;
  document.getElementById("showDlead").innerHTML = taLead4;
  document.getElementById("showDyoutube").textContent = youtubeTitle;
}

function clickBtnDtitle() {
  let copy1 = document.getElementById("copy4title");
  let youtubeTitle = document.getElementById("title4").textContent;
  navigator.clipboard.writeText(youtubeTitle);
  copy1.innerHTML = 'copied!'
}
function clickBtnDlead() {
  let copy2 = document.getElementById("copy4lead");
  let youtubeLead = document.getElementById("lead4").innerText;
  navigator.clipboard.writeText(youtubeLead);
  copy2.innerHTML = 'copied!'
}

function clickBtn5() {
  const ta5 = document.form5.text5.value;
  let array = ta5.split(/\n/);
  taTitle = array[0];
  let youtubeTitle = 'RBC NEWS「' + taTitle + '」' + today;
  let taLead5 = '';

  for (let i = 5; i < array.length; i++){
    taLead5 += array[i];
    if(i !== array.length-1){
      taLead5 += '<br>';
    }
  }

  document.getElementById("title5").textContent = youtubeTitle;
  document.getElementById("lead5").innerHTML = taLead5;

  document.getElementById("showEtitle").textContent = taTitle;
  document.getElementById("showElead").innerHTML = taLead5;
  document.getElementById("showEyoutube").textContent = youtubeTitle;
}

function clickBtnEtitle() {
  let copy1 = document.getElementById("copy5title");
  let youtubeTitle = document.getElementById("title5").textContent;
  navigator.clipboard.writeText(youtubeTitle);
  copy1.innerHTML = 'copied!'
}
function clickBtnElead() {
  let copy2 = document.getElementById("copy5lead");
  let youtubeLead = document.getElementById("lead5").innerText;
  navigator.clipboard.writeText(youtubeLead);
  copy2.innerHTML = 'copied!'
}

function clickBtn6() {
  const ta6 = document.form6.text6.value;
  let array = ta6.split(/\n/);
  taTitle = array[0];
  let youtubeTitle = 'RBC NEWS「' + taTitle + '」' + today;
  let taLead6 = '';

  for (let i = 5; i < array.length; i++){
    taLead6 += array[i];
    if(i !== array.length-1){
      taLead6 += '<br>';
    }
  }

  document.getElementById("title6").textContent = youtubeTitle;
  document.getElementById("lead6").innerHTML = taLead6;

  document.getElementById("showFtitle").textContent = taTitle;
  document.getElementById("showFlead").innerHTML = taLead6;
  document.getElementById("showFyoutube").textContent = youtubeTitle;
}

function clickBtnFtitle() {
  let copy1 = document.getElementById("copy6title");
  let youtubeTitle = document.getElementById("title6").textContent;
  navigator.clipboard.writeText(youtubeTitle);
  copy1.innerHTML = 'copied!'
}
function clickBtnFlead() {
  let copy2 = document.getElementById("copy6lead");
  let youtubeLead = document.getElementById("lead6").innerText;
  navigator.clipboard.writeText(youtubeLead);
  copy2.innerHTML = 'copied!'
}

function clickBtn7() {
  const ta7 = document.form7.text7.value;
  let array = ta7.split(/\n/);
  taTitle = array[0];
  let youtubeTitle = 'RBC NEWS「' + taTitle + '」' + today;
  let taLead7 = '';

  for (let i = 5; i < array.length; i++){
    taLead7 += array[i];
    if(i !== array.length-1){
      taLead7 += '<br>';
    }
  }

  document.getElementById("title7").textContent = youtubeTitle;
  document.getElementById("lead7").innerHTML = taLead7;

  document.getElementById("showGtitle").textContent = taTitle;
  document.getElementById("showGlead").innerHTML = taLead7;
  document.getElementById("showGyoutube").textContent = youtubeTitle;
}

function clickBtnGtitle() {
  let copy1 = document.getElementById("copy7title");
  let youtubeTitle = document.getElementById("title7").textContent;
  navigator.clipboard.writeText(youtubeTitle);
  copy1.innerHTML = 'copied!'
}
function clickBtnGlead() {
  let copy2 = document.getElementById("copy7lead");
  let youtubeLead = document.getElementById("lead7").innerText;
  navigator.clipboard.writeText(youtubeLead);
  copy2.innerHTML = 'copied!'
}

function clickBtn8() {
  const ta8 = document.form8.text8.value;
  let array = ta8.split(/\n/);
  taTitle = array[0];
  let youtubeTitle = 'RBC NEWS「' + taTitle + '」' + today;
  let taLead8 = '';

  for (let i = 5; i < array.length; i++){
    taLead8 += array[i];
    if(i !== array.length-1){
      taLead8 += '<br>';
    }
  }

  document.getElementById("title8").textContent = youtubeTitle;
  document.getElementById("lead8").innerHTML = taLead8;

  document.getElementById("showHtitle").textContent = taTitle;
  document.getElementById("showHlead").innerHTML = taLead8;
  document.getElementById("showHyoutube").textContent = youtubeTitle;
}

function clickBtnHtitle() {
  let copy1 = document.getElementById("copy8title");
  let youtubeTitle = document.getElementById("title8").textContent;
  navigator.clipboard.writeText(youtubeTitle);
  copy1.innerHTML = 'copied!'
}
function clickBtnHlead() {
  let copy2 = document.getElementById("copy8lead");
  let youtubeLead = document.getElementById("lead8").innerText;
  navigator.clipboard.writeText(youtubeLead);
  copy2.innerHTML = 'copied!'
}

function clickBtn9() {
  const ta9 = document.form9.text9.value;
  let array = ta9.split(/\n/);
  taTitle = array[0];
  let youtubeTitle = 'RBC NEWS「' + taTitle + '」' + today;
  let taLead9 = '';

  for (let i = 5; i < array.length; i++){
    taLead9 += array[i];
    if(i !== array.length-1){
      taLead9 += '<br>';
    }
  }

  document.getElementById("title9").textContent = youtubeTitle;
  document.getElementById("lead9").innerHTML = taLead9;

  document.getElementById("showItitle").textContent = taTitle;
  document.getElementById("showIlead").innerHTML = taLead9;
  document.getElementById("showIyoutube").textContent = youtubeTitle;
}

function clickBtnItitle() {
  let copy1 = document.getElementById("copy9title");
  let youtubeTitle = document.getElementById("title9").textContent;
  navigator.clipboard.writeText(youtubeTitle);
  copy1.innerHTML = 'copied!'
}
function clickBtnIlead() {
  let copy2 = document.getElementById("copy9lead");
  let youtubeLead = document.getElementById("lead9").innerText;
  navigator.clipboard.writeText(youtubeLead);
  copy2.innerHTML = 'copied!'
}

function clickBtn10() {
  const ta10 = document.form10.text10.value;
  let array = ta10.split(/\n/);
  taTitle = array[0];
  let youtubeTitle = 'RBC NEWS「' + taTitle + '」' + today;
  let taLead0 = '';

  for (let i = 5; i < array.length; i++){
    taLead0 += array[i];
    if(i !== array.length-1){
      taLead0 += '<br>';
    }
  }

  document.getElementById("title10").textContent = youtubeTitle;
  document.getElementById("lead10").innerHTML = taLead0;

  document.getElementById("showJtitle").textContent = taTitle;
  document.getElementById("showJlead").innerHTML = taLead0;
  document.getElementById("showJyoutube").textContent = youtubeTitle;
}

function clickBtnJtitle() {
  let copy1 = document.getElementById("copy10title");
  let youtubeTitle = document.getElementById("title10").textContent;
  navigator.clipboard.writeText(youtubeTitle);
  copy1.innerHTML = 'copied!'
}
function clickBtnJlead() {
  let copy2 = document.getElementById("copy10lead");
  let youtubeLead = document.getElementById("lead10").innerText;
  navigator.clipboard.writeText(youtubeLead);
  copy2.innerHTML = 'copied!'
}

function clickBtnAll() {
  let copyAll = document.getElementById("copyAll");
  let all = document.getElementById("all").innerText;
  navigator.clipboard.writeText(all);
  copyAll.innerHTML = 'all copied!'
}