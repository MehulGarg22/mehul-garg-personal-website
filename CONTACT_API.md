# Contact form API connection

The contact form is ready for an API Gateway endpoint backed by Lambda and SES. No endpoint is configured yet and the form does not send email until one is added. With no endpoint, visitors receive an email fallback and their entered message is preserved.

Copy `.env.example` to `.env.local` and set the public endpoint URL:

```dotenv
REACT_APP_CONTACT_API_URL=https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/contact
```

Restart the development server after changing this value. For Netlify, add the variable in the site's build environment and rebuild the site. Create React App includes this URL in the client bundle; only the public API URL belongs here.

## Request

The form sends an HTTPS JSON POST:

```json
{
  "name": "Recruiter name",
  "email": "recruiter@example.com",
  "message": "I would like to discuss an opportunity.",
  "website": ""
}
```

`website` is a hidden honeypot field. Reject requests where it is nonempty. Validate the other values in the backend too: name is required (max 100 characters), email is required (max 254 characters), and message is required (max 5,000 characters). The UI trims all values before submitting.

## Response

Return a 2xx status with JSON only after SES accepts the send request:

```json
{"success": true}
```

The form clears its fields only after that response. Non-2xx responses, `success: false`, invalid JSON, and network failures preserve the message and offer retry or direct email. Requests time out after 15 seconds.

Configure CORS for the portfolio origin (and localhost during development), allowing POST, OPTIONS, and Content-Type. Handle OPTIONS without sending an email.

Keep the SES sender and recipient fixed in the backend configuration and use the visitor's email as Reply-To. Use the Lambda execution role for SES permissions; do not put AWS credentials in this frontend. Public endpoints should enforce input validation and request limits server-side.
