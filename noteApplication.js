function NoteApplication(){
	
}


var newPerson = new NoteApplication(author);
	newPerson.author=author;
	newPerson.notes=[];

this.create = function(note_content){
	this.notes.push(note_content);
}


this.listNotes = function(){
	listOfNotes = []
	for (var i=0; i < this.notes.length; i++)
		listNotes.push(this.notes[i]);
	return listNotes
}


