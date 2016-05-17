function NotesApplication(author){
	this.author=author;
	this.notes=[];



	this.create = function(note_content){
		if (note_content.length>0){
			this.notes.push(note_content);
		} else {
			console.log("Your note is empty");
		}
		
	}


	this.listNotes = function(){
		if (this.notes.length>0){
			for (var i=0; i < this.notes.length; i++)
				console.log("Note ID: " + i + "\n" + note_content + "\n\nBy Author: " + this.author);
		}	else {
			console.log("The note is empty for now!");
		}
	}


	this.getNote = function(note_id){
		return "Note ID: " + this.notes[note_id] + "\n\n" + note_content + "\n\nBy Author: " + this.author;
	}


	this.search = function(search_text){
		if (this.notes.includes(search_text)){
			return "Note ID: " + this.note_id + "\n" + note_content + "\n\nBy Author: " + this.author;
		} else {
			return "search text not found"
		}
	}


	this.delete = function(note_id){
		delete this.notes[note_id]
	}


	this.edit = function(note_id, new_content){
		this.notes[note_id] = new_content;
	}
}

myNote = new NotesApplication("Emjay");
myNote.create("Hello World");