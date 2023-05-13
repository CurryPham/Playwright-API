const { test, expect } = require('@playwright/test');

test('should be able to create a new post', async ({ request }) => {

    // Construct data
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const putContent = {
        id: 1,
        title: 'this is title',
        body: 'this is body',
        unserId: 1,
    }
    const options = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        data: putContent
    }

    // Send a PUT request
    const response = await request.put(url, options);
    const status = await response.status();
    const responseBody = await response.json();
    
    // Show log
    console.log(responseBody)
    console.log(response.status());

    // Verify data is correct
    expect(status).toBe(200);
    const {title, body, unserId, id} = responseBody;
    expect(id).toBe(putContent.id);
    expect(title).toBe(putContent.title);
    expect(body).toBe(putContent.body);
    expect(unserId).toBe(putContent.unserId);
});