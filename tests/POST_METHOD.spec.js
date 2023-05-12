const { test, expect } = require('@playwright/test');

test('should be able to create a new post', async ({ request }) => {

    // Construct data
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const postContent = {
        title: 'foo',
        body: 'bar',
        unserId: 1,
    }
    const options = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        data: postContent
    }

    // Send a POST request
    const response = await request.post(url, options);
    const responseBody = await response.json();
    console.log(responseBody)

    // Show log
    console.log(response.status());
    console.log(responseBody);

    // Verify data is correct
    expect(response.status()).toBe(201);
    const {title, body, unserId, id} = responseBody
    expect(title).toBe(postContent.title);
    expect(body).toBe(postContent.body);
    expect(unserId).toBe(postContent.unserId);
    expect(id).toBeTruthy();
});