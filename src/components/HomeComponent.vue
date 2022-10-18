<template>
        <div id = "at_the_top">
            <div id = "main">
            <a href = "Home">
            <div class = "rectangle"></div>
            <div class = "rectangle"></div>
            <div class = "rectangle"></div>
            <span>HOTEL</span>
            </a>

            <ul>
                <li><a href = "Home">Home</a></li>
                <li><a href = "Branch">Branch</a></li>
                <li><a href = "Search">Search</a></li>
                <li><a href = "About Us">About Us</a></li>
                <li><a href = "Pages">Pages</a></li>
                <li><a href = "Blog">Blog</a></li>
            </ul>
            
            <button id = "reservation">Reservation</button>
            
        </div>
            <p>Discover a hotel<br> that defines a new <br>dimension of luxury</p>
            <p>Lorem ipsum is simply dummy text of the printing and <br>typesetting industry.
                Lorem ipsum has been the industry's<br> standard dummy.
            </p>
            <button id = "started">Get Started</button>
            <button id = "watch">
                <button id = "inside_watch"></button>
            </button>
            <span id = "watch_video">Watch video</span>

            <div class = "circle"></div>
            <div class = "circle"></div>
            <div class = "circle"></div>
            <div class = "circle"></div>
            <div class = "circle_big"></div>

            <img :src = "hotel">
        </div>
</template>

<script>
export default {
data() {
    return {
        hotel: require('../assets/hotel.png')
    }
}
}
</script>

<style lang = scss>
a {
    text-decoration: none;
}
#main {
    width: 1110px;
    height: 56px;
    margin-top: 20px;
    background-color: #EAEFF6;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    text-align: center;
    color: #353637;
    z-index: 1!important;
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
#main span {
    position: relative;
    width: 87px;
    height: 34px;
    left: 10px;
    top: 32px;
    color: #597193;
    font-size: 25px;
    cursor: pointer;
}
#main ul {
    position: relative;
    left: 100px;
    margin-top: 32px;
    
}
#main ul li {
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
    color: #353637;
}
#main button {

    width: 135px;
    height: 40px;
    position: relative;
    top: 5px;
    left: 199px;
    cursor: pointer;
    background-color: #597193;
    border: solid 1px transparent;
    border-radius: 4px;
    color: #ffffff;
}
    #at_the_top {
        width: 90%;
        height: 775px;
        background-color: #EAEFF6;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0!important;
        overflow: hidden;
    
        p:nth-child(2) {
            position: relative;
            left: 300px;
            top: 200px;
            font-family: "open-sans", sans-serif;
            font-weight: 600;
            font-size: 45px;
            line-height: 55px;
            color: #3D4550;
        }
        p:nth-child(3) {
            position: relative;
            left: 300px;
            top: 170px;
            font-family: "average-sans", sans-serif;
            font-weight: 400;
            size: 18px;
            line-height: 28px;
            letter-spacing: 2%;
            color: #939393;
        }
        
    }
    #started {
        width: 137px;
        height: 40px;
        color: #FFFFFF;
        background-color: #597193;
        border-radius: 4px;
        position: relative;
        left: 300px;
        top: 200px;
        border: transparent;
        cursor: pointer;
    }
    #watch {
        width: 41px;
        height: 40px;
        border-radius: 360px;
        border: transparent;
        position: relative;
        left: 380px;
        top: 215px;
        background-color: #597193;
        cursor: pointer;
    }
    #inside_watch {
        width: 20px;
        height: 20px;
        position: relative;
        left: 352px;
        top: 205px;
        clip-path: polygon(0 0, 0% 100%, 99% 50%);
        border: transparent;
        cursor: pointer;
    }
    #watch_video {
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 2%;
        font-weight: 400;
        font-family: "open-sans", sans-serif;
        color: #353637;
        position: relative;
        left: 380px;
        top: 202px;
    }
    .circle_big {
        width: 540px;
        height: 540px;
        background-color: #F6FCFA;
        border-radius: 360px;
        border: 1px solid black;
        position: relative;
        left: 1100px;
        bottom: 300px;
    }

</style>