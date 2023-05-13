const { test, expect } = require('@playwright/test');

test('should be able to create a new post', async ({ request }) => {

    // Construct data
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    // Send a DELETE request
    const response = await request.delete(url);

    // Verify data is correct
    expect(response.status()).toBe(200);
});