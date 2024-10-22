export function createWelcomeEmailTemplate(firstName, clientUrl) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Hr-Manager</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #3439ca, #00A0DC); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <img src="https://res.cloudinary.com/eguono/image/upload/v1728864403/hr-manager/nav-logo_wzlhdy.png" alt="Hr-Manager Logo" style=""max-width: 50.3px; max-height: 43.92px;" margin-bottom: 20px;border-radius: 10px;">
  
        <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Hr Manager!</h1>
      </div>
      <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        <p style="font-size: 18px; color: #0077B5;"><strong>Hello ${firstName},</strong></p>
        <p>We're thrilled to have you join us!</p>
        <div style="background-color: #f3f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="font-size: 16px; margin: 0;"><strong>Here's how to get started:</strong></p>
           <ul style="padding-left: 20px;">
            <li>You can change your profile image</li>
            <li>Click on forgot password to change your password</li>
            <li>Use your email to to login</li>
            <li>You can apply for leave</li>
          </ul>
  
        </div>
           <div style="text-align: center; margin: 30px 0;">
          <a href="${clientUrl}" style="background-color: #0077B5; color: white; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">log in</a>
        </div>
        <p>If you have any questions or need assistance, our support team is always here to help.</p>
        <p>Best regards,<br>The Hr-Manager Team</p>
      </div>
    </body>
    </html>
    `;
}

export function resetPasswordEmailTemplate(firstName, resetUrl) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset password</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(to right, #3439ca, #00A0DC); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <img src="https://res.cloudinary.com/eguono/image/upload/v1728864403/hr-manager/nav-logo_wzlhdy.png" alt="Hr-Manager Logo" style=""max-width: 50.3px; max-height: 43.92px;" margin-bottom: 20px;border-radius: 10px;">

      <h1 style="color: white; margin: 0; font-size: 28px;">Reset password!</h1>
    </div>
    <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      <p style="font-size: 18px; color: #0077B5;"><strong>Hello ${firstName},</strong></p>
      <p>Forgot your password?</p>
      <div style="background-color: #f3f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h1>You have requested for a password reset from HR-Manager</h1> <p>Please go to this link to reset password</p> <a href=${resetUrl} clicktracking = off>${resetUrl}</a>

      </div>
      
      <p>If you have any questions or need assistance, our support team is always here to help.</p>
      <p>Best regards,<br>The Hr-Manager Team</p>
    </div>
  </body>
  </html>
  `;

}