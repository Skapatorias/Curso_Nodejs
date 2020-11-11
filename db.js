const db = require ('mongoose');

db.Promise = global.Promise; 

// url = 'mongodb+srv://db_user:db_user@cluster0.qc4gv.mongodb.net/project_node?retryWrites=true&w=majority'

async function connect(url){
    await db.connect(url, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
});
console.log ('[db] conectada con éxito');
}

module.exports = connect;