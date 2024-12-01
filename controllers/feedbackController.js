// Controller function to handle the GET request for the login page
// This functin renders the login form located in 'index.ejs'
exports.getLogin = (req, res) => {
    res.render('index');  // Render the login page
};

// Controller function to handle the POST request from the login form
// This function extrcts the email from the request body and renders the feedback form
exports.postLogin = (req, res) => {
    const { email } = req.body;  // Extract the email entered by the user in the login form
    res.render('feedback', { email });  // Render the feedback form and pass the email to pre-fill the email field
};

// Controller function to handle the POST request from the feedback form
// This functin extracts the user's feedback details and renders the thank you page
exports.postFeedback = (req, res) => {
    const { firstName, lastName, email, comments } = req.body;  // Extract feedback details from the request body
    res.render('thankyou', { firstName, email });  // Render the thank you page and pass the user's first name and email
};
