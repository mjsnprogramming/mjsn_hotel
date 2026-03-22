<template>
  <section id="hero">

    <p class="hero-title">
      Discover a hotel<br>
      that defines a new <br>dimension of luxury
    </p>

    <p class="hero-desc">
      Lorem ipsum is simply dummy text of the printing and <br>typesetting industry.
      Lorem ipsum has been the industry's<br> standard dummy.
    </p>

    <div id="getStarted">
      <button id="startedButton">Get Started</button>
      <button id="watchButton"></button>
      <div id="insideWatch"></div>
      <span id="watchVideo">Watch video</span>
    </div>

    <!-- dekoracje -->
    <div id="circle1" class="circle"></div>
    <div id="circle2" class="circle"></div>
    <div id="circle3" class="circle"></div>
    <div id="circle4" class="circle"></div>

    <!-- obraz -->
    <div id="circleBig">
      <div class="circleBig"></div>
      <img id="hotelImg" :src="hotel">
    </div>

  </section>
</template>

<style lang="scss">

#hero {
  width: 90%;
  background: #EAEFF6;
  position: relative;
  padding: 120px 5% 80px 5%;
}

/* TEKST */
.hero-title {
  position: relative;
  font-size: 45px;
  line-height: 55px;
  color: #3D4550;
  max-width: 500px;
}

.hero-desc {
  position: relative;
  margin-top: 20px;
  font-size: 18px;
  color: #939393;
}

/* CTA */
#getStarted {
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

#startedButton {
  width: 136px;
  height: 40px;
}

#watchButton {
  width: 41px;
  height: 40px;
  margin-left: 20px;
}

#insideWatch {
  position: absolute;
  left: 165px;
  top: 10px;
}

#watchVideo {
  margin-left: 10px;
}

/* OBRAZ (tu zostawiamy absolute dla designu) */
#circleBig {
  position: absolute;
  right: 5%;
  top: 80px;
  width: 500px;
}

#hotelImg {
  width: 100%;
}

/* KROPKI – NIE RUSZAMY */
.circle {
  position: absolute;
  background-color: #C9D6E9;
  border-radius: 50%;
}

#circle1 { width: 10px; height: 10px; left: 35%; top: 80%; }
#circle2 { width: 20px; height: 20px; left: 50%; top: 20%; }
#circle3 { width: 40px; height: 40px; right: 10%; top: 10%; }
#circle4 { width: 25px; height: 25px; right: 5%; bottom: 10%; }

@media (max-width: 768px) {

  #hero {
    text-align: center;
    padding: 80px 20px;
  }

  #circleBig {
    position: relative;
    right: auto;
    top: auto;
    margin: 40px auto 0;
  }

  #getStarted {
    justify-content: center;
  }

}
</style>

<script>
import hotel from '../assets/images/hotel.png'

export default {
  name: 'HeroSection',
  data() {
    return {
      hotel
    }
  }
}
</script>