# Create lyrics songs

Graphql app for lyric creation per song

** Usage: **

You will need to set up a database and create a user to be able to use the repo.
To do so you can connect to: `https://mlab.com/welcome/` and create a free account there. Then create a new database and a new user with a username and a password. From there navigate to `/server/server.js` and update the `MONGO_URI` variables with your credentials as such:

`const MONGO_URI = 'mongodb://<UserName>:<UserPassword>@<ds_instance>.mlab.com:<ds_port>/<databaseName>';`

You can also copy paste your MongoDB URI by clicking on your database. You'll just need to add you username and password.

* git clone git@github.com:Arnano/Lyric-creation-app.git
* npm run install
* npm run dev

You should see a `Connected to MongoLab instance.` and be able to visit `localhost:4000` to check the app.
