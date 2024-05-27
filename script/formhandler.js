
            document.getElementById('questionForm').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission
    
                // Collect the form data
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const tel = document.getElementById('tel').value;
                const city = document.getElementById('city').value;
                const website = document.getElementById('website').value;
                const message = document.getElementById('message').value;
    
                // Format the data as a string
                const formData = `Name: ${name}\nEmail: ${email}\nTelephone: ${tel}\nCity: ${city}\nWebsite: ${website}\nMessage: ${message}`;
    
                // Create a Blob from the form data
                const blob = new Blob([formData], { type: 'text/plain' });
    
                // Create a URL for the Blob
                const url = URL.createObjectURL(blob);
    
                // Create an anchor element and trigger a download
                const a = document.createElement('a');
                a.href = url;
                a.download = `${name}_question.txt`;
                document.body.appendChild(a);
                a.click();
    
                // Remove the anchor element
                document.body.removeChild(a);
    
                // Revoke the Blob URL
                URL.revokeObjectURL(url);
    
                // Show the alert
                alert('Question Submitted');
            });