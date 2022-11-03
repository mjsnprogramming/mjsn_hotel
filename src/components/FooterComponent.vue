<template>
    <div class = "footer">
        <div id = "footerInfo">
            <div id = "footerMain">
                <div id = "footerLogo">
                    <div class = "rectangle"></div>
                    <div class = "rectangle"></div>
                    <div class = "rectangle"></div>
                    <span>HOTEL</span>
                    </div>
                    <p>Itawa is a responsive real estate landing page<br>
                    template. Itawa is a landing page template. Itawa<br>
                    template.</p>
                    <span>Contact Us</span>
                    <img :src = "destination">
                    <span>123 Business Centre London SW1A 1AA</span>
                    <img :src = "phone">
                    <span>+1 0000 000 00</span>
                    <img :src = "email">
                    <span>info@businessname.com</span>
                    <span>Follow Us</span>
                    <div id = "facebook">
                        <img :src = "facebook">
                    </div>
                    <div id = "instagram">
                        <img :src = "instagram">
                    </div>
                    <div id = "twitter">
                        <img :src = "twitter">
                    </div>
                    <p>Itawa is a responsive real estate landing page<br>
                    template. Itawa is a landing page template. Itawa<br>
                    template.</p>
            </div>
            <div id = "footerBottom">
                &copy;
                <span>HOTEL Official 2022</span>
                <ul>
                    <li>Privacy policy</li>
                    <li>Cookies</li>
                    <li>Terms of service</li>
                </ul>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            destination: require('../assets/images/destination.png'),
            phone: require('../assets/images/phone.png'),
            email: require('../assets/images/email.png'),
            facebook: require('../assets/images/facebook.png'),
            instagram: require('../assets/images/instagram.png'),
            twitter: require('../assets/images/twitter.png')
        }
    }
    }
</script>

<style lang = scss>
$averageSans: "Average Sans", sans-serif;
$openSans: "Open Sans", sans-serif;
@mixin contactImg() {
        width: 12.77px;
        height: 18.24px;
        position: absolute;
        left: 424px;
}
@mixin contactSpan() {
        font-family: $averageSans;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: #A9A9A9;
        position: absolute;
        left: 455px;
}
@mixin footerIcons() {
        width: 31.06px;
        height: 31.06px;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        color: #D9D9D9;
        position: absolute;
        top: 116px !important;
        box-sizing: border-box;
        cursor: pointer;
}
@mixin imgPosition() {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
}
#footerInfo {
    width: 100%;
    height: 415px;
    position: absolute;
    bottom: 0;
    left: 0;
}
#footerMain {
    width: 1198px;
    height: 278px;
    position: relative;
    top: 0;
    display: block;
    margin: 0 auto;
    border: 1px solid #7587A0;
   
    p:nth-child(2) {
        font-family: $averageSans;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: #A9A9A9;
        position: absolute;
        top: 122px;
        left: 44px;
    }
    span:nth-child(3) {
        font-family: $openSans;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: #131313;
        position: absolute;
        top: 74px;
        left: 424px;
    }
    img:nth-child(4) {
        @include contactImg;
        top: 126px;
    }
    span:nth-child(5) {
        @include contactSpan;
        top: 120px;
    }
    img:nth-child(6) {
        @include contactImg;
        top: 170px;
        width: 16px;
        height: 15px;
    }
    span:nth-child(7) {
        @include contactSpan;
        top: 163px;
    }
    img:nth-child(8) {
        @include contactImg;
        top: 213px;
        width: 17.23px;
        height: 10.93px;
    }
    span:nth-child(9) {
        @include contactSpan;
        top: 203px;
    }
    span:nth-child(10) {
        font-family: $openSans;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: #131313;
        position: absolute;
        top: 74px;
        left: 863px;
    }
    p:nth-child(14) {
        font-family: $averageSans;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #A9A9A9;
        position: absolute;
        top: 152px;
        left: 863px;
    }

}
#footerLogo {
    position: absolute;
    top: 44px;
    left: 44px;
    span {
        position: absolute;
        width: 87px;
        height: 34px;
        left: 39.40px;
        top: 32px;
        color: #597193;
        font-size: 25px;
        cursor: pointer;
    } 
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
#facebook {
    @include footerIcons;
    left: 863.01px !important;
    img {
        @include imgPosition;
    }
}
#instagram {
    @include footerIcons;
    left: 908.98px !important;
    img {
        @include imgPosition;
    }
}
#twitter {
    @include footerIcons;
    left: 954.95px !important;
    img {
        @include imgPosition;
    }
}
#footerBottom {
    width: 100%;
    height: 60px;
    background-color: #B1BED0;
    color: rgba(0, 0, 0, 0.42);
    position: absolute;
    bottom: 0;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    span {
        position: absolute;
        top: 17px;
        left: 165px;
    }
    ul li{
        display: inline-block;
        margin-left: 20px;
        position: relative;
        top: -25px;
        left: 1075px;
        text-decoration: none;
        cursor: pointer;
    }
}
</style>
