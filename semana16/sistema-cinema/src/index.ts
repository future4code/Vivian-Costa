import app from './app'
import getActorById from './endpoints/getActorById'

app.get("/", (req, res) => {
    res.send('vai maluco')
})