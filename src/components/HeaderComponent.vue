<template>
        <div id = "main">

            <div id = "logoAndList">
                <a href = "Home">
                    <div class = "rectangle"></div>
                    <div class = "rectangle"></div>
                    <div class = "rectangle"></div>
                    <span>HOTEL</span>
                </a>
            </div>

            <ul>
                <li><a href = "Home">Home</a></li>
                <li><a href = "Branch">Branch</a></li>
                <li><a href = "Search">Search</a></li>
                <li><a href = "About Us">About Us</a></li>
                <li><a href = "Pages">Pages</a></li>
                <li><a href = "Blog">Blog</a></li>
            </ul>
            
            <button id = "reservation">Reservation</button>

            <div id = "nav">
                <div id = "link1" class = "navLinks"></div>
                <div id = "link2" class = "navLinks"></div>
                <div id = "link3" class = "navLinks"></div>
                <span>MENU</span>
            </div>

            <div id = "navDrop">
                <div id = "topDrop">
                    <span>MJSN</span>
                    <span>HOTEL</span>
                    <button id = "reservationMobile">Reservation</button>
                    <div id = "navDropped">
                        <div id = "link4" class = "navLinksDropped"></div>
                        <div id = "link5" class = "navLinksDropped"></div>
                        <div id = "link6" class = "navLinksDropped"></div>
                        <span>MENU</span>
                    </div>
                </div>

                <ul>
                    <li><a href = "Home">Home</a></li>
                    <li><a href = "Branch">Branch</a></li>
                    <li><a href = "Search">Search</a></li>
                    <li><a href = "About Us">About Us</a></li>
                    <li><a href = "Pages">Pages</a></li>
                    <li><a href = "Blog">Blog</a></li>
                </ul>

                    <div id = "facebook2">
                        <img :src = "facebook">
                    </div>
                    <div id = "instagram2">
                        <img :src = "instagram">
                    </div>
                    <div id = "twitter2">
                        <img :src = "twitter">
                    </div>
            </div>
        </div>
        

</template>

<script>

window.onload = () => {
    const nav = document.querySelector('#nav');
    const navDropped = document.querySelector('#navDropped');
    const navDrop = document.querySelector('#navDrop');
    
    
        nav.addEventListener('click', () => {
            if (navDrop.style.display === '') {
                nav.style.display = '';
                navDrop.style.display = 'block';
                navDropped.style.display = 'block';
                document.body.style.overflow = "hidden";
            }
        })
        navDropped.addEventListener('click', () => {
            if (navDrop.style.display === 'block') {
                nav.style.display = "block";
                navDrop.style.display = '';
                navDropped.style.display = '';
                document.body.style.overflowY = "visible";
            }
        })
    }
    
    export default {
        data() {
        return {
            facebook: require('../assets/images/facebook.png'),
            instagram: require('../assets/images/instagram.png'),
            twitter: require('../assets/images/twitter.png')
        }
    }
    }
</script>

<style lang = scss>
a {
    text-decoration: none;
}
#main {
    width: 90%;
    height: 76px;
    background-color: #EAEFF6;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    text-align: center;
    color: #597193;
}
#logoAndList {
    position: absolute;
    top: 20px;
    left: 12%;
}
.rectangle {
    position: relative;
    margin-bottom: 0;
}
.rectangle:nth-child(1) {
    height: 46px;
    width: 10px;
    background-color: #AAC7F0;
    float: left;
    margin-top: 10px;
    align-self: flex-end;
    clip-path: polygon(100% 21%, 100% 100%, 0 100%, 0 0);
    cursor: pointer;
}
.rectangle:nth-child(2) {
    height: 28px;
    width: 10px;
    background-color: #597193;
    margin-top: 28px;
    float: left;
    align-self: flex-end;
    clip-path: polygon(100% 31%, 100% 100%, 0 100%, 0 0);
    cursor: pointer;
}
.rectangle:nth-child(3) {
    height: 34px;
    width: 10px;
    background-color: #353637;
    margin-top: 22px;
    float: left;
    align-self: flex-end;
    clip-path: polygon(100% 21%, 100% 100%, 0 100%, 0 0);
    cursor: pointer;
}
#logoAndList span {
    position: absolute;
    width: 87px;
    height: 34px;
    left: 39.40px;
    top: 32px;
    color: #597193;
    font-size: 25px;
    cursor: pointer;
}
#main ul {
    left: 25%;
    margin-top: 32px;
    position: relative; 
}
#main  ul li {
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    font-family: 'Average Sans', sans-serif;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 2%;
    margin-left: 50px;
}
#main ul li a {
    color: #597193;
}
#reservation {
    width: 135px;
    height: 40px;
    position: absolute;
    top: 36px;
    left: 80%;
    cursor: pointer;
    background-color: #597193;
    border: solid 1px transparent;
    border-radius: 4px;
    color: #ffffff;
}
#nav {
    width: 35px;
    height: 40px;
    position: absolute;
    top: 40px;
    left: 90%;
    display: none !important;
    cursor: pointer;
    span {
        position: absolute;
        left: 0;
            bottom: 2px;
            left: -1px;
            font-size: 12px;
            font-weight: 800;
            text-align: center;
        }
}


.navLinks {
        width: 35px;
        height: 2px;
        background-color: #597193;
        position: absolute;
    }
#link1 {
            position: absolute;
            top: 0;
        }
