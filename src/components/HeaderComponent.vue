<template>
  <header class="header">
    <div class="header__inner">
      
      <!-- LOGO -->
      <div class="logo">
        <div class="logo-bars">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="logo-text">HOTEL</span>
      </div>

      <!-- DESKTOP MENU -->
      <nav class="nav">
        <a href="/">Home</a>
        <a href="/">Branch</a>
        <a href="/">Search</a>
        <a href="/">About</a>
        <a href="/">Pages</a>
        <a href="/">Blog</a>
      </nav>

      <!-- BUTTON -->
      <button class="btn">Reservation</button>

      <!-- BURGER -->
      <div class="burger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- MOBILE MENU -->
      <div v-if="isMenuOpen" class="mobile-menu">
        <div class="mobile-top">
          <span>HOTEL</span>
          <button @click="toggleMenu">X</button>
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="/">Branch</a>
          <a href="/">Search</a>
          <a href="/">About</a>
          <a href="/">Pages</a>
          <a href="/">Blog</a>
        </nav>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? "hidden" : "auto"
    }
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

/* HEADER (ograniczona szerokość!) */
.header {
  width: 90%;
  background: #eaeff6;
  padding: 0 40px;
}

/* FLEX */
.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-bars {
  display: flex;
  align-items: flex-end;
  gap: 4px;

  span {
    width: 6px;
    display: block;
  }

  span:nth-child(1) {
    height: 15px;
    background: #aac7f0;
  }

  span:nth-child(2) {
    height: 25px;
    background: #597193;
  }

  span:nth-child(3) {
    height: 35px;
    background: #353637;
  }
}

.logo-text {
  font-size: 22px;
  font-weight: bold;
  color: #597193;
}

/* NAV */
.nav {
  display: flex;
  gap: 30px;

  a {
    text-decoration: none;
    color: #597193;
  }
}

/* BUTTON */
.btn {
  background: #597193;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

/* BURGER */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background: #597193;
  }
}

/* MOBILE MENU */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  padding: 20px;
  z-index: 100;

  nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
  }
}

.mobile-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 📱 MOBILE */
@media (max-width: 1460px) {
  .header {
    width: 100%;
  }
}
@media (max-width: 900px) {
  .nav {
    display: none;
  }

  .btn {
    display: none;
  }

  .burger {
    display: flex;
  }
}

</style>