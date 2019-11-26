var get1 = document.getElementById("child1");
var get2 = document.getElementById("child2");
var get3 = document.getElementById("child3");
var get4 = document.getElementById("child4");
var get5 = document.getElementById("child5");
var get6 = document.getElementById("child6");
var get7 = document.getElementById("child7");
var get8 = document.getElementById("child8");
var get9 = document.getElementById("child9");
var pa = document.getElementById("father");
var ma = document.getElementById("mother");






get1.addEventListener("click", function() {
    if (get1.parentElement===ma) {
    pa.appendChild(get1);
    get1.classList.add("fade")
    requestAnimationFrame(() => {
        get1.classList.remove("fade")
      })}
      else{
        ma.appendChild(get1);
        get1.classList.add("fade")
        requestAnimationFrame(() => {
            get1.classList.remove("fade")
          })}});

get2.addEventListener("click", function() {
    if (get2.parentElement===ma) {
    pa.appendChild(get2);
    get2.classList.add("fade")
    requestAnimationFrame(() => {
        get2.classList.remove("fade")
      })}
      else{
        ma.appendChild(get2);
        get2.classList.add("fade")
        requestAnimationFrame(() => {
            get2.classList.remove("fade")
          })}});

get3.addEventListener("click", function() {
    if (get3.parentElement===ma) {
    pa.appendChild(get3);
    get3.classList.add("fade")
    requestAnimationFrame(() => {
        get3.classList.remove("fade")
      })}
      else{
        ma.appendChild(get3);
        get3.classList.add("fade")
        requestAnimationFrame(() => {
            get3.classList.remove("fade")
          })}});

get4.addEventListener("click", function() {
    if (get4.parentElement===ma) {
    pa.appendChild(get4);
    get4.classList.add("fade")
    requestAnimationFrame(() => {
        get4.classList.remove("fade")
      })}
      else{
        ma.appendChild(get4);
        get4.classList.add("fade")
        requestAnimationFrame(() => {
            get4.classList.remove("fade")
          })}});

get5.addEventListener("click", function() {
    if (get5.parentElement===ma) {
    pa.appendChild(get5);
    get5.classList.add("fade")
    requestAnimationFrame(() => {
        get5.classList.remove("fade")
      })}
      else{
        ma.appendChild(get5);
        get5.classList.add("fade")
        requestAnimationFrame(() => {
            get5.classList.remove("fade")
          })}});

get6.addEventListener("click", function() {
    if (get6.parentElement===ma) {
    pa.appendChild(get6);
    get6.classList.add("fade")
    requestAnimationFrame(() => {
        get6.classList.remove("fade")
      })}
      else{
        ma.appendChild(get6);
        get6.classList.add("fade")
        requestAnimationFrame(() => {
            get6.classList.remove("fade")
          })}});

get7.addEventListener("click", function() {
    if (get7.parentElement===ma) {
    pa.appendChild(get7);
    get7.classList.add("fade")
    requestAnimationFrame(() => {
        get7.classList.remove("fade")
      })}
      else{
        ma.appendChild(get7);
        get7.classList.add("fade")
        requestAnimationFrame(() => {
            get7.classList.remove("fade")
          })}});

get8.addEventListener("click", function() {
    if (get8.parentElement===ma) {
    pa.appendChild(get8);
    get8.classList.add("fade")
    requestAnimationFrame(() => {
        get8.classList.remove("fade")
      })}
    else{
    ma.appendChild(get8);
    get8.classList.add("fade")
    requestAnimationFrame(() => {
        get8.classList.remove("fade")
      })}});

get9.addEventListener("click", function() {
    if (get9.parentElement===ma) {
    pa.appendChild(get9);
    get9.classList.add("fade")
    requestAnimationFrame(() => {
        get9.classList.remove("fade")
      })}
      else{
        ma.appendChild(get9);
        get9.classList.add("fade")
        requestAnimationFrame(() => {
            get9.classList.remove("fade")
          })}});