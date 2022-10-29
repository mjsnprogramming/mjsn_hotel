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
            <div id = "marketStatic">
                <div id = "marketStaticHeader">
                    <div id = "marketLittleCircle"></div>
                    <span>Market Static</span>
                </div>
                <span id = "courseOverview">Course<br> overview</span>
                <canvas id = "marketChart"></canvas>
                <ul>
                    <li>Jan</li>
                    <li>Feb</li>
                    <li>Mar</li>
                    <li>Apr</li>
                    <li>May</li>
                    <li>Jun</li>
                    <li>Jul</li>
                    <li>Aug</li>
                    <li>Sep</li>
                    <li>Oct</li>
                    <li>Nov</li>
                    <li>Dec</li>
                </ul>

            </div>
            <div id = "circle1" class = "circle"></div>
            <div id = "circle2" class = "circle"></div>
            <div id = "circle3" class = "circle"></div>
            <div id = "circle4" class = "circle"></div>
            <div id = "circleBig">
            <div class = "circle_big"></div>
            <img id = "hotelImg" :src = "hotel">
            </div>
            <div id = "payment">
                <div id = "wallet">
                    <img :src = "wallet">
                </div>
                    <span>Payment</span>
                    <span>online</span>
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
                    <img :src = "arrowToTop" id = "arrowToTop1">
                    <img :src = "arrowToTop" id = "arrowToTop2">
                    <img :src = "arrowToTop" id = "arrowToTop3">
                    <img :src = "arrowToTop" id = "arrowToTop4">
                    <label for = "checkIn" id = "checkInLabel" >
                        CHECK-IN
                        <input type = "date" id = "checkIn" name = "checkIn"
                        value = "" min = "2022-01-01" max = "2023-12-31">
                    </label>
                    <label for = "checkOut" id = "checkOutLabel">
                        CHECK-OUT
                        <input type = "date" id = checkOut name = "checkOut"
                        value = "" min = "2022-01-01" max = "2023-12-31">
                    </label>
                    <label for = "rooms" id = "roomsLabel">
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
                <img :src = "deluxe" id = "deluxeImg" class = "roomsImg">
                <span>Deluxe Contrast Room</span>
                <img :src = "resize" class = "resizeImg">
                <span>52 sqm</span>
                <img :src = "bed" class = "bedImg">
                <span>2 Bed</span>
                <img :src = "bathroom" class = "bathroomImg">
                <span>1 Bathroom</span>
                <span>$200</span>
                <span>/ Night</span> 
            </div>
            <div id = "luxury">
                <img :src = "luxury" id = "luxuryImg" class = "roomsImg">
                <span>Luxury Contrast Room</span>
                <img :src = "resize" class = "resizeImg">
                <span>52 sqm</span>
                <img :src = "bed" class = "bedImg">
                <span>2 Bed</span>
                <img :src = "bathroom" class = "bathroomImg">
                <span>1 Bathroom</span>
                <span>$250</span>
                <span>/ Night</span> 
            </div>
            <div id = "single">
                <img :src = "single" id = "singleImg" class = "roomsImg">
                <span>Single Contrast Room</span>
                <img :src = "resize" class = "resizeImg">
                <span>52 sqm</span>
                <img :src = "bed" class = "bedImg">
                <span>2 Bed</span>
                <img :src = "bathroom" class = "bathroomImg">
                <span>1 Bathroom</span>
                <span>$280</span>
                <span>/ Night</span> 
            </div>
            </div>
            <div id = "services">
                <span>OUR SERVICES</span>
                <span>Hotel Facilities</span>
                <div id = "pickUp" class = "facilities">
                    <span>Pick up & Drop</span>
                    <img :src = "pickUpCar">
                    <p>It is a long established fact that a reader will be <br>distracted
                by the readable content of a page</p>
                </div>
                <div id = "parkingSpace" class = "facilities">
                    <span>Parking Space</span>
                    <img :src = "parkingCar">
                    <p>Lorem Ipsum is simply dummy text of the <br>printing typersetting industry</p>
                </div>
                <div id = "roomServices" class = "facilities">
                    <span>Room Services</span>
                    <img :src = "roomServices">
                    <p>It is a long established fact that a reader will be<br> distracted
                by the readable content of a page</p>
                </div>
                <div id = "swimmingPool" class = "facilities">
                    <span>Swimming Pool</span>
                    <img :src = "swimmingPool">
                    <p>Lorem Ipsum is simply dummy text of the <br>printing typersetting industry</p>
                </div>
                <div id = "fibreInternet" class = "facilities">
                    <span>Fibre Internet</span>
                    <img :src = "internet">
                    <p>It is a long established fact that a reader will be<br> distracted
                by the readable content of a page</p>
                </div>
                <div id = "breakfast" class = "facilities">
                    <span>Breakfast</span>
                    <img :src = "breakfast">
                    <p>Lorem Ipsum is simply dummy text of the <br>printing typersetting industry</p>
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
                <div id = "insideWatch2"></div>
                <span>Watch video</span>
                <iframe></iframe>
                    <img :src = "arrowToTop" id = "arrowToTop5">
                    <img :src = "arrowToTop" id = "arrowToTop6">
                    <img :src = "arrowToTop" id = "arrowToTop7">
                    <img :src = "arrowToTop" id = "arrowToTop8">
                
            </div>
            <div id = "customers">
                <span>Our Happy Customers</span>
                <p>Know about our clients, we are a worldwide corporate brand</p>
                <div id = "firstComment" class = "comment">
                    <img :src = "warren">
                    <span>Wade Warren</span>
                    <span>Louis Vuitton</span>
                    <p>Necessary to deliver white glove<br>
                       fully managed campaigns that surpass<br>
                       industry benchmarks. Take your career<br>
                       to next level</p>
                </div>
                <div id = "secondComment" class = "comment">
                    <img :src = "florise">
                    <span>Albert Florise</span>
                    <span>Nintendo</span>
                    <p>Necessary to deliver white glove<br>
                       fully managed campgaigns that surpass<br>
                       industry benchmarks. Take your career<br>
                       to next level</p>
                       <img :src = "arrowToTopDarkBlue" id = "arrowToTopDarkBlueSmall1">
                        <img :src = "arrowToTopDarkBlue" id = "arrowToTopDarkBlueSmall2">
                        <img :src = "arrowToTopDarkBlue" id = "arrowToTopDarkBlueSmall3">
                        <img :src = "arrowToTopDarkBlue" id = "arrowToTopDarkBlueSmall4">
                        <img :src = "arrowToTopDarkBlue" id = "arrowToTopDarkBlueBig1">
                        <img :src = "arrowToTopDarkBlue" id = "arrowToTopDarkBlueBig2">
                        <img :src = "arrowToTopDarkBlue" id = "arrowToTopDarkBlueBig3">
                        <img :src = "arrowToTopDarkBlue" id = "arrowToTopDarkBlueBig4">
                </div>
                <div id = "thirdComment" class = "comment">
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

                <div id = "firstArticle">
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
                <div id = "secondArticle">
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
                <div id = "thirdArticle">
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
                <button id = "subscribeButton">subscribe</button>
                <img :src = "arrowToTopLightBlue" id = "arrowToTopLightBlueSmall1">
                <img :src = "arrowToTopLightBlue" id = "arrowToTopLightBlueSmall2">
                <img :src = "arrowToTopLightBlue" id = "arrowToTopLightBlueSmall3">
                <img :src = "arrowToTopLightBlue" id = "arrowToTopLightBlueSmall4">
                <img :src = "arrowToTopLightBlue" id = "arrowToTopLightBlueBig1">
                <img :src = "arrowToTopLightBlue" id = "arrowToTopLightBlueBig2">
                <img :src = "arrowToTopLightBlue" id = "arrowToTopLightBlueBig3">
                <img :src = "arrowToTopLightBlue" id = "arrowToTopLightBlueBig4">
            </div>
        </div>
        <FooterComponent id = "footerComponent"></FooterComponent>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

