const {test, expect} = require("@playwright/test")

test('should be able to send a GET method request', async ({request}) => {
    let response = await request.fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
    })

    // Etract response data
    const status =  response.status();
    const jsonResponse = await response.json()
    let randomIndex = Math.floor(Math.random() *jsonResponse.length)
    const firstPost = jsonResponse[randomIndex]

    // Verification
    expect(status).toBe(200);
    expect(jsonResponse.length).toBeGreaterThan(0)
    const {userId, id, title, body} = firstPost
    expect(userId).toBeTruthy()
    expect(id).toBeTruthy()
    expect(title).toBeTruthy()
    expect(body).toBeTruthy()
    
}); 