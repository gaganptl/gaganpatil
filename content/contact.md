---
title: "Contact"
description: "Get in touch."
canonical: "https://YOUR_DOMAIN_HERE/contact/"
type: "page"
---
I am currently focused on self-directed study and research.

Email: **gaganpatil.research [at] gmail [dot] com**

A contact form will be enabled once public projects or publications are available.

<!-- Serverless Form -->
<!-- <form id="contact-form" style="max-width: 600px;">
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  Honeypot
  <div style="display:none;">
    <label for="url">Website</label>
    <input type="text" id="url" name="url">
  </div>

  <div>
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required></textarea>
  </div>

  <button type="submit" id="submit-btn">Send Message</button>
  <div id="status-message" style="margin-top: 1rem;"></div>
</form>

<script>
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const status = document.getElementById('status-message');
    const btn = document.getElementById('submit-btn');
    
    Check Honeypot
    if(document.getElementById('url').value) return; 
    
    btn.disabled = true;
    btn.innerText = "Sending...";
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    REPLACE WITH YOUR WORKER URL IN PRODUCTION
    const API_URL = "https://your-worker.your-subdomain.workers.dev"; 

    try {
        Simulating logic if no URL set
        if (API_URL.includes("your-worker")) {
             throw new Error("Worker URL not configured yet.");
        }

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            status.innerText = "Message sent successfully.";
            status.style.color = "green";
            this.reset();
        } else {
            status.innerText = "Error sending message. Please try again.";
            status.style.color = "red";
        }
    } catch (error) {
        console.error(error);
        status.innerText = "API endpoint not configured in content/contact.md";
        status.style.color = "orange";
    }
    
    btn.disabled = false;
    btn.innerText = "Send Message";
});
</script> -->
