const header = document.getElementById('header')

header.addEventListener('mouseover', function() {
    header.classList.add('active')
/*     header.classList.add('bg') */
    document.getElementById('top_nav').classList.add('active')
/*     document.getElementById('top_nav').classList.add('bg') */
    document.getElementById('logo').innerHTML = '<img src="./images/logo2.png" alt="logo" class="logo_in">'
    document.getElementById('sealife').classList.add('active')
    document.getElementById('language').classList.add('active')
});
header.addEventListener('mouseout', function() {
    header.classList.remove('active')
    document.getElementById('top_nav').classList.remove('active')
    document.getElementById('logo').innerHTML = '<img src="./images/logo.png" alt="logo" class="logo_in">'
    document.getElementById('sealife').classList.remove('active')
    document.getElementById('language').classList.remove('active') 

/*     setTimeout((e) => {
        header.classList.remove('bg')
    }, 400);
    setTimeout((e) => {
        document.getElementById('top_nav').classList.remove('bg')
    }, 400); */
});

/* *sec01 */
document.querySelector('.s01_cont_01').addEventListener('mouseover', function () {
    document.querySelector('.s01_box_01').classList.add('active')
    document.querySelector('.s01_co01').classList.add('active')
});
document.querySelector('.s01_cont_01').addEventListener('mouseout', function () {
    document.querySelector('.s01_box_01').classList.remove('active')
    document.querySelector('.s01_co01').classList.remove('active')
});

document.querySelector('.s01_cont_02').addEventListener('mouseover', function () {
    document.querySelector('.s01_box_02').classList.add('active')
    document.querySelector('.s01_co02').classList.add('active')
});
document.querySelector('.s01_cont_02').addEventListener('mouseout', function () {
    document.querySelector('.s01_box_02').classList.remove('active')
    document.querySelector('.s01_co02').classList.remove('active')
});

document.querySelector('.s01_cont_03').addEventListener('mouseover', function () {
    document.querySelector('.s01_box_03').classList.add('active')
    document.querySelector('.s01_co03').classList.add('active')
});
document.querySelector('.s01_cont_03').addEventListener('mouseout', function () {
    document.querySelector('.s01_box_03').classList.remove('active')
    document.querySelector('.s01_co03').classList.remove('active')
});

document.querySelector('.s01_cont_04').addEventListener('mouseover', function () {
    document.querySelector('.s01_box_04').classList.add('active')
    document.querySelector('.s01_co04').classList.add('active')
});
document.querySelector('.s01_cont_04').addEventListener('mouseout', function () {
    document.querySelector('.s01_box_04').classList.remove('active')
    document.querySelector('.s01_co04').classList.remove('active')
});

/* *sec03 */
document.querySelector('.item1').addEventListener('mouseover', function () {
    document.querySelector('.item1').classList.add('active')
});
document.querySelector('.item1').addEventListener('mouseout', function () {
    document.querySelector('.item1').classList.remove('active')
});

document.querySelector('.item2').addEventListener('mouseover', function () {
    document.querySelector('.item2').classList.add('active')
});
document.querySelector('.item2').addEventListener('mouseout', function () {
    document.querySelector('.item2').classList.remove('active')
});

document.querySelector('.item3').addEventListener('mouseover', function () {
    document.querySelector('.item3').classList.add('active')
});
document.querySelector('.item3').addEventListener('mouseout', function () {
    document.querySelector('.item3').classList.remove('active')
});