const ctx = document.querySelector('#marketChart').getContext('2d');
const marketChart = new CharacterData(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: ['+5%', '+10%', '-5%', '+10%', '+10%', '+5%', '-5%', '+15%', '+15%', '-10%', '-5%', '+10%']
    }
     
})
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
        luxury2: require('../assets/images/luxury2.png'),
        wallet: require('../assets/images/wallet.png'),
        arrowToTop: require('../assets/images/arrowToTop.png'),
        arrowToTopDarkBlue: require('../assets/images/arrowToTopDarkBlue.png'),
        arrowToTopLightBlue: require('../assets/images/arrowToTopLightBlue.png')    
        }
    },
    components: {
        HeaderComponent,
        FooterComponent
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
@mixin arrowToTop() {
    width: 36.96px;
    height: 36.96px;
    position: absolute;
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
@mixin rooms() {
        @include openSans;
        height: 427px;
        width: 350px;
        position: absolute;
        bottom: 0;
        border: 1px solid #596B86;
}
@mixin roomsIcons() {
        position: absolute;
        top: 337px;
}
@mixin roomsMiniSpan() {
        @include openSans;
        font-weight: 300;
        top: 331px;
        color: #727272;

}
@mixin roomsDescription() {
    .roomsImg {
        width: 352px;
        height: 264px;
        position: absolute;
        left: -1px;
        bottom: 169px;
    }
    span:nth-child(2) {
        @include openSans;
        font-size: 24px;
        line-height: 55px;
        color: #131313;
        top: 288px;
        left: 22px;
    }
    .resizeImg {
        @include roomsIcons;
        width: 11.25px;
        height: 12px;
        left: 22px;
    }
    span:nth-child(4) {
        @include roomsMiniSpan;
        left: 38px;
    }
    .bedImg {
        @include roomsIcons;
        width: 17.77px;
        height: 11.7px;
        left: 98px;
    }
    span:nth-child(6) {
        @include roomsMiniSpan;
        left: 120.44px;
    }
    .bathroomImg {
        @include roomsIcons;
        width: 17.08px;
        height: 11.87px;
        left: 173.32px;
    }
    span:nth-child(8) {
        @include roomsMiniSpan;
        left: 195px;
    }
    span:nth-child(9) {
        @include openSans;
        font-size: 24px;
        line-height: 55px;
        top: 358px;
        left: 22px;
        color: #384D6C;
    }
    span:nth-child(10) {
        @include openSans;
        font-size: 18px;
        line-height: 55px;
        top: 360px;
        left: 80px;
        color: #585858;
    }
}
@mixin numbersSpan() {
        font-family: $openSans;
        font-weight: 700;
        font-size: 50px;
        line-height: 55px;
        color: #596B86;
        position: absolute;
        top: 0;
}
@mixin numbersSpan2() {
        font-family: $averageSans;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: #939393;
        position: absolute;
        bottom: 0;
}
@mixin numbersHR() {
        width: 1.5px;
        height: 54px;
        background-color: #C3C3C3;
        position: absolute;
        top: 19px;
        border: transparent;
}
@mixin blog() {
        @include openSans;
        width: 350px;
        height: 523px;
        border: 1px solid #596B86;
        top: 137px;
        img:nth-child(1) {
            height: 318px;
            left: -1px;
            top: -3px;
            position: absolute;
        }
        img:nth-child(2) {
            width: 18.91;
            height: 21px;
            top: 335px;
            position: absolute;
            left: 26px;
        } 
        span:nth-child(3) {
            font-size: 15px;
            letter-spacing: 0.01em;
            color: #797979;
            position: absolute;
            top: 333px;
            left: 52px;
        }
        img:nth-child(4) {
            width: 19px;
            height: 16.88px;
            top: 335px;
            left: 171px;
            position: absolute;
        }
        span:nth-child(5) {
            font-size: 15px;
            letter-spacing: 0.01em;
            top: 333px;
            left: 196px;
            position: absolute;
            color: #797979;
        }
        span:nth-child(6) {
            font-size: 24px;
            line-height: 34px;
            color: #131313;
            top: 364px;
            left: 26px;
            position: absolute;
        }
        p:nth-child(7) {
            font-family: $averageSans;
            font-size: 15px;
            color: #9B9B9B;
            top: 405px;
            left: 26px;
            position: absolute;
        }
        span:nth-child(8) {
            font-size: 16px;
            color: #596B86;
            top: 483px;
            left: 26px;
            position: absolute;
            cursor: pointer;
        }
        img:nth-child(9) {
            height: 9.49px;
            width: 22.28px;
            top: 491px;
            left: 119px;
            position: absolute;
            cursor: pointer;
        }
}
@mixin arrowToTopDarkBlueSmall() {
    width: 27px;
    height: 27px;
    position: absolute;
    z-index: 2;
}
@mixin arrowToTopDarkBlueBig() {
    width: 72px;
    height: 72px;
    position: absolute;
    z-index: 2;
}
@mixin arrowToTopLightBlueSmall() {
    width: 40px;
    height: 40px;
    position: absolute;
    z-index: 2;
}
@mixin arrowToTopDarkLightBig() {
    width: 49.43px;
    height: 49.43px;
    position: absolute;
    z-index: 2;
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
#circle1 {
    @include circles;
    width: 10px;
    height: 10px;
    left: 37%;
    top: 589px;
}
#circle2 {
    @include circles;
    width: 21px;
    height: 21px;
    top: 194px;
    left: 49%;
}
#circle3 {
    @include circles;
    width: 41px;
    height: 41px;
    top: 99px;
    left: 83%;
}
#circle4 {
    @include circles;
    width: 27px;
    height: 27px;
    top: 598px;
    left: 85%;
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
#marketStatic {
    width: 208.11px;
    height: 163px;
    border-radius: 8px;
    border: transparent;
    position: absolute;
    top: 435px;
    left: 45%;
    background-color: #FFFFFF;
    z-index: 3;
    #marketStaticHeader {
        width: 106.08px;
        height: 18px;
        background-color: #C9D6E9;
        border-radius: 15px;
        position: absolute;
        top: 14px;
        left: 15.15px;
        #marketLittleCircle {
            width: 5.05px;
            height: 5px;
            background-color: #4C6487;
            position: absolute;
            top: 7px;
            left: 8.08px;
            border-radius: 360px;
            border: transparent;
        }
        span {
            @include openSans;
            font-size: 12px;
            line-height: 50px;
            color: #4C6487;
            top: -15px;
            left: 20.8px;
        }
    }
    #marketChart {
        width: 170px;
        height: 36px;
    }
    #courseOverview {
            @include openSans;
            font-size: 12px;
            line-height: 14px;
            color: #101828;
            position: absolute;
            top: 42px;
            left: 15.15px;
        }
        ul li {
            text-decoration: none;
            display: inline-block;
            @include openSans;
            font-size: 10px;
            position: relative;
            top: 122px;
            left: -25.15px;
            margin-left: 5px;
            color: #6D7589;
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
#payment {
    width: 114.16px;
    height: 124px;
    box-shadow: 0px 8px 28px rgba(84, 84, 84, 0.1);
    border-radius: 5px;
    border: transparent;
    position: absolute;
    top: 186px;
    left: 95%;
    background-color: #FFFFFF;
    span:nth-child(2) {
        font-family: 'Work Sans', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        color: #101828;
        position: absolute;
        top: 74px;
        left: 22.23px;
    }
    span:nth-child(3) {
        font-family: 'Work Sans', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 50px;
        color: #565656;
        position: absolute;
        top: 76px;
        left: 36.29px;
    }
    #wallet {
        width: 38.39px;
        height: 38px;
        background-color: #C9D6E9;
        border-radius: 360px;
        border: transparent;
        position: absolute;
        top: 19px;
        left: 38.39px;
        img {
            width: 17.26px;
            height: 15.37px;
            position: absolute;
            top: 11px;
            left: 11.11px;
        }
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
    #arrowToTop1 {
        @include arrowToTop;
        top: 0;
        left: 401.25px;
    }
    #arrowToTop2 {
        @include arrowToTop;
        top: 0;
        left: 438.21px;
    }
    #arrowToTop3 {
        @include arrowToTop;
        top: 36.96px;
        left: 401px;
    }
    #arrowToTop4 {
        @include arrowToTop;
        top: 36.96px;
        left: 438.21px;
    } 
    #checkInLabel {
        @include checkInLabel;
        top: 77px;
    }
    #checkIn {
        @include checkInInputs;
        top: 53px;
        ::-webkit-datetime-text,
        ::-webkit-datetime-month-field {
            color: #636461;
        }
    }
    #checkOutLabel {
        @include checkInLabel;
        top: 182px;
    }
    #checkOut {
        @include checkInInputs;
        top: 53px;
    }
    #roomsLabel {
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
    display: block;
    text-align: center;
    align-items: center;
    span:nth-child(1) {
        @include openSans;
        font-size: 45px !important;
        line-height: 55px;
        color: #353637;
        top: 0;
        left: 293px;
        display: block;
        text-align: center;
        align-items: center;
    }
    p {
        font-family: $averageSans;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.02em;
        color: #959595;
        position: relative;
        top: 73px;
    }
}
#deluxe {
    @include rooms;
    left: 0;
    @include roomsDescription;

}
#luxury {
    @include rooms;
    left: 380px;
    @include roomsDescription;
}
#single {
    @include rooms;
    left: 760px;
    @include roomsDescription;
}
#services {
    width: 1110px;
    height: 486px;
    position: relative;
    top: 1196px;
    display: block;
    margin: 0 auto;
    span:nth-child(1) {
        font-family: $averageSans;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.26em;
        color: #597193;
        display: block;
        text-align: center;
        align-items: center;
    }
    span:nth-child(2) {
        @include openSans;
        position: relative;
        font-size: 45px;
        line-height: 55px;
        color: #353637;
        display: block;
        text-align: center;
        align-items: center;
    }
}
.facilities {
    width: 350px;
    height: 158px;
    border: 1px solid #596B86;
    position: absolute;
    border-radius: 2px;
    span {
        @include openSans;
        font-size: 24px !important; 
        line-height: 55px !important;
        color: #131313 !important;
        top: 34px;
        left: 28px;
        letter-spacing: 0 !important;
    }
    img {
        width: 54px;
        height: 52.56px;
        position: absolute;
        top: 20px;
        left: 264px;
    }
    p {
        font-family: $averageSans;
        font-weight: 400;
        font-size: 14px !important;
        line-height: 24px;
        letter-spacing: 0.02em !important;
        color: #9B9B9B;
        position: absolute;
        top: 81px;
        left: 28px;
    }

}
#pickUp {
    left: 0;
    top: 140px;
}
#parkingSpace {
    left: 380px;
    top: 140px;
}
#roomServices {
    left: 760px;
    top: 140px;
}
#swimmingPool {
    left: 0;
    top: 328px;
}
#fibreInternet {
    left: 380px;
    top: 328px;
}
#breakfast {
    left: 760px;
    top: 328px;
}

