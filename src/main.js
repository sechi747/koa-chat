const { APP_PORT } = require('./config/dev')

const app = require('./app/app')

app.listen(APP_PORT, () => {
    console.log(`server is running on http://localhost:${APP_PORT}`)
})
