function NotesApplication(author){
	this.author=author;
	this.notes=[];


	line="-------***************-----------"
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
				console.log("Note ID: " + i + "\n" + this.notes[i] + "\n\nBy Author: " + this.author + "\n" + line);
		}	else {
			console.log("The note is empty for now!");
		}
	}


	this.getNote = function(note_id){
		console.log("Note ID: " + [note_id] + "\n" + this.notes[note_id] + "\n\nBy Author: " + this.author);
	}


	this.search = function(search_text){
		textNotFound=false;
		console.log("Displaying Search results: \n")
		for (var i=0; i < this.notes.length; i++){
			if (this.notes[i].includes(search_text)){
				console.log("Note ID: " + i + "\n" + this.notes[i] + "\n\nBy Author: " + this.author + "\n" + line);
			} else {
				textNotFound=true;
			}
		}
		if (textNotFound){
			console.log("You cant search an empty for");
		}
	}


	this.delete = function(note_id){
		delete this.notes[note_id]
	}


	this.edit = function(note_id, new_content){
		this.notes[note_id] = new_content;
	}


	
}

