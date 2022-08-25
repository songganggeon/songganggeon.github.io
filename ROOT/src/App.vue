<template>
    <section class="container-fluid" id="menuWrap">
        <h6 class=" hidden">menuWrap</h6>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="./assets/main_logo.png" alt="로고">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li v-for="i in menu" :key="i" class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @mouseenter="gnbBox(`${i}`)">{{ i
                            }}</a>
                        </li>
                    </ul>
                    <form action="#" method="post" class="col-md-2" style="display:flex; justify-content: flex-end;">
                        <button type="button" class="btn btn-light">로그인 <i class="fa-solid fa-user"></i></button>
                        <button type="button" class="btn btn-light">인증센터 <i class="fa-solid fa-lock"></i></button>
                    </form>
                    <div id="gnbBox" @mouseleave="gnbClose()">
                        <div class="container">
                            <div class="row gnbMenu">
                                <div v-for="i in depth1Title" :key="i" class="col-md-2 depth1">
                                    <h3 class="depth1Title">{{i}}</h3>
                                    <div v-for="i in depth1menus" :key="i">
                                        <a href="#">{{ depth1menus.depth1menu1 }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-9">
                    <div class="main-img">
                        <div v-for="main in mainImgList" :key="main" class="mainBg col-xl-12">
                            <img :src="require(`./assets/${main}.jpg`)" alt="메인이미지{{main}}">
                            <div :class="(`${main}`)" style="position:absolute; top:0">
                                <h2>Daishin Securities</h2>

                            </div>
                            <!--                             <video :class="(`${main}`)" style="position:absolute; width:50%; bottom: 0" autoplay muted loop>
                                <source src="./assets/daishin.mp4" type="video/mp4">
                            </video> -->
                        </div>
                        <div class="slider">
                            <div v-for="i in 3" :key="i" class="slide slide-item" @click="slider(`${i}`)"></div>
                        </div>
                    </div>
                    <section class="container">
                        <div class="navbar">
                            <div v-for="middle in midmenu" :key="middle" class="col-md-2 mid">
                                <h4 class="midMenu">{{ middle }}</h4>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="col-sm-3">
                    <div class="container">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="검색어를 입력해주세요."
                                aria-label="Search">
                            <button class="btn btn-outline-info" type="submit">Search</button>
                        </form>
                        <div class="col-sm" id="subBtn">
                            <button v-for="searchSub in searchMenu" :key="searchSub" type="button"
                                class="btn btn-info text-light"> {{searchSub}} </button>
                        </div>
                        <div class="col-md" id="iconBox">
                            <div class="col-md bg-info text-white" id="iconTxt">
                                <div v-for="subMenuBtn in submenu" :key="subMenuBtn">{{subMenuBtn}}</div>
                            </div>
                            <section class="container">
                                <h6 class="hidden">asideIcon</h6>
                                <div class="row">
                                    <div v-for="submenuTxt in submenuImgTxt" :key="submenuTxt"
                                        class="col-lg-4 sideIcon">
                                        <div class="col-lg-12">
                                            {{ submenuTxt }}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="container-md">
                                <h6 class="hidden">bestItem</h6>
                                <div class="row">
                                    <h2 class="text-light fundTopTitle">펀드랭킹 TOP 상품</h2>
                                    <div v-for="fund in fundList" :key="fund" class="container fundWrap">
                                        <button class="col-md-2 btn btn-info text-light">펀드</button>
                                        <span class="col-md-10">{{fund}}</span>
                                    </div>
                                </div>
                            </section>
                            <section class="container-fluid">
                                <h6 class="hidden">kospi</h6>
                                <div class="row">
                                    <ul class="navbar">
                                        <li v-for="krx in kospi" :key="krx" class="col-md-4 krx"
                                            style="text-align:center" v-on:click="kospiMove(`${krx}`)">{{krx}}</li>
                                    </ul>
                                    <div class="text-danger kospi">
                                        <div v-for="(krxNum,i) in num" :key="krxNum" class="kospiNum col-md-12">
                                            {{ krxNum }} <span>{{ numSub[i] }}</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="container-fluid">
                                <div class="row">
                                    <h2 class="text-center text-light" style="font-size: 1.4vw;;">오늘의 추천
                                        종목</h2>
                                    <div class="col-md-12 text-center text-light moveTxt">
                                        <div class="moveTxtWrap">
                                            <p v-for="listWrap in list" :key="listWrap">
                                                {{ listWrap }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            menu : ['인터넷뱅킹','금융상품','리츠상품','주식/선물옵션','투자정보','고객센터'],
            menuActive : false,
            menuList : [
            {menuDepth1: '1', menuDepth2: '통장', menuDepth3: '조회' },
            {menuDepth1: '2', menuDepth2: '이체', menuDepth3: '조회' },
            {menuDepth1: '3', menuDepth2: '대출', menuDepth3: '조회' },
            {menuDepth1: '4', menuDepth2: '청약', menuDepth3: '조회' },
            {menuDepth1: '5', menuDepth2: '증명서', menuDepth3: '조회' }
            ],
            searchMenu : ['#ID등록','#수수료','#OTP'],
            submenu : ['추천종목','이벤트','공지사항'],
            submenuImgTxt : ['이체','종합잔고','펀드검색','청약중인 ELS','주식주문','주식잔고평가'],
            fundList: ['NH-Amundi코리아2배인버스레버리지증권투신주파재Ce', '삼성KOSPI200인버스인덱스증권투자신탁1[채권파생]Ce','키움마이베어마켓증권투자신탁제1호(주식-파생형)A.'],
            kospi: ['KOSPI','KOSDAQ','KOSPI200'],
            num: ['2,477.71','787.83','319.91'],
            numSub: ['▲ 5.12', '▲ 3.04','▲ 0.80'],
            list: ['LG에너지솔루션', 'SK하이닉스', '삼성바이오로직스', '삼성전자우', 'LG화학','삼성SDI','현대차','NAVER','카카오'],
            mainImgList: ['bg0','bg1','bg2'],
            midmenu: ['처음방문 고객안내','비대면 계좌개설','스마트폰 인증서복사','금융소비자정보포털','로봇 벤자민'],
            iconList: ['icon1','icon2','icon3','icon4','icon5'],
            depth1Title: ['조회','이체','대출','청약','거래신청','개인정보관리'],
            depth1menus: [
                {depth1menu1: ['종합잔고','거래내역조회','휴면계좌조회','수표조회']},
                {depth1menu2: ['이체','이체결과조회/취소','자동/예약이체','자주쓰는계좌관리','이체한도관리','연금저축출금']},


            ]
            
        }
    },
    methods : {
        gnbBox(e){
            if (e === '인터넷뱅킹'){
                document.querySelector('.depth1>h3').innerHTML = "조회"
                document.getElementById('gnbBox').style.height = "inherit"
                document.querySelectorAll('.depth1').forEach((el) => {
                    el.style.display = "block"
                })
                /* this.menuActive = true */
            } else if(e === '금융상품'){
                document.querySelector('.depth1>h3').innerHTML = "이체"
                document.getElementById('gnbBox').style.height = "inherit"
                document.querySelectorAll('.depth1').forEach((el) => {
                    el.style.display = "block"
                })

                /* this.menuActive = false */
            }
        },
        gnbClose(){
            document.getElementById('gnbBox').style.height = "0"
            document.querySelectorAll('.depth1').forEach((el) => {
                el.style.display = "none"
            })
        },


        kospiMove(e){
            if (e == 'KOSPI'){
                document.querySelector('.krx:first-child').style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
                document.querySelector('.krx:nth-child(2)').style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                document.querySelector('.krx:nth-child(3)').style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                document.querySelectorAll('.kospiNum').forEach((el) => {
                    el.style.transform = 'translateX(0)'
                })
            } else if (e == 'KOSDAQ'){
                document.querySelector('.krx:first-child').style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                document.querySelector('.krx:nth-child(2)').style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
                document.querySelector('.krx:nth-child(3)').style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                document.querySelectorAll('.kospiNum').forEach((el) => {
                    el.style.transform = 'translateX(-100%)'
                })} else {
                document.querySelector('.krx:first-child').style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                document.querySelector('.krx:nth-child(2)').style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                document.querySelector('.krx:nth-child(3)').style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
                document.querySelectorAll('.kospiNum').forEach((el) => {
                    el.style.transform = 'translateX(-200%)'
                })        
                }
        },
        slider(e){
            if(e === '1'){
                document.querySelector('.slide-item:first-child').style.backgroundColor = "#049DBF"
                document.querySelector('.slide-item:nth-child(2)').style.backgroundColor = "#fff"
                document.querySelector('.slide-item:nth-child(3)').style.backgroundColor = "#fff"
                document.querySelectorAll('.mainBg').forEach((el) => {
                    el.style.transform = "translateX(0)"
                }) 
            } else if(e === '2'){
                document.querySelector('.slide-item:first-child').style.backgroundColor = "#fff"
                document.querySelector('.slide-item:nth-child(2)').style.backgroundColor = "#049DBF"
                document.querySelector('.slide-item:nth-child(3)').style.backgroundColor = "#fff"
                document.querySelectorAll('.mainBg').forEach((el) => {
                    el.style.transform = "translateX(-100%)"
                }) 
            } else if(e === '3'){
                document.querySelector('.slide-item:first-child').style.backgroundColor = "#fff"
                document.querySelector('.slide-item:nth-child(2)').style.backgroundColor = "#fff"
                document.querySelector('.slide-item:nth-child(3)').style.backgroundColor = "#049DBF"
                document.querySelectorAll('.mainBg').forEach((el) => {
                    el.style.transform = "translateX(-200%)"
                })
            }
        },
    },
    components: {
    
    }
    }
