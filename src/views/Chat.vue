<template>
  <div>
    <div class="scrollbox">
      <div v-for="(message,i) in messages" :key="i">
        <img :src="message.foto" style="width: 35px; margin-right:2%" />
        <span class="user">{{message.name}}:</span>
        {{message.text}}
      </div>
    </div>
    <div class="wrtingDiv">
      <input type="text" v-model="message" />
      <v-btn @click="sendMessages">Send</v-btn>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "ChatPage",
  data() {
    return {
      message: "",
      messages: []
    };
  },
  methods: {
    getMessages() {
      firebase
        .database()
        .ref("chat")
        .on("value", data => {
          console.log(data), console.log(data.val());
          this.messages = data.val();
        });
    },
    sendMessages() {
      console.log(firebase.auth().currentUser);
      let obj = {
        text: this.message,
        name: firebase.auth().currentUser.displayName,
        foto: firebase.auth().currentUser.photoURL
      };
      firebase
        .database()
        .ref("chat")
        .push(obj);
    }
  },
  created() {
    this.getMessages();
  }
};
</script>

<style>
.wrtingDiv {
  position: fixed;
  bottom: 0;
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 2.5%;
}
.wrtingDiv > input {
  flex-grow: 2;
  border: 1.5px solid lightblue;
  margin-right: 2.5%;
  padding: 2.2%;
  border-radius: 5%;
}
.scrollbox {
  height: 530px;
  overflow: scroll;
}
.user {
  font-weight: bold;
}
</style>