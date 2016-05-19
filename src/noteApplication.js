function NotesApplication(author){
	this.author=author;
	this.notes=[];
	line="-------***************-----------" //to beautify the output


	// validate NoteApplication object properties
	NotesApplication.prototype.validate = {
		isNote: function (arg) {
			return (arg.length > 0) && (typeof arg === "string");
		},
		
		isNoteId: function (arg, argList) {
			return (typeof arg === "number") && (arg > -1) && (arg < argList.length);
		},

		isList: function (arg) {
			return (arg.length > 0) && (Array.isArray(arg));
		}
	}; 


	// validate note application return status
	NotesApplication.prototype.status = {
		withValue: function(note, i) {
			return line + "\nNote ID: " + i + "\n" + note + "\n\nBy Author: " + this.author + "\n";
		},

		empty: function () {
			return "The note is empty for now!";
		},

		invalidNote: function () {
			return "Please enter a valid note content";
		},

		invalidNoteId: function () {
			return "Please enter a valid note ID";
		},

		added: function(){
			return "Your new note has been added!";
		}
	}
	

	// print the results using console.log
	NotesApplication.prototype.print = function(arr) {
		var result = "Displaying the results: \n" + arr.reduce(function(a, b) {
			return a + b;
		});
		console.log(result);
		return true;
	}
	


	// refactored method to create note
	NotesApplication.prototype.create = function(note_content){
		return (this.validate.isNote(note_content) && this.notes.push(note_content) && this.status.added()) || this.status.invalidNote();		
	}


	// refactored method to list notes
	NotesApplication.prototype.listNotes = function(){
		return (this.validate.isList(this.notes) && this.print(this.notes.map(this.status.withValue.bind(this)))) || this.status.empty();
	}
	

	// refactored method to get note
	NotesApplication.prototype.getNote = function(note_id){
		return (this.validate.isNoteId(note_id, this.notes) && this.print([this.notes[note_id]].map(this.status.withValue.bind(this))))
		|| this.status.invalidNoteId();

	}


	// method to search note
	NotesApplication.prototype.search = function(search_text){
		textFound=false;
		console.log("Displaying Search results: \n")
		if ((search_text.length > 0) && (typeof search_text === "string")){
			for (var i=0; i < this.notes.length; i++){
				if (this.notes[i].includes(search_text)){
					textFound = true
					return "Note ID: " + i + "\n" + this.notes[i] + "\n\nBy Author: " + this.author + "\n" + line;
				}
			}
		} else {
			return "Please enter a valid SEARCH keyword";
		}
		if (textFound === false){
			return "Sorry, Search term not found!";
		}
	}


	// method to delete note
	NotesApplication.prototype.deleteNote = function(note_id){
		if ((note_id > -1) && (note_id < this.notes.length)){
			this.notes.splice(note_id, 1);
			return "The Note has been deleted!";
		} else if (typeof note_id !== "number"){
			return "Note ID should be an Integer"
		} else {
			return "Note ID not found!";
		}
	}


	// method to edit note
	NotesApplication.prototype.edit = function(note_id, new_content){
		if (typeof note_id === "number"){
			if (typeof new_content === "string"){
				if ((note_id > -1) && (note_id < this.notes.length)){
					this.notes[note_id] = new_content;
					return "Note has been updated";
				} else {
					return "Note ID not found!";
				}
			} else {
				return "New note content should be a string"
			}
		} else {
			return "Note ID should be an integer"
		}
	}

}