const { test, expect } = require('@playwright/test');

test('should be able to perform CRUD on type', async ({ request }) => {

    // Construct data
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const postContent = {
        title: 'foo',
        body: 'bar',
        unserId: 1,
    }
    const putContent = {
        id: 1,
        title: 'this is title',
        body: 'this is body',
        unserId: 1,
    }
    const headers = {
        'Content-Type': 'application/json charset=UTF-8'
    }
    const postOptions = {
        headers: headers,
        data: postContent
    }
    const putOptions = {
        headers: headers,
        data: putContent
    }

    // Send a POST request
    const postRes = await request.post(baseUrl + "/posts", postOptions);
    const postJsonBody = await postRes.json();
    let postId = postJsonBody.id;
    postId = Number(postId) -1;

    // Send a GET request to read the detials
    const getRes = await request.get(`${baseUrl}/posts/${postId}`);
    expect(getRes.status()).toBe(200);

   // Send a PUT request
   const putRes = await request.put(`${baseUrl}/posts/${postId}`, putOptions);
   expect(putRes.status()).toBe(200);

    // Send a DELETE request
    const deleteRes = await request.delete(`${baseUrl}/posts/${postId}`);
    expect(deleteRes.status()).toBe(200);
});