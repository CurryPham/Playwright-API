const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const postContent = require('../test-data/postContent.json')
const postContentMulti = require('../test-data/postContentMulti.json')

test('should be able to create a new post', async ({ request }) => {

    const url = 'https://jsonplaceholder.typicode.com/posts';
    // const dataFileLocation = path.resolve(__dirname, '../test-data/postContent.json');
    // const postContent = fs.readFileSync(dataFileLocation)
        console.log(postContent);
        const options = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: postContent
        }

        // Send a POST request
        const response = await request.post(url, options);
        const responseBody = await response.json();

        // Show log
        console.log(response.status());
        console.log(responseBody);

        // Verify data is correct
        expect(response.status()).toBe(201);
        const { title, body, unserId, id } = responseBody;
        expect(title).toBe(postContent.title);
        expect(body).toBe(postContent.body);
        expect(unserId).toBe(postContent.unserId);
        expect(id).toBeTruthy();
    }
);

test('should be able to create a multiple posts', async ({ request }) => {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    for (let postContent of postContentMulti) {
        console.log(postContent);
        const options = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: postContent
        }

        // Send a POST request
        const response = await request.post(url, options);
        const responseBody = await response.json();

        // Show log
        console.log(response.status());
        console.log(responseBody);

        // Verify data is correct
        expect(response.status()).toBe(201);
        const { title, body, unserId, id } = responseBody;
        expect(title).toBe(postContent.title);
        expect(body).toBe(postContent.body);
        expect(unserId).toBe(postContent.unserId);
        expect(id).toBeTruthy();
    }
}
);