<template>
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
        

</template>

<script>

</script>

<style lang = scss>
a {
    text-decoration: none;
}
#main {
    width: 1110px;
    height: 56px;
    margin-top: 20px;
    background-color: #FFFFFF;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    text-align: center;
    color: #597193;

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
    color: #597193;
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

</style>