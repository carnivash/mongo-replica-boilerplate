db.createUser(
    {
        user: "root",
        pwd: "proj2501",
        roles:[
            {
                role: "readWrite",
                db:   "clube-prod"
            }
        ]
    }
);