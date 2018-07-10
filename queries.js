const database = require("./database-connection");

module.exports = {
    list(){
        return database('game').select()
    },
    read(id){
        return database('game').select().where('id', id).first()
    },
    create(resolution){
        return database('game')
        .insert(resolution)
        .returning('*')
        .then(record => record[0])
    },
    update(id, resolution){
        return database('game')
        .update(resolution)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    delete(id){
        return database('game').delete().where('id', id)
    }
};
