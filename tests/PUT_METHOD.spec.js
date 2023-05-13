const { test, expect } = require('@playwright/test');

test('should be able to create a new post', async ({ request }) => {

    // Construct data
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const putContent = {
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
    const responseBody = await response.json();
    console.log(responseBody)

    // Show log
    console.log(response.status());
    console.log(responseBody);

    // Verify data is correct
    expect(response.status()).toBe(200);
    const {title, body, unserId, id} = responseBody
    expect(title).toBe(putContent.title);
    expect(body).toBe(putContent.body);
    expect(unserId).toBe(putContent.unserId);
    expect(id).toBeTruthy();
});