#link2 {
    position: absolute;
    top: 8px;
}
#link3 {
    position: absolute;
    top: 16px;
}
    #navDrop {
        display: none;
        width: 100%;
        height: 1200px;
        background-color:#FFFFFF;
        z-index: 5;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        ul {
            position: absolute;
            top: 70px;
            left: -50px;
            z-index: 6;
            color: black;
            li {
                margin-top: 40px;
                text-align: left;
                text-transform: uppercase;
            }
        }
    }
    #topDrop {
        width: 100%;
        height: 40px;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #AAC7F0;
        span:nth-child(1) {
            position: absolute;
            top: 5px;
            left: 40px;
            font-size: 15px;
            letter-spacing: 4px;
            color: #FFFFFF;
        }
        span:nth-child(2) {
            position: absolute;
            top: 22px;
            left: 45px;
            font-size: 9px;
            letter-spacing: 3px;
            color: #FFFFFF;
        }
        #reservationMobile {
            width: 200px;
            height: 40px;
            background-color: #597193;
            color: #FFFFFF;
            border: transparent;
            position: relative;
            margin: 0 auto;
            display: block;
            cursor: pointer;
        }
    }
    #navDropped {
    width: 35px;
    height: 40px;
    position: absolute;
    top: 3px;
    left: 90%;
    display: none;
    cursor: pointer;
    span {
        position: absolute;
        left: 0;
            bottom: 2px;
            left: -1px;
            font-size: 12px;
            font-weight: 800;
            text-align: center;
        }
        #link4 {
            top: 10px;
            width: 25px;
            left: 5px;
            transform: rotate(-45deg);
        }
        #link5 {
            top: 10px;
            width: 25px;
            left: 5px;
            transform: rotate(45deg);
        }
        #link6 {
            
            display: none;
        }

.navLinksDropped {
        width: 35px;
        height: 2px;
        background-color: #597193;
        position: absolute;
    }
}
    #facebook,
    #instagram,
    #twitter {
        z-index: 6;
        position: absolute;
        top: 600px !important;
    }
    #facebook {
        left: 40px !important;
    }
    #instagram {
        left: 90px !important;
    }
    #twitter {
        left: 140px !important;
    }
@media screen and (max-width: 1460px) {
    #main {
        width: 100%;
    }
    #reservation,
    #navDrop {
        display: none;
    }
}
    
@media screen and (max-width: 913px) {
    #main ul li {
        display: none;
    }
    
    #nav {
    width: 35px;
    height: 40px;
    position: absolute;
    top: 40px;
    left: 90%;
    display: block !important;
    cursor: pointer;
    span {
        position: absolute;
        left: 0;
            bottom: 2px;
            left: -1px;
            font-size: 12px;
            font-weight: 800;
            text-align: center;
        }
}
.navLinks {
        width: 35px;
        height: 2px;
        background-color: #597193;
        position: absolute;
    }
#link1 {
            position: absolute;
            top: 0;
        }
#link2 {
    position: absolute;
    top: 8px;
}
#link3 {
    position: absolute;
    top: 16px;
}
    #navDrop {
        display: none;
        width: 100%;
        height: 1200px;
        background-color:#FFFFFF;
        z-index: 5;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        ul {
            position: absolute;
            top: 70px;
            left: -50px;
            z-index: 6;
            color: black;
            li {
                margin-top: 40px;
                text-align: left;
                text-transform: uppercase;
                display: block !important;
            }
        }
    }
    #topDrop {
        width: 100%;
        height: 40px;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #AAC7F0;
        span:nth-child(1) {
            position: absolute;
            top: 5px;
            left: 40px;
            font-size: 15px;
            letter-spacing: 4px;
            color: #FFFFFF;
        }
        span:nth-child(2) {
            position: absolute;
            top: 22px;
            left: 45px;
            font-size: 9px;
            letter-spacing: 3px;
            color: #FFFFFF;
        }
        #reservationMobile {
            width: 200px;
            height: 40px;
            background-color: #597193;
            color: #FFFFFF;
            border: transparent;
            position: relative;
            margin: 0 auto;
            display: block;
            cursor: pointer;
        }
    }
    #navDropped {
    width: 35px;
    height: 40px;
    position: absolute;
    top: 3px;
    left: 90%;
    display: none;
    cursor: pointer;
    span {
        position: absolute;
        left: 0;
            bottom: 2px;
            left: -1px;
            font-size: 12px;
            font-weight: 800;
            text-align: center;
        }
        #link4 {
            top: 10px;
            width: 25px;
            left: 5px;
            transform: rotate(-45deg);
        }
        #link5 {
            top: 10px;
            width: 25px;
            left: 5px;
            transform: rotate(45deg);
        }
        #link6 {
            
            display: none;
        }

.navLinksDropped {
        width: 35px;
        height: 2px;
        background-color: #597193;
        position: absolute;
    }
}
    #facebook2,
    #instagram2,
    #twitter2 {
        z-index: 6;
        position: absolute;
        top: 600px !important;
        cursor: pointer;
    }
    #facebook2 {
        left: 40px !important;
    }
    #instagram2 {
        left: 90px !important;
    }
    #twitter2 {
        left: 140px !important;
    }

}
@media screen and (max-width: 360px) {
    body {
        overflow-x: hidden !important;
    }
    #nav {
        left: 82%;
    }
    #navDropped {
        left: 85%;
    }
    #reservationMobile {
        width: 100px !important;
        left: 15px;
    }    
}


</style>