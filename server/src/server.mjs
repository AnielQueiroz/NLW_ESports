import express from 'express'

const app = express()

// www.minhaap.com/ads


app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Aniel' },
        { id: 2, name: 'Queiroz' },
        { id: 3, name: 'Nenel' }
    ])
})

app.listen(3333)