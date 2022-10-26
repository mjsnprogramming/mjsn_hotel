<template>
    <div class = "atTheTop">
        <HeaderComponent></HeaderComponent>
        <div id = "page">
            <p>Discover a hotel<br> that defines a new <br>dimension of luxury</p>
            <p>Lorem ipsum is simply dummy text of the printing and <br>typesetting industry.
                Lorem ipsum has been the industry's<br> standard dummy.
            </p>
            <div id = "getStarted">
                <button id = "startedButton">Get Started</button>
                <button id = "watchButton"></button>
                <div id = "insideWatch"></div>
                <span id = "watchVideo">Watch video</span>
            </div>
            <div class = "circle"></div>
            <div class = "circle"></div>
            <div class = "circle"></div>
            <div class = "circle"></div>
            <div id = "circleBig">
            <div class = "circle_big"></div>
            <img id = "hotelImg" :src = "hotel">
            </div>
            </div>
            <div id = "availability">
                <span>Check Availability</span>
                <p>It is a long established fact that a reader will be distracted<br>
                by the readable content of a page</p>
                <div id = "hotelImgAvailability">
                <img :src = "hotel2">
                </div>
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
                    <button id = "availabilitySubmit">CHECK AVAILABILITY</button>
                </div>
            </div>
            <div id = "popularRooms">
                <span>Our Most Popular Room</span>
                <p>It is a long established fact that a reader will be distracted<br>
                by the readable content of a page</p>
            
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
            <div id = "numbers">
                <span>302 +</span>
                <span>Room & Suites</span>
                <hr>
                <span>25</span>
                <span>Restaurant</span>
                <hr>
                <span>510+</span>
                <span>Exceptional Food</span>
                <hr>
                <span>65</span>
                <span>Destination</span>
            </div>
            <div id = "history">
                <span>Discover Our History</span>
                <p>Lorem ipsum is ismply dummy text of the printing and<br>
                typersetting industry. Lorem Ipsum has been the industry's<br>
                standard dummy</p>
                <p>There are many variations of passages of Lorem Ipsum<br>
                available, but the majority have suffered alteration in some<br>
                form, by injected humour, or randomised words which don't<br>
                look even slightly believable</p>
                <button id = "explore">Explore More</button>
                <button id = "playVideo"></button>
                <span>Watch video</span>
                <iframe></iframe>
            </div>
            <div id = "customers">
                <span>Our Happy Customers</span>
                <p>Know about our clients, we are a worldwide corporate brand</p>
                <div class = "comment">
                    <img :src = "warren">
                    <span>Wade Warren</span>
                    <span>Louis Vuitton</span>
                    <p>Necessary to deliver white glove<br>
                       fully managed campgaigns that surpass<br>
                       industry benchmarks. Take your career<br>
                       to next level</p>
                </div>
                <div class = "comment">
                    <img :src = "florise">
                    <span>Albert Florise</span>
                    <span>Nintendo</span>
                    <p>Necessary to deliver white glove<br>
                       fully managed campgaigns that surpass<br>
                       industry benchmarks. Take your career<br>
                       to next level</p>
                </div>
                <div class = "comment">
                    <img :src = "wilson">
                    <span>Wade Warren</span>
                    <span>Louis Vuitton</span>
                    <p>Necessary to deliver white glove<br>
                       fully managed campgaigns that surpass<br>
                       industry benchmarks. Take your career<br>
                       to next level</p>
                </div>
            </div>
            <div id = "blog">
                <span>HOTEL BLOG</span>
                <span>Our News</span>

                <div id = "travelWithMap">
                    <img :src = "map">
                    <img :src = "worldMini">
                    <span>Travel</span>
                    <img :src = "commentMini">
                    <span>2 Comment</span>
                    <span>How To Travel With Map</span>
                    <p>Lorem Ipsum is simply dummy text of<br> the printing and typersetting industry </p>
                    <span>Read More</span>
                    <img :src = "arrowMini">
                </div>
                <div id = "travelWithMap">
                    <img :src = "single2">
                    <img :src = "worldMini">
                    <span>Travel</span>
                    <img :src = "commentMini">
                    <span>2 Comment</span>
                    <span>Single Contrast Room</span>
                    <p>Lorem Ipsum is simply dummy text of<br> the printing and typersetting industry </p>
                    <span>Read More</span>
                    <img :src = "arrowMini">
                </div>
                <div id = "travelWithMap">
                    <img :src = "luxury2">
                    <img :src = "worldMini">
                    <span>Travel</span>
                    <img :src = "commentMini">
                    <span>2 Comment</span>
                    <span>Luxury Twin Room</span>
                    <p>Lorem Ipsum is simply dummy text of<br> the printing and typersetting industry </p>
                    <span>Read More</span>
                    <img :src = "arrowMini">
                </div>
            </div>
            <div id = "subscribe">
                <span>Stay in Touch</span>
                <p>Signup to receive news and<br>
                   updates from our hotel</p>
                <input type = "email" id = "email" placeholder = "Enter Your Email Address">
                <button id = "subscribe">subscribe</button>
            </div>
        </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
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
        breakfast: require('../assets/images/breakfast.png'),
        warren: require('../assets/images/warren.jpg'),
        florise: require('../assets/images/florise.png'),
        wilson: require('../assets/images/wilson.png'),
        map: require('../assets/images/map.png'),
        worldMini: require('../assets/images/worldMini.png'),
        arrowMini: require('../assets/images/arrowMini.png'),
        commentMini: require('../assets/images/commentMini.png'),
        single2: require('../assets/images/single2.png'),
        luxury2: require('../assets/images/luxury2.png')    
        }
    },
    components: {
        HeaderComponent
    },
    mounted()  {
        document.querySelector('#checkIn').value = new Date();
        document.querySelector('#checkOut').value = new Date() + 1;
    }}

