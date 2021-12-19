
var connect = require('./db_connect');

const notelist = (callback) => {
    return connect.query('select * from note', [], callback);
}
//add
const notelistbyid = (id, callback) => {
    return connect.query('select * from note where id =?', [id], callback);

}
const addnote = ({ created, title,content, sendNotification, remainder_time }, callback) => {
    return connect.query('insert into note (created, title,content, sendNotification, remainder_time) value(?,?,?,?,?)',
        [created, title,content, sendNotification, remainder_time], callback)

}
const deletenote = (id, callback) => {
    return connect.query('delete from note where id =?', [id], callback)
}
const updatenote = (data, callback) => {
    let {
        created, title,content, sendNotification, remainder_time,id
    } = data
    return connect.query('update note set created=?,title=?,content=?,sendNotification=?,remainder_time=? where id=?',
        [created, title,content, sendNotification, remainder_time, id], callback)
}

module.exports = { notelist: notelist,notelistbyid: notelistbyid,addnote,deletenote,updatenote }