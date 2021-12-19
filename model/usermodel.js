
var connect = require('./db_connect');

const userlist = (callback) => {
    return connect.query('select * from user', [], callback);
}
//add
const userlistbyid = (id, callback) => {
    return connect.query('select * from user where id =?', [id], callback);

}
const adduser = ({ firstName, lastName,birthDay, email, password, gender, notes }, callback) => {
    return connect.query('insert into user (firstName,lastName,birthDay,email,password,gender,notes) value(?,?,?,?,?,?,?)',
        [firstName, lastName, birthDay, email, password, gender, notes], callback)

}
const deleteuser = (id, callback) => {
    return connect.query('delete from user where id =?', [id], callback)
}
const updateuser = (data, callback) => {
    let {
        firstName, lastName,birthDay, email, password, gender, notes,id
    } = data
    return connect.query('update user set firstName=?,lastName=?,birthDay=?,email=?,password=?,gender=?,notes=? where id=?',
        [firstName, lastName, birthDay, email, password, gender, notes, id], callback)
}

module.exports = { userlist,userlistbyid,adduser,deleteuser,updateuser }