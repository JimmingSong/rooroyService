let mysql = require('mysql');
const sql = require('./userSql');

let pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'rocy'
});

/**
 * mysql function
 * @param arrs
 * @param sql
 * @returns {Promise<any>}
 */
function poolFn(arrs,sql) {
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,conn)=>{
            if (err) throw err;
            conn.query(sql,arrs,(err,result)=>{
                if (err) throw err;
                resolve(result);
            })
        })
    })
}

/**
 * 向表中插入数据
 * @param arr
 */
function insertIntoTable(arr) {
    return poolFn(arr,sql.insert_sql)
}

/**
 * 通过name字段查询
 * @param arr
 * @param res
 */
function searchByName(arr,res){
    return poolFn(arr,sql.searchByName)
}

/**
 * 查询所有数据
 * @returns {Promise<any>}
 */
function searchAll(){
    return poolFn()
}

/**
 * 根据 tel 电话查询
 * @param arr
 * @returns {Promise<any>}
 */
function searchByTel(arr){
    return poolFn(arr)
}

/**
 * 根据name 修改 tel
 * @param arr
 * @returns {Promise<any>}
 */
function updateTelByName(arr){
    return poolFn(arr)
}

/**
 * 更新cookie验证的值
 * @param arr
 * @returns {Promise<any>}
 */
function updateCookie(arr){
    return poolFn(arr,sql.updateCookie)
}


module.exports = {
    insertIntoTable,
    searchByName,
    searchAll,
    searchByTel,
    updateTelByName,
    updateCookie
};