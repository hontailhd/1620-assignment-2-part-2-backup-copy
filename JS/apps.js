



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
    function newNote() {
        document.querySelector(".example").style.backgroundColor = "red";
        
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