#numbers {
    width: 946px;
    height: 92px;
    position: relative;
    top: 1396px;
    display: block;
    margin: 0 auto;

    span:nth-child(1) {
        @include numbersSpan;
        left: 0;
    }
    span:nth-child(2) {
        @include numbersSpan2;
        left: 0;
    }
    hr:nth-child(3) {
        @include numbersHR;
        left: 214px;
    }
    span:nth-child(4) {
        @include numbersSpan;
        left: 300px;
    }
    span:nth-child(5) {
        @include numbersSpan2;
        left: 300px;
    }
    hr:nth-child(6) {
        @include numbersHR;
        left: 455px;
    }
    span:nth-child(7) {
        @include numbersSpan;
        left: 553px;
    }
    span:nth-child(8) {
        @include numbersSpan2;
        left: 553px;
    }
    hr:nth-child(9) {
        @include numbersHR;
        left: 759px;
    }
    span:nth-child(10) {
        @include numbersSpan;
        left: 854px;
    }
    span:nth-child(11) {
        @include numbersSpan2;
        left: 854px;
    }
}
    #history {
        width: 1109px;
        height: 523px;
        position: relative;
        top: 1596px;
        display: block;
        margin: 0 auto;
        background-color: #F6FCFA;
        border-radius: 0px 6px 6px 0px;
        span:nth-child(1) {
            @include openSans;
            font-size: 40px !important;
            line-height: 55px !important;
            color: #353637;
            top: 85px;
            left: 62px;
        }
        p:nth-child(2) {
            font-family: $averageSans;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 0.02em;
            color: #686868;
            position: absolute;
            top: 150px;
            left: 62px;
        }
        p:nth-child(3) {
            font-family: $averageSans;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 0.02em;
            color: #686868;
            position: absolute;
            top: 259px;
            left: 62px;
        }
        #explore {
            width: 155px;
            height: 40px;
            background-color: #597193;
            box-shadow: 0px 4px 12px rgba(21, 21, 21, 0.15);
            border-radius: 4px;
            @include openSans;
            text-align: center;
            border: transparent;
            color: #FFFFFF;
            top: 398px;
            left: 62px;
            cursor: pointer;
        }
        #playVideo {
            width: 41px;
            height: 40px;
            border-radius: 360px;
            border: transparent;
            position: absolute;
            top: 398px;
            left: 270px;
            background-color: #597193;
            cursor: pointer;
        }
        #insideWatch2 {
            width: 20px;
            height: 20px;
            position: absolute;
            top: 408px;
            left: 283px;
            clip-path: polygon(0 0, 0% 100%, 99% 50%);
            border: transparent;
            cursor: pointer;
            z-index: 1;
            background-color: #EAEFF6;
        }
        span:nth-child(7) {
            @include openSans;
            font-weight: 400;
            color: #353637;
            top: 405px;
            left: 321px;
        }
        iframe:nth-child(8) {
            width: 569px;
            height: 523px;
            position: absolute;
            top: 0;
            left: 540px;
        }
    #arrowToTop5 {
        @include arrowToTop;
        top: 446px;
        left: 463.26px;
    }
    #arrowToTop6 {
        @include arrowToTop;
        top: 446px;
        left: 501.63px;
    }
    #arrowToTop7 {
        @include arrowToTop;
        top: 484.37px;
        left: 463.26px;
    }
    #arrowToTop8 {
        @include arrowToTop;
        top: 484.37px;
        left: 501.63px;
    } 
    }
    #customers {
        width: 1110px;
        height: 524px;
        position: relative;
        display: block;
        margin: 0 auto;
        top: 1796px;
        span:nth-child(1) {
            @include openSans;
            font-size: 40px;
            line-height: 50px;
            color: #353637;
            top: 0;
            left: 0;
        }
        p {
            font-family: $averageSans;
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
            letter-spacing: 0.045em;
            color: #959595;
            position: absolute;
            top: 30px;
            left: 0;
        }
        .comment {
            width: 350px;
            height: 389px;
            border: transparent;
            border-radius: 6px;
            background-color: #F6FCFA;
            
            img {
                width: 83px;
                height: 83px;
                position: absolute;
                top: 50px;
                left: 37px;
            }
            span:nth-child(2) {
                font-family: "work sans", sans-serif;
                font-weight: 500;
                font-size: 30px;
                line-height: 50px;
                color: #101828;
                position: absolute;
                top: 157px;
                left: 37px;
            }
            span:nth-child(3) {
                @include openSans;
                line-height: 50px;
                color: #606772;
                top: 194px;
                left: 37px;
            }
            p:nth-child(4) {
                font-family: "Merriweather", sans-serif;
                font-weight: normal;
                font-size: 14px;
                line-height: 26px;
                letter-spacing: 0.02em;
                color: #6D7589;
                position: absolute;
                top: 233px;
                left: 37px;
            }

        }
        #firstComment {
            position: absolute;
            bottom: 0;
            left: 0;
        }
        #secondComment {
            position: absolute;
            top: 100px;
            left: 380px;
            background-color: rgba(113, 136, 170, 0.55);
            span {
            color: #FFFFFF !important;
            }
            p {
                color: #FFFFFF !important;
                z-index: 3;
            }
            z-index: 1;
            #arrowToTopDarkBlueSmall1 {
                @include arrowToTopDarkBlueSmall;
                top: 0;
                left: 295px;
            }
            #arrowToTopDarkBlueSmall2 {
                @include arrowToTopDarkBlueSmall;
                top: 0;
                left: 323px;
            }
            #arrowToTopDarkBlueSmall3 {
                @include arrowToTopDarkBlueSmall;
                top: 28px;
                left: 295px;
            }
            #arrowToTopDarkBlueSmall4 {
                @include arrowToTopDarkBlueSmall;
                top: 28px;
                left: 323px;
            }
            #arrowToTopDarkBlueBig1 {
                @include arrowToTopDarkBlueBig;
                top: 242px;
                left: 0;
            }
            #arrowToTopDarkBlueBig2 {
                @include arrowToTopDarkBlueBig;
                top: 242px;
                left: 75px;
            } 
            #arrowToTopDarkBlueBig3 {
                @include arrowToTopDarkBlueBig;
                top: 317px;
                left: 0;
            } 
            #arrowToTopDarkBlueBig4 {
                @include arrowToTopDarkBlueBig;
                top: 317px;
                left: 75px;
            }  

        }
        #thirdComment {
            position: absolute;
            bottom: 0;
            left: 799px;
        }
    }
    #blog {
        width: 1110px;
        height: 660px;
        position: relative;
        display: block;
        margin: 0 auto;
        top: 1996px;
        span:nth-child(1) {
            font-family: $averageSans;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.26em;
            color: #7587A0;
            top: 0;
            left: 0;
        }
        span:nth-child(2) {
            @include openSans;
            font-size: 45px;
            line-height: 55px;
            color: #353637;
            top: 40px;
            left: 0;
        }
        #firstArticle {
            @include blog;
            left: 0;
        }
        #secondArticle {
            @include blog;
            left: 380px;
            
        }
        #thirdArticle {
            @include blog;
            left: 760px;
        }
    }
    #subscribe {
        width: 1110px;
        height: 383px;
        border-radius: 10px;
        background-color: #B1BED0;
        position: relative;
        display: block;
        margin: 0 auto;
        top: 2196px;
        span {
            font-family: $averageSans;
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0.155em;
            display: block;
            text-align: center;
            align-items: center;
            color: #FFFFFF;
            position: relative;
            top: 73px;
        }
        p {
            font-family: $openSans;
            font-weight: 400;
            font-size: 40px;
            line-height: 50px;
            display: block;
            text-align: center;
            align-items: center;
            color: #334052;;
            position: relative;
            top: 35px;
        }
        #email {
            width: 446px;
            height: 45px;
            box-shadow: 0px 2px 12px rgba(52, 52, 52, 0.15);
            border-radius: 6px;
            border: transparent;
            position: absolute;
            top: 265px;
            left: 332px;
            ::placeholder {
                @include openSans;
                line-height: 50px;
                padding-left: 19px;
                color: #A2A2A2;
            }
        }
        #subscribeButton {
            width: 107px;
            height: 49px;
            background: #889CB9;
            box-shadow: -3px 2px 12px rgba(0, 0, 0, 0.15);
            border-radius: 6px;
            color: #FFFFFF;
            border: transparent;
            cursor: pointer;
            position: absolute;
            top: 265px;
            left: 675px;
        }
        #arrowToTopLightBlueSmall1 {
            @include arrowToTopLightBlueSmall;
            top: 0;
            left: 1031px;
        }
        #arrowToTopLightBlueSmall2 {
            @include arrowToTopLightBlueSmall;
            top: 0;
            left: 1071px;
        }
        #arrowToTopLightBlueSmall3 {
            @include arrowToTopLightBlueSmall;
            top: 40px;
            left: 1031px;
        }
        #arrowToTopLightBlueSmall4 {
            @include arrowToTopLightBlueSmall;
            top: 40px;
            left: 1071px;
        }
        #arrowToTopLightBlueBig1 {
            @include arrowToTopDarkLightBig;
            top: 285px;
            left: 0;
        }
        #arrowToTopLightBlueBig2 {
            @include arrowToTopDarkLightBig;
            top: 285px;
            left: 49.43px;
        }
        #arrowToTopLightBlueBig3 {
            @include arrowToTopDarkLightBig;
            top: 334.43px;
            left: 0;
        }
        #arrowToTopLightBlueBig4 {
            @include arrowToTopDarkLightBig;
            top: 334.43px;
            left: 49.43px;
        }

    }
#footerComponent {
    position: relative;
    left: 0;
    top: 2796px;
}


</style>