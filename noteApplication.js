function NotesApplication(author){
	this.author=author;
	this.notes=[];
	line="-------***************-----------"



	this.create = function(note_content){
		if (note_content.length > 0){
			this.notes.push(note_content);
			console.log("Your new note has been added!"
		} else {
			console.log("Your note is empty");
		}
		
	}


	this.listNotes = function(){
		if (this.notes.length>0){
			for (var i=0; i < this.notes.length; i++)
				console.log("Note ID: " + i + "\n" + this.notes[i] + "\n\nBy Author: " + this.author + "\n" + line);
		}	else {
			console.log("The note is empty for now!");
		}
	}


	this.getNote = function(note_id){
		if (note_id > -1 && note_id < this.notes.length){
			console.log("Note ID: " + [note_id] + "\n" + this.notes[note_id] + "\n\nBy Author: " + this.author);
		} else {
			console.log("This note ID does not exist");
		}
	}


	this.search = function(search_text){
		textNotFound=false;
		console.log("Displaying Search results: \n")
		if (search_text.length > 0){
			for (var i=0; i < this.notes.length; i++){
				if (this.notes[i].includes(search_text)){
					console.log("Note ID: " + i + "\n" + this.notes[i] + "\n\nBy Author: " + this.author + "\n" + line);
				} else {
					textNotFound=true;
				}
			}
		}
		if (textNotFound){
			console.log("Sorry, Search term not found!");
		}
	}


	this.delete = function(note_id){
		if (note_id > -1 && note_id < this.notes.length){
			this.notes.splice(note_id, 1);
			console.log("The Note has been deleted!");
		} else {
			console.log("Note ID not found!");
		}
	}


	this.edit = function(note_id, new_content){
		if (note_id > -1 && note_id < this.notes.length){
			this.notes[note_id] = new_content;
			console.log("Note has been updated");
		} else {
			console.log("Note ID not found!");
		}
	}



}

