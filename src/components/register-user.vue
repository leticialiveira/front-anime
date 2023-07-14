<script setup>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { ref } from 'vue';
import axios from 'axios';

let data = ref({
  email: "",
  user: "",
  phone: "",
  password: ""
})

async function Register(){
  await axios.post("http://localhost:3000/app/user", data.value)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  console.log(data.value);
}



</script>

<template>
  <div class="body">

    <div class="card-login">
      
    <div class="title">
      <h1>Anime</h1>
    </div>

    <form @submit.prevent="Register" class="login">
      <h2>Cadastro de novo usuário</h2>

      <div class="form">
        <label for="email">Email *</label>
        <InputText v-model="data.email" date="email"  placeholder="*******@***.***" />
      </div>

      <div class="form">
        <label for="user">Usuário * </label>
        <InputText id="user" v-model="data.user" placeholder="Ex: leticialiveira"/>
      </div>

      <div class="form">
        <label for="phone">Telefone *</label>
        <InputText v-model="data.phone"  placeholder="(99) 9 9999-9999" />
      </div>

      <div class="form">
        <label for="password">Senha *</label>
        <Password v-model="data.password" :feedback="false" placeholder="*******"/>
      </div>
      <button type="submit">
        REGISTRAR</button>
      <div class="register">
        <p>Ainda não tem uma conta? </p>
        <a href="">Cadastre aqui!</a>
      </div>
    </form>
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
  overflow: hidden;
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
  width: 35%;
  height: 4vh;
  border: solid 0.1px rgba(36, 122, 139, 1);
  border-radius: 10px;
  background-color: #FFC85E;
  color: #636363;
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
