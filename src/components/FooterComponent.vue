<template>
    <div class = "footer">
        <div id = "footerInfo">
            <div id = "main">
                    <div class = "rectangle"></div>
                    <div class = "rectangle"></div>
                    <div class = "rectangle"></div>
                    <span>HOTEL</span>
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
            destination: require('../assets/images/facebook.png'),
            phone: require('../assets/images/phone.png'),
            email: require('../assets/images/email.png'),
            facebook: require('../assets/images/facebook.png'),
            instagram: require('../assets/images/instagram.png'),
            twitter: require('../assets/images/twitter.png')
        }
    }
    }
</script>

<style>

</style>