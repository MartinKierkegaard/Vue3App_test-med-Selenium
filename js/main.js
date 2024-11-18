
const app = Vue.createApp({
    data() {
        return {
            introName: 'Navigate your webapp using C#',
            buttonpressed: {
                notes: 'this button is pressed',
                completed: false
            }
        }
    },
    // TODO: Add methods
    methods: {
        pressed() {
            this.buttonpressed.completed = true;
        },
        changecolour(){

           let a = document.getElementById("testButton2").getAttribute("class");
           console.log(a) 
      
          if(a=="button")
            document.getElementById("testButton2").setAttribute("class","button1");
          else
            document.getElementById("testButton2").setAttribute("class","button");     
        }
    }
});