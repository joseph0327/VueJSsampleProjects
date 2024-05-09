<script setup>
import {ref} from "vue";

const showModal = ref(false);
const newNote = ref("")
const notes = ref([])
const errorMessage = ref("")
let editedNoteId = ref(null);

function getRandomColor() {
  const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}

const addNote = () => {
  if (newNote.value.length < 10 ){
    return errorMessage.value = "Please enter 10 characters or more."
  }
  
  if (editedNoteId.value !== null) {
    const editedNoteIndex = notes.value.findIndex(note => note.id === editedNoteId.value);
    if (editedNoteIndex !== -1) {
      notes.value[editedNoteIndex].text = newNote.value;
      notes.value[editedNoteIndex].editedDate = new Date();
      editedNoteId.value = null; 
    }
  } else {
    notes.value.push({
      id: Math.floor(Math.random() * 100000),
      text: newNote.value,
      color: getRandomColor(),
      date: new Date()
    });
  }
  showModal.value = false;
  newNote.value = "";
}

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};

const editNote = (id) => {
  const noteToEdit = notes.value.find(note => note.id === id);
  if (noteToEdit) {
    newNote.value = noteToEdit.text;
    editedNoteId.value = id; 
    showModal.value = true;
  }
};

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  return new Date(date).toLocaleDateString('en-US', options);
};
</script>

<template>
  <div class="overlay" v-if="showModal">
    <div class="modal" >
      <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
      {{ errorMessage }}
      <button @click="addNote">Add Note...</button>
      <button class="closebtn" @click="showModal = false">Close</button>
    </div>
  </div>
  <main>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button class="plusbtn" @click="showModal = true">+</button>
      </header>
      <div class="card-container">
        <div v-for="note in notes" :key="note.id" class="card" :style="{backgroundColor:note.color}">
          <div class="EditDeleteContainer">
            <div class="editCard" @click="editNote(note.id)">edit</div>
            <div class="deleteCard" @click="deleteNote(note.id)">delete</div>
          </div>
          <p class="main-text">{{note.text}}</p>
          <p class="date">Created on: {{ formatDate(note.date) }}</p>
          <p class="date" v-if="note.editedDate">Last edited on: {{ formatDate(note.editedDate) }}</p>
        </div>
      </div>
    </div>
  </main>
</template>



<style scope>
  main {
    height: 100vh;
    width: 100vw;
    
  } 
  .card-container{
    display: flex;
    flex-wrap: wrap
  }
  .container {
    background-color: aliceblue;
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
  }

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

  header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: antiquewhite;
    border-radius: 100%;
    color: black;
    font-size: 20px;
  }

  .card {
    width: 225px ;
    height: 225px ;
    background-color: rgb(235, 221, 185);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 10px 10px;
  }
  .date{
    font-size: 8.5px;
    font-weight: bold;
  }
  .main-text {
    font-weight: bold;
    text-align: top;
    height: 80%;
  }
  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(216, 193, 134);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 90%;
  }

  .modal{
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: rgb(0, 162, 255);
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
  }
  .modal .closebtn {
    background-color: rgb(255, 78, 78);
    margin-top: 7px
  }

  .modal p {
    margin-left: auto;
    font-size: 20px;
    z-index: 100000;
    cursor: pointer;
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 5px;
    font-size: 20px;
  }
  .EditDeleteContainer {
    display: flex; 
    justify-content:flex-end; 
  
  }
  
  .deleteCard,
  .editCard {
    font-size: 12px; 
    cursor: pointer;
    padding: 5px 10px; 
    border-radius: 5px; 
    transition: background-color 0.3s ease; 
    width: 21%;
    text-align: center;
    padding: 0 5px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    background-color: rgba(0, 255, 255, 0.351)
  }

  .deleteCard:hover,
  .editCard:hover {
    background-color: rgba(255, 0, 0, 0.2); 
  }

  .plusbtn:hover {
    background-color: rgba(102, 255, 0, 0.2); 
  }

  .editCard {
    margin-right: 5px; 
  }
</style>