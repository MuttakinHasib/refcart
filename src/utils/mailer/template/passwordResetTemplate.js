/**
 * @param  {String} url
 */
export const passwordResetTemplate = url => {
  return `
  <body style='background: #eee; padding:20px; font-family: "Lato",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif!important;'>
  <table style='max-width: 600px; width:100%; padding-bottom: 35px; margin: auto; background: #fff; text-align: center; border: 2px solid #eee; border-radius: 10px;'>
    <tr>
      <th> <h1 style='padding:5px 10px; text-align: center; color: #333; font-weight: 500;'>Password Reset</h1></th>
    </tr>
    <tr>
      <td>
        <p style='color: #333; max-width: 450px; margin: auto; margin-bottom: 15 px; font-weight: 300'>
          If you've lost your password or wish to reset it, <br>use the link below to get started
        </p>
    </td>
    </tr>
    <tr>
      <td>
        <a style='background: rgb(0, 114, 255); color:#fff; padding:10px 25px;display: inline-block; text-decoration: none; border-radius: 4px; margin: 25px 0; margin-bottom: 30px' href="${url}">Reset your password</a>
      </td>    
    </tr>
    <tr>
      <td>
        <p style='color: #888; max-width: 500px; margin: auto; margin-bottom: 25px; font-weight: 300'>
          If you did not request a password reset, you can safely ignore this email. Only a person with access to your email can reset your account password.
        </p>
    </td>
    </tr>
      
    </table>
</body>
  `;
};
