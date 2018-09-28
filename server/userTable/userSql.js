let insert_sql = 'insert into user values(null,?,?,?,?)';

let searchAll = 'select * from user';

let searchByName = 'select * from user where name = ?';

let searchByTel = 'select * from user where tel = ?';

let updateTelByName = 'update user set tel = ? where name = ?';

let updateCookie = 'update user set test_word = ? where name = ? and pwd = ?';


module.exports = {
    insert_sql,
    searchAll,
    searchByName,
    searchByTel,
    updateTelByName,
    updateCookie
};