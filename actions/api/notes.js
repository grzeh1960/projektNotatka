const Note = require('../../db/models/note')

module.exports = {
    saveNote: function(req, res){

        const newNote = new Note({
            title:'Zrobić zakupy',
            body:'mleko, jajka, woda'
        })
        
        newNote.save().then(() => {
            console.log('zapisano')
        })
        res.send('Strona główna działa')
    }
}