/* }} */
</script>
<style>
@import "./css/index.css";
    /* 공통사항 */
    /* 테마색상 #049DBF */
    *{font-family: 'Noto Sans KR', sans-serif;}
    :root{--toggle-zero: 0%;}
    /* 상단 메뉴 */
    #menuWrap{width: 90%; margin: 0 auto;}
    .navbar-nav{text-align: center; width: 70%; display: flex; justify-content: space-around; align-items: center; white-space: nowrap;}
    .nav-item{position: relative;}
    .nav-item::before{content: ""; position: absolute; left: 50%; transform: translateX(-50%); bottom: 0; width: var(--toggle-zero); height: 10%; border-radius: 20%}
    .nav-item:hover::before{background: #049DBF;animation: nav-item-hover 0.3s ease-in-out forwards;}
    @keyframes nav-item-hover{
        from{width: 0;}
        to{width: 100%;}
    }
    #gnbBox{display: flex; transition: 0.7s; justify-content: space-between; position: absolute; z-index: 999; top: 100%; left: 0; width: 100%; height: 0; background: #fff ; transition: all 0.3s;}
    .gnbMenu{padding: 5% 0;}
    .depth1{display: none;}
    .depth1Title{font-size: 1.2vw; padding: 5% 0;}

    #subBtn{display: flex; justify-content:flex-start; margin-top: 1%;}
    #subBtn>button{margin: 0 3%; font-size: 80%;}
    #subBtn>button:first-child{margin: 0 3% 0 0;}
    .main-img{position: relative;border-radius: 7%; display: flex; width: 100%; height: 100%; overflow: hidden;}
    .mainBg{transform: translateX(0); position: relative; height: 100%; width: 100%; transition: all 0.7s;}
    .main-img .slider{display: flex; justify-content: space-between; position: absolute; bottom: 5%; left: 50%; width: 10%; height: 1.7%; transform: translateX(-50%);}
    .main-img .slider>.slide{background: #fff; width: 30%; height: 100%; cursor: pointer; border-radius: 25%; cursor: pointer;}
    .main-img .slider>.slide:first-child{background: #049DBF;}
    .main-img .slider>.slide:hover{background: #049DBF;}
    .bg0{width: 100%; height: 100%; position: relative;}
    .bg0>h2{position: absolute; z-index: 1; top: 30%; left: 50%; transform: translate(-50%,-30%); font-size: 5vw; color: #fff; text-shadow: 5px 5px 10px gray;}
    .bg1>h2,.bg2>h2{display: none;}

    .main-img img{display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;}
    #iconTxt{display: flex; justify-content: space-around;  width: 100%; height: 10%;}
    #iconTxt>div{cursor: pointer; position: relative; align-items: center; justify-content: center; white-space: nowrap; display: flex; width: 100%; height: 100%; padding: 5%; text-align: center;}
    #iconTxt>div:hover{background: #049DBF6e;}
    #iconTxt>div:first-child::before{content: ""; background: none;}
    #iconTxt>div::before{content: ""; position: absolute; top: 50%; transform: translateY(-50%); left: 0; width: 1%; height: 70%; background: #049DBF; }
    
    .sideIcon{margin-top: 4%; position: relative; background: url('./assets/ico_banking.png') no-repeat; height: 74px;}
    .sideIcon:nth-child(2){background-position: 0px -68px;}
    .sideIcon:nth-child(3){background-position: 0px -136px;}
    .sideIcon:nth-child(4){background-position: 0px -204px;}
    .sideIcon:nth-child(5){background-position: 0px -272px;}
    .sideIcon:nth-child(6){background-position: 0px -340px;}
    #iconBox{margin-top: 15%; width: 100%; height: 100%; background: #049DBF; border-radius: 2.5%; overflow: hidden;}
    .fundWrap{margin: 1% 0; height: 100%; width: 100%; color: #fff;  white-space: nowrap; text-overflow: ellipsis; overflow:hidden;}
    .fundWrap:hover{overflow: visible; text-overflow: clip; text-shadow: 3px 3px 5px gray;}
    .fundWrap>span{margin-left: 1%; cursor: pointer;}
    .sideIcon>div{color: #fff; display: flex; align-items: flex-end; justify-content: center; height: 100%;}
    .fundTopTitle::before,.fundTopTitle::after{content: ""; position: absolute; left: 0; width: 100%; height: 3%; background: #049DBF;}
    .fundTopTitle::before{top: 0;}
    .fundTopTitle::after{bottom: 0;}
    .fundTopTitle{padding: 3% 0; position: relative; font-size: 140%; text-align: center; margin-top: 5%; /* background: rgba(0, 0, 0, 0.7); */}
    .kospi{display: flex; justify-content: space-between; overflow: hidden; width: 100%; height: 100%;}  
    .kospiNum{display: block; font-size: 250%; text-align: center; width: 100%; transition: all 0.7s; padding: 3% 0;}
    .kospiNum>span{font-size: 1vw;}
    .krx:first-child{color: #fff; background: rgba(0, 0, 0, 0.7);}
    .krx{color:rgba(255, 255, 255, 0.9); padding: 3% 0; background: rgba(255, 255, 255, 0.2);}
    .krx:hover{color: #fff; cursor: pointer; padding: 3% 0;   background: rgba(0, 0, 0, 0.7);}
    .moveTxtWrap{display: flex; white-space: nowrap; font-size: 1.1vw; padding: 1%;}
    .moveTxtWrap>p{padding: 3% 10%; cursor: pointer;}
    .moveTxtWrap>p:hover{text-shadow: 3px 3px 3px gray;}
    .moveTxt{animation: moveList 20s ease-in-out infinite;}
    .moveTxt:hover{animation-play-state: paused;}
    @keyframes moveList{
        0%{transform: translateX(100%);}
        100%{transform: translateX(-300%);}
    }
    .midMenu{position: relative; font-size: 100%; color: #222; padding: 7% 0; text-align: center; cursor: pointer;}
    .midMenu:hover{background: rgba(0, 0, 0, 0.2); border-radius: 12px;}
    .midMenu::before{content: ""; position: absolute; top: 50%; left: 0; transform: translate(0,-50%);}
    .mid:first-child>.midMenu::before{content: url('./assets/icon1.png');}
    .mid:nth-child(2)>.midMenu::before{content: url('./assets/icon2.png');}
    .mid:nth-child(3)>.midMenu::before{content: url('./assets/icon3.png');}
    .mid:nth-child(4)>.midMenu::before{content: url('./assets/icon4.png');}
    .mid:last-child>.midMenu::before{content: url('./assets/icon5.png');}


</style>