<template>
    <div class = "atTheTop">
        <div id = "page">
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
            <img id = "hotelImg" :src = "hotel">
            </div>
            <div id = "availability">
                <span>Check Availability</span>
                <p>It is a long established fact that a reader will be distracted<br>
                by the readable content of a page</p>
                <img :src = "hotel2">
                <div id = "chkAvailability">
                    <label for = "checkIn">
                        CHECK-IN
                        <input type = "date" id = "checkIn" name = "checkIn"
                        value = "" min = "2022-01-01" max = "2023-12-31">
                    </label>
                    <label for = "checkOut">
                        CHECK-OUT
                        <input type = "date" id = checkOut name = "checkOut"
                        value = "" min = "2022-01-01" max = "2023-12-31">
                    </label>
                    <label for = "rooms">
                        GUESTS:
                        <select id = "rooms" name = "rooms">
                            <option value = "1 room">1 room</option>
                            <option value = "2 rooms">2 rooms</option>
                            <option value = "3 rooms">3 rooms</option>
                            <option value = "4 rooms">4 rooms</option>
                        </select> 
                    </label> 
                    <button id = "availabilitySubmit">Check Availability</button>
                </div>
            </div>
            <div id = "popularRooms">
                <span>Our Most Popular Room</span>
                <p>It is a long established fact that a reader will be distracted<br>
                by the readable content of a page</p>
            </div>
            <div id = "deluxe">
                <img :src = "deluxe">
                <span>Deluxe Contrast Room</span>
                <img :src = "resize">
                <span>52 sqm</span>
                <img :src = "bed">
                <span>2 Bed</span>
                <img :src = "bathroom">
                <span>1 Bathroom</span>
                <span>$200</span>
                <span>/ Night</span> 
            </div>
            <div id = "luxury">
                <img :src = "luxury">
                <span>Deluxe Contrast Room</span>
                <img :src = "resize">
                <span>52 sqm</span>
                <img :src = "bed">
                <span>2 Bed</span>
                <img :src = "bathroom">
                <span>1 Bathroom</span>
                <span>$250</span>
                <span>/ Night</span> 
            </div>
            <div id = "single">
                <img :src = "single">
                <span>Deluxe Contrast Room</span>
                <img :src = "resize">
                <span>52 sqm</span>
                <img :src = "bed">
                <span>2 Bed</span>
                <img :src = "bathroom">
                <span>1 Bathroom</span>
                <span>$250</span>
                <span>/ Night</span> 
            </div>
            <div id = "services">
                <span>OUR SERVICES</span>
                <span>Hotel Facilities</span>
                <div id = "pickUp" class = "facilities">
                    <span>Pick up & Drop</span>
                    <img :src = "pickUpCar">
                    <p>It is a long established fact that a reader will be distracted<br>
                by the readable content of a page</p>
                </div>
                <div id = "parkingSpace" class = "facilities">
                    <span>Parking Space</span>
                    <img :src = "parkingCar">
                    <p>Lorem Ipsum is simply dummy text of the printing typersetting industry</p>
                </div>
                <div id = "roomServices" class = "facilities">
                    <span>Room Services</span>
                    <img :src = "roomServices">
                    <p>It is a long established fact that a reader will be distracted<br>
                by the readable content of a page</p>
                </div>
                <div id = "swimmingPool" class = "facilities">
                    <span>Swimming Pool</span>
                    <img :src = "swimmingPool">
                    <p>Lorem Ipsum is simply dummy text of the printing typersetting industry</p>
                </div>
                <div id = "fibreInternet" class = "facilities">
                    <span>Fibre Internet</span>
                    <img :src = "internet">
                    <p>It is a long established fact that a reader will be distracted<br>
                by the readable content of a page</p>
                </div>
                <div id = "breakfast" class = "facilities">
                    <span>Breakfast</span>
                    <img :src = "breakfast">
                    <p>Lorem Ipsum is simply dummy text of the printing typersetting industry</p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data() {   
        return {
        hotel: require('../assets/images/hotel.png'),
        hotel2: require('../assets/images/hotel2.png'),
        deluxe: require('../assets/images/deluxe.png'),
        luxury: require('../assets/images/luxury.png'),
        single: require('../assets/images/single.png'),
        resize: require('../assets/images/resize.png'),
        bed: require('../assets/images/bed.png'),
        bathroom: require('../assets/images/bathroom.png'),
        pickUpCar: require('../assets/images/pickUpCar.png'),
        parkingCar: require('../assets/images/parkingCar.png'),
        roomServices: require('../assets/images/roomServices.png'),
        swimmingPool: require('../assets/images/swimmingPool.png'),
        internet: require('../assets/images/internet.png'),
        breakfast: require('../assets/images/breakfast.png')    
        }
    },
    mounted()  {
        document.querySelector('#checkIn').value = new Date();
        document.querySelector('#checkOut').value = new Date() + 1;
    }}

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
#page {
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
 #hotelImg {
    z-index: 2 !important;
 }   
.circle {
    width: 10px;
    height: 10px;
    background-color: #C9D6E9;
    border-radius: 360px;
}
#availability {
    position: absolute;
    top: 1200px;
}
#popularRooms {
    position: absolute;
    top: 1800px;
}
#deluxe {
    position: absolute;
    top: 2000px;
}
#services {
    position: absolute;
    top: 2400px;
}


</style>