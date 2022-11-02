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
                <span>Menu</span>
            </div>
            <div id = "navDrop">
                <ul>
                    <li><a href = "Home">Home</a></li>
                    <li><a href = "Branch">Branch</a></li>
                    <li><a href = "Search">Search</a></li>
                    <li><a href = "About Us">About Us</a></li>
                    <li><a href = "Pages">Pages</a></li>
                    <li><a href = "Blog">Blog</a></li>
                </ul>
                <button id = "reservationMobile">Reservation</button>
            </div>
        </div>
        

</template>

<script>

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
    width: 40px;
    height: 50px;
    background-color: black;
    position: absolute;
    top: 20px;
    left: 90%;
    display: none;
    span {
        position: absolute;
        left: 0;
            bottom: 0;
        }
}
.navLinks {
        width: 40px;
        height: 8px;
        background-color: #FFFFFF;
        position: absolute;
    }
#link1 {
            position: absolute;
            top: 0;
        }
#link2 {
    position: absolute;
    top: 15px;
}
#link3 {
    position: absolute;
    top: 26px;
}
    #navDrop {
        display: none;
    }


@media screen and (max-width: 1460px) {
    
    #main {
        width: 100%;
    }
    #reservation {
        left: 85%;
    }
}
@media screen and (max-width: 913px) {
    #main ul li,
    #reservation {
        display: none;
    }
    #nav {
        display: block;
    }
}


</style>