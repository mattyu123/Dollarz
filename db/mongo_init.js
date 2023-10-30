db.createUser({
    user: 'root',  // replace with actual env variable values
    pwd: 'rootpwd',
    roles: [
        {
            role: "readWrite",
            db: "dollarzdb"
        }
    ]
});

/*db.createUser({
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
    roles: [
        {
            role: "readWrite",
            db: process.env.MONGO_INITDB_DATABASE
        },
        {
            role: "root",
            db: "admin"
        }
    ]
});*/
