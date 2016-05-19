var newNote = new NotesApplication("Emjay");

describe("Note Application create Method", function() {
    it("should check if the create method is a property of notes Application", function(){
    	expect(NotesApplication.prototype.hasOwnProperty('create')).toBe(true);
    });
    
    it("should check if the note_content is a string", function() {
    	newNote.create("This is Andela");
        expect(newNote.notes.pop()).toEqual("This is Andela");
    });
    
    it("should check if a note_content is empty", function () {;
    	newNote.create("");
        expect(newNote.notes.length).toEqual(0);
    });

    it("should check if a note_content is not a string", function () {
        expect(newNote.create(111)).toBe("Please enter a valid note content");
    });

});


describe("Note Application listNotes Method", function() {
    it("should check if the listNotes method is a property of notes Application", function(){
    	expect(NotesApplication.prototype.hasOwnProperty('listNotes')).toBe(true);
    });
    
    it("should check if any note has been previously created in the notes array", function() {
    	newNote.create("DRY code matters!!!");
        expect(newNote.notes.length).toBeGreaterThan(0);
    });
    
    it("should check if the notes array is empty", function () {
    	newNote.notes.splice(0, 1);
        expect(newNote.listNotes()).toEqual("The note is empty for now!");
    });


});


describe("Note Application getNote Method", function() {
	it("should check if the getNote method is a property of notes Application", function(){
    	expect(NotesApplication.prototype.hasOwnProperty('getNote')).toBe(true);
    });

    it("should check if the note id is a number", function () {
        expect(newNote.getNote("a")).toBe("Please enter a valid note ID");
    });
    
    it("should check if the note id exists", function() {
    	newNote.create("At Andela bootcamp");
        expect(newNote.notes.pop()).toEqual("At Andela bootcamp");
    });

    it("should check if the note id exists", function() {
    	newNote.create("At Andela bootcamp");
        expect(newNote.getNote(9)).toBe("Please enter a valid note ID");
    });

});


describe("Note Application search Method", function() {
	it("should check if the search method is a property of notes Application", function(){
    	expect(NotesApplication.prototype.hasOwnProperty('search')).toBe(true);
    });

    it("should check if search text is found", function () {
    	newNote.create("JS is the MEAN");
    	newNote.create("bootcamp XVI LOS Nigeria");
        expect(newNote.search("the")).toEqual("Note ID: " + "1" + "\n" + newNote.notes[1] + "\n\nBy Author: " + newNote.author + "\n" + line);
    });
    
    it("should check if search text is valid", function() {
    	newNote.create("At Andela bootcamp");
        expect(newNote.search(0000)).toEqual("Please enter a valid SEARCH keyword");
    });

    it("should check if search text is not found", function() {
    	newNote.create("At Andela bootcamp");
        expect(newNote.search("not there")).toBe("Sorry, Search term not found!");
    });
});


describe("Note Application deleteNote Method", function() {
	it("should check if the delete method is a property of notes Application", function(){
    	expect(NotesApplication.prototype.hasOwnProperty('deleteNote')).toBe(true);
    });

    it("should check if note_id is a valid integer", function () {
    	newNote.create("JS is the MEAN");
    	newNote.create("bootcamp XVI LOS Nigeria");
        expect(newNote.deleteNote("gdgfd")).toBe("Note ID should be an Integer");
    });
    
    it("should check if note is actually deleted", function() {
    	newNote.create("Testing for deletion");
    	newNote.deleteNote(0);
        expect(newNote.notes.pop()).toEqual("Testing for deletion");
    });
       
});


describe("Note Application edit Method", function() {
	it("should check if the edit method is a property of notes Application", function(){
    	expect(NotesApplication.prototype.hasOwnProperty('edit')).toBe(true);
    });

    it("should comfirm note id and edit the note", function () {
    	newNote.create("JS is the MEAN");
    	newNote.create("bootcamp XVI LOS Nigeria");
        expect(newNote.edit(1, "nbxvm")).toBe("Note has been updated");
    });
    
    it("should check if the note id exist and return not found", function() {
    	newNote.create("Testing for deletion");
        expect(newNote.edit(9, "xvxvcgdffd")).toEqual("Note ID not found!");
    });
});