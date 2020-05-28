var sql = require("mssql")

const config = {
    user: 'sa',
    password: 'databaza',
    server: 'LAPTOP-I0QRS0TF\SQLEXPRESS',
    database: 'emall',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

const conn = new sql.Connection(config)
conn.connect().then(function(){
    console.log("Connected to database")
})
.catch(function(err){
    console.log(err)
})
