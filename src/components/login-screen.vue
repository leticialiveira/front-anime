<script setup>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div class="body">

    <div class="card-login">
      <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div class="title">
      <h1>Anime</h1>
    </div>

    <div class="login">
      <h2>Login</h2>

      <div class="form">
        <label for="username">Usuário</label>
        <InputText id="username" v-model="value" />
      </div>

      <div class="form">
        <label for="password">Senha</label>
        <Password v-model="value" :feedback="false" />
      </div>

      <RouterLink to="/anime"><button>
          ENTRAR</button></RouterLink>

      <div class="register">
        <p>Ainda não tem uma conta? </p>
        <RouterLink to="/cadastro"><a href="">Cadastre aqui!</a></RouterLink>
      </div>
    </div>
    
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Megrim&family=Rubik+Pixels&family=Rye&family=Unna&display=swap');

.body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
}

.card-login {
  background-color: #151515;
  width: 20%;
  height: auto;
  border: solid 1px #FFC85E;
  position: relative;
}

.card-login span:nth-of-type(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, transparent, rgba(36, 122, 139, 1));
  animation: animar1 5s linear infinite;
}

@keyframes animar1 {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.card-login span:nth-of-type(2) {
  position: absolute;
  top: 0;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(36, 122, 139, 1));
  animation: animar2 linear infinite 5s;
  animation-delay: 2.5s;
}

@keyframes animar2 {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);

  }
}

.card-login span:nth-of-type(3) {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to left, transparent, rgba(36, 122, 139, 1));
  animation: animar3 5s infinite linear;
}

@keyframes animar3 {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.card-login span:nth-of-type(4) {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to top, transparent, rgba(36, 122, 139, 1));
  animation: animar4 5s infinite linear;
  animation-delay: 2.5s;
}

@keyframes animar4 {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(-100%);
  }
}

.title {
  background-color: rgba(36, 122, 139, 1);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title h1 {
  font-family: 'Megrim', cursive;
  color: #FFFFFFFF;
}

.login {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  color: #FFFFFFFF;
  font-family: 'Unna', serif;
}

.form {
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: column;
  width: 100%;
}


/* input {
  height: 5vh;
  width: 80%;
  background: #848484;
  border: solid 1px #FFC85E;
  border-radius: 4px;
  color: #FFFFFF;
} */

/* input:focus {
  border: solid 1px rgba(36, 122, 139, 1);
  outline: none;
}
 */

.form Password {
  background: #FFC85E;
}

button {
  width: 120%;
  height: 4vh;
  border: solid 0.1px #636363;
  border-radius: 10px;
  background-color: #FFC85E;
  color: #636363;
}

button:active {
  border: solid 1px white;
  color: rgba(36, 122, 139, 1);
}

.register {
  background-color: #373737;
  height: 8.5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  color: #FFFFFF;
  width: 100%;
}

.register a {
  color: #FFC85E;
}
</style>