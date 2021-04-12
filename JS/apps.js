



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
    /* create button */
    function newNoe() {
        let t = document.querySelector(".input");
        let newDiv = document.createElement("div");
        let content = document.createTextNode("bruh")
        newDiv.appendChild(content)
        let currentDiv = document.getElementsByClassName("input")
        document.body.insertBefore(newDiv, currentDiv);

        
    }
    
    function newote() {
        let newNote = document.createElement("TEXTAREA");
        newNote.classList.add("textarea");
        let save = document.createElement("BUTTON");
        save.classList.add("save-cancel-button");
        let cancel = document.createElement("BUTTON");
        cancel.classList.add("save-cancel-button")
        
      }

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
        /* Creates a note-taking area*/
            /* Can be a textarea or div */


    
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