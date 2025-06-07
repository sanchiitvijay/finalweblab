const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set view engine (optional - for dynamic content)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home page route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Online Training Site - Home</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                nav { background-color: #333; padding: 10px; }
                nav a { color: white; text-decoration: none; margin: 0 15px; }
                nav a:hover { text-decoration: underline; }
                .content { margin-top: 20px; }
            </style>
        </head>
        <body>
            <nav>
                <a href="/">Home</a>
                <a href="/registration">Registration</a>
                <a href="/announcements">Announcements</a>
                <a href="/contact">Contact</a>
            </nav>
            <div class="content">
                <h1>Welcome to Online Training Site</h1>
                <p>Enhance your skills with our comprehensive online training programs.</p>
                <h2>Featured Courses</h2>
                <ul>
                    <li>Web Development Fundamentals</li>
                    <li>JavaScript Programming</li>
                    <li>Database Management</li>
                    <li>Mobile App Development</li>
                </ul>
                <p>Join thousands of learners who have advanced their careers with our training.</p>
            </div>
        </body>
        </html>
    `);
});

// Registration page route
app.get('/registration', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Online Training Site - Registration</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                nav { background-color: #333; padding: 10px; }
                nav a { color: white; text-decoration: none; margin: 0 15px; }
                nav a:hover { text-decoration: underline; }
                .content { margin-top: 20px; }
                form { max-width: 400px; }
                input, select, textarea { width: 100%; padding: 8px; margin: 5px 0; }
                button { background-color: #007bff; color: white; padding: 10px 20px; border: none; cursor: pointer; }
            </style>
        </head>
        <body>
            <nav>
                <a href="/">Home</a>
                <a href="/registration">Registration</a>
                <a href="/announcements">Announcements</a>
                <a href="/contact">Contact</a>
            </nav>
            <div class="content">
                <h1>Course Registration</h1>
                <form action="/register" method="POST">
                    <label>Full Name:</label>
                    <input type="text" name="fullName" required>
                    
                    <label>Email:</label>
                    <input type="email" name="email" required>
                    
                    <label>Phone:</label>
                    <input type="tel" name="phone" required>
                    
                    <label>Course Selection:</label>
                    <select name="course" required>
                        <option value="">Select a course</option>
                        <option value="web-dev">Web Development</option>
                        <option value="javascript">JavaScript Programming</option>
                        <option value="database">Database Management</option>
                        <option value="mobile">Mobile App Development</option>
                    </select>
                    
                    <label>Experience Level:</label>
                    <select name="level" required>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                    
                    <button type="submit">Register</button>
                </form>
            </div>
        </body>
        </html>
    `);
});

// Handle registration form submission
app.post('/register', (req, res) => {
    const { fullName, email, phone, course, level } = req.body;
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Registration Successful</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                .success { background-color: #d4edda; padding: 20px; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="success">
                <h2>Registration Successful!</h2>
                <p>Thank you ${fullName} for registering for our ${course} course.</p>
                <p>We will contact you at ${email} with further details.</p>
                <a href="/">Return to Home</a>
            </div>
        </body>
        </html>
    `);
});

// Announcements page route
app.get('/announcements', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Online Training Site - Announcements</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                nav { background-color: #333; padding: 10px; }
                nav a { color: white; text-decoration: none; margin: 0 15px; }
                nav a:hover { text-decoration: underline; }
                .content { margin-top: 20px; }
                .announcement { background-color: #f8f9fa; padding: 15px; margin: 10px 0; border-left: 4px solid #007bff; }
                .date { color: #666; font-size: 0.9em; }
            </style>
        </head>
        <body>
            <nav>
                <a href="/">Home</a>
                <a href="/registration">Registration</a>
                <a href="/announcements">Announcements</a>
                <a href="/contact">Contact</a>
            </nav>
            <div class="content">
                <h1>Latest Announcements</h1>
                
                <div class="announcement">
                    <h3>New JavaScript Advanced Course Launch</h3>
                    <p class="date">June 5, 2025</p>
                    <p>We're excited to announce our new Advanced JavaScript course covering ES6+, async programming, and modern frameworks.</p>
                </div>
                
                <div class="announcement">
                    <h3>Summer Batch Registration Open</h3>
                    <p class="date">June 1, 2025</p>
                    <p>Registration is now open for our summer batch starting July 1st. Early bird discount available until June 15th.</p>
                </div>
                
                <div class="announcement">
                    <h3>New Learning Management System</h3>
                    <p class="date">May 28, 2025</p>
                    <p>We've upgraded our learning platform with better video streaming and interactive coding exercises.</p>
                </div>
                
                <div class="announcement">
                    <h3>Career Placement Program</h3>
                    <p class="date">May 25, 2025</p>
                    <p>New partnership with leading tech companies for direct placement opportunities for our graduates.</p>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Contact page route
app.get('/contact', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Online Training Site - Contact</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                nav { background-color: #333; padding: 10px; }
                nav a { color: white; text-decoration: none; margin: 0 15px; }
                nav a:hover { text-decoration: underline; }
                .content { margin-top: 20px; }
                .contact-info { background-color: #f8f9fa; padding: 20px; margin: 20px 0; }
                form { max-width: 500px; }
                input, textarea { width: 100%; padding: 8px; margin: 5px 0; }
                button { background-color: #28a745; color: white; padding: 10px 20px; border: none; cursor: pointer; }
            </style>
        </head>
        <body>
            <nav>
                <a href="/">Home</a>
                <a href="/registration">Registration</a>
                <a href="/announcements">Announcements</a>
                <a href="/contact">Contact</a>
            </nav>
            <div class="content">
                <h1>Contact Us</h1>
                
                <div class="contact-info">
                    <h3>Get in Touch</h3>
                    <p><strong>Address:</strong> 123 Training Street, Education City, EC 12345</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Email:</strong> info@onlinetraining.com</p>
                    <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>
                </div>
                
                <h3>Send us a Message</h3>
                <form action="/contact-submit" method="POST">
                    <label>Your Name:</label>
                    <input type="text" name="name" required>
                    
                    <label>Email:</label>
                    <input type="email" name="email" required>
                    
                    <label>Subject:</label>
                    <input type="text" name="subject" required>
                    
                    <label>Message:</label>
                    <textarea name="message" rows="5" required></textarea>
                    
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </body>
        </html>
    `);
});

// Handle contact form submission
app.post('/contact-submit', (req, res) => {
    const { name, email, subject, message } = req.body;
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Message Sent</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                .success { background-color: #d4edda; padding: 20px; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="success">
                <h2>Message Sent Successfully!</h2>
                <p>Thank you ${name} for contacting us.</p>
                <p>We have received your message about "${subject}" and will respond to ${email} within 24 hours.</p>
                <a href="/">Return to Home</a>
            </div>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Online Training Site running on port ${port}`);
});