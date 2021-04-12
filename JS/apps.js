



/* function(s) for theme changes */
/* set the inital theme to light mode */
function setTheme() {
    var element = document.body;
    element.classList.toggle("light-mode");
} 

/* function for changing between themes (dark/light) */
function themeChange() {
    var element = document.body;
    element.classList.toggle("dark-mode");
} 

 
/* function to add a new note */
    /* creates teaxtarea and buttons */
    function newNote() {
            let newNote = document.querySelector(".input")
            newNote.insertAdjacentHTML("beforeend", `<div class="input">
            <textarea class="textarea" id="notebox" name="notebox" rows="11" cols="76">
            Enter note here.
            </textarea>
  
            <ul>
            <li class="row">
                  <button class="save-cancel-button">
                    Delete
                  </button>                    
            </li>                    
            <li class="row">
                <button class="save-cancel-button">
                Save
                </button>
            </li>
            </ul>        
            </div>`);
          
      }


/*selects body from the key given and shows it to user */
function openNote(btn) {

}

var noteArray = []
var titleArray = []

function save() {
    let savedNote = document.getElementById("notebox").value;
    let title = window.prompt("Enter note title: ");
    noteArray[title] = savedNote;
    let noteLink = document.createElement("BUTTON");
    noteLink.innerHTML = title;
    noteLink.onclick = openNote(noteLink);
    titleArray.push(noteLink);

    console.log(noteArray);
    console.log(noteArray.keys());
    console.log(titleArray);
    let I = document.createElement("BUTTON");
    I.innerHTML = title;
    console.log(title);
    
}






        /* Creates a save button*/
            /* saves note in note taking area when clicked*/

            /* Removes note takeing area */

            /* Removes save button*/

            /* Removes cancel button */

            /* call function askNoteTitle */
            

            /* Ask for unique name */        

        /* Creates a cancel button*/

            /* Removes text not taking area*/
                /* for the sake of resetting the note area */

            /* Removes note takeing area */

            /* Removes save button*/

            /* Removes cancel button */



/* function askNoteTitle */     
/* function to ask user for note-title */
                
    /* check if note-title for unique name */
        /* A loop will be required */    

        /* id unique => call function c*/

        /* id not unqiue => send an error message to user (not unqiue name) */


/* function c*/
/* function to add note into array */
    /* ask for note-title */

    /* note-title is added to noteArray as a button*/
        /* Ask nathan how to */

    /* the note-title turns into a button */
        /* button displays note with the note-title */
        
        /* Button shows close-note-button */
            /* close-note-button hides the displayed-note */
             
            /* close-not-button hides close-note-button */

/* function scaleTextArea */
    /* scales the text area according to window size */
        /* Ask nathan how or just google search */