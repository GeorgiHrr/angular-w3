import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  public isNoteSelected = false;
  public index = 0;

  modelTitle = '';
  modelContent = '';
  
  modelTitleSize = 5;
  modelContentSize = 7;

  public noteCollection = [
    {
      title: '', content: ''
    }
  ]

  public addNote(){
    let note = {
      title: this.modelTitle,
      content: this.modelContent
    }

    if(this.isNoteSelected){
      this.noteCollection[this.index].title = this.modelTitle;
      this.noteCollection[this.index].content = this.modelContent;
      this.isNoteSelected = false;
    }else{
      this.noteCollection.push(note);
    }

  }
  
  public selectNote(index){
    this.index = index;
    console.log(index);
    this.isNoteSelected = true;
  }

  public deleteNote() {
    this.noteCollection.splice(this.index, 1);
    this.resetValues();
  }

  public editNote() {
    this.modelTitle = this.noteCollection[this.index].title;
    this.modelContent = this.noteCollection[this.index].content;

  }

  private resetValues() {
    this.isNoteSelected = false;
    this.modelTitle = '';
    this.modelContent = '';
  }
}