</script>

<style lang = scss>
$openSans: "Open Sans", sans-serif;
$averageSans: "Average Sans", sans-serif;
@mixin openSans() {
    position: absolute;
    font-family: $openSans;
    font-weight: 400;
    font-size: 13px;
    line-height: 26px;
}
@mixin circles() {
    position: absolute;
    background-color: #C9D6E9;
    border-radius: 360px;
}
@mixin checkInLabel() {
    @include openSans;
        line-height: 55px !important;
        letter-spacing: 0.03em;
        color: #222426;
        left: 68px;
}
@mixin checkInInputs() {
        @include openSans;
        font-size: 16px !important;
        line-height: 55px;
        box-sizing: border-box;
        width: 339px;
        height: 50px;
        border: 1px solid #ABABAB;
        border-radius: 2px;
        left: 0px;
        background-color: #F6FCFA;
}
#page,
#getStarted {
    position: absolute;
    p:nth-child(1),
    p:nth-child(2) {
        position: absolute;
    }
}
a {
    text-decoration: none;
}
#page {
    width: 90%;
    height: 705px;
    background-color: #EAEFF6;
    left: 0;
    top: 76px;
    overflow: hidden;
    
p:nth-child(1) {
    left: 10%;
    top: 194px;
    font-family: "open-sans", sans-serif;
    font-weight: 600;
    font-size: 45px;
    line-height: 55px;
    color: #3D4550;
    }
p:nth-child(2) {
    left: 10%;
    top: 393px;
    font-family: "average-sans", sans-serif;
    font-weight: 400;
    size: 18px;
    line-height: 28px;
    letter-spacing: 2%;
    color: #939393;
    }  
    .circle:nth-child(1) {
    @include circles;
    width: 10px;
    height: 10px;
    left: 534.72px;
    top: 589px;
}
.circle:nth-child(2) {
    @include circles;
    width: 21px;
    height: 21px;
    top: 194px;
    left: 717.58px;
    
}
.circle:nth-child(3) {
    @include circles;
    width: 41px;
    height: 41px;
    top: 99px;
    left: 1205.52px;
    
}
.circle:nth-child(4) {
    @include circles;
    width: 27px;
    height: 27px;
    top: 598px;
    left: 1236.84px;
    
}
    }
#getStarted {
    width: 341.46px;
    height: 40px;
    left: 10%;
    top: 513px;
    
    #startedButton {
        @include openSans;
        width: 136.38px;
        height: 40px;
        background-color: #597193;
        color: white;
        border: transparent;
        border-radius: 4px;
        box-shadow: 0px 4px 12px rgba(21, 21, 21, 0.15);
        text-align: center;
        left: 0;
        top: 0;
        cursor: pointer; 
    }
    #watchButton {
        width: 41px;
        height: 40px;
        border-radius: 360px;
        border: transparent;
        position: absolute;
        left: 190.94px;
        background-color: #597193;
        cursor: pointer;
    }
    #insideWatch {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 203.4px;
        top: 10px;
        clip-path: polygon(0 0, 0% 100%, 99% 50%);
        border: transparent;
        cursor: pointer;
        z-index: 1;
        background-color: #EAEFF6;
    }
    #watchVideo {
        @include openSans;
        font-weight: 400;
        color: #353637;
        left: 242.46px;
        top: 7px;
    }
}
#circleBig {
    width: 544.52px;
    height: 600px;
    position: absolute;
    left: 52%;
    top: 99px;

    .circle_big {
        width: 540px;
        height: 540px;
        background-color: #F6FCFA;
        border-radius: 360px;
        border: 1px solid black;
        position: absolute;
        left: 0;
        top: 0;
    }
    #hotelImg {
        z-index: 2 !important;
        position: absolute;
        top: 41px;
        left: 125.27px;
        width: 323.28px;
        height: 569px;
 }   
}

#availability {
    position: relative;
    top: 896px;
    display: block;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    width: 1112.17px;
    height: 694px;
    span {
        @include openSans;
        top: 0;
        font-size: 45px !important;
        line-height: 55px !important;
        color: #353637;
        position: relative;
        display: block;
        margin: 0 auto;
    }
    p {
        font-family: $averageSans;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.02em;
        color: #959595;
    }
    
}
#hotelImgAvailability {
    background-color: #B1BED0;
    width: 637px;
    height: 523px;
    z-index: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 8px 0px 0px 8px;;
    img {
        width: 637px;
        height: 434px;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
    }
}
#chkAvailability {
    width: 475.17px;
    height: 523px;
    position: absolute;
    top: 171px;
    left: 637px;
    background-color: #F6FCFA;
    border-radius: 0px 8px 8px 0px;
    label:nth-child(1) {
        @include checkInLabel;
        top: 77px;
    }
    #checkIn {
        @include checkInInputs;
        top: 53px;
    }
    label:nth-child(2) {
        @include checkInLabel;
        top: 182px;
    }
    #checkOut {
        @include checkInInputs;
        top: 53px;
    }
    label:nth-child(3) {
        @include checkInLabel;
        top: 287px;
    }
    #rooms {
        @include checkInInputs;
        top: 53px;
    }
    #availabilitySubmit {
        @include checkInInputs;
        left: 68px;
        top: 425px;
        cursor: pointer;
        line-height: 45px !important;
    }
}
#popularRooms {
    width: 1110px;
    height: 602px;
    position: relative;
    margin: 0 auto;
    top: 1018px;
    background-color: #353637;
}


</style>