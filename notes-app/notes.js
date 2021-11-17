const { default: chalk } = require('chalk');
const fs = require('fs');
const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
        title: title,
        body: body
    })
    saveNotes(notes);
    console.log(chalk.green('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length !== notes.length) {
        console.log(chalk.green(` ${title} note removed!`))
        saveNotes(notesToKeep)
    } else {
       console.log( chalk.inverse.red('No note found!'))
    }
   
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your notes:'));
    notesList = notes.forEach((note) => {
        console.log(note.title);
    });

}

const readNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.find((note) => note.title === title)
        if (findNote) {
        console.log(chalk.blue(findNote.title));
        console.log(findNote.body);
    } else {
        console.log(chalk.red.inverse('Note not found'));
    }
    
    

    
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }      

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};