/**
 * @param  {String} name
 * @param  {String} url
 */
export const activationTemplate = (name, url) => {
  return `
  <body style='background: #eee; padding:20px; font-family: "Lato",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif!important;'>
  <!--  <div style='margin: auto; height: 25px; text-align: center'>
          <img src="https://refcart.vercel.app/images/logo.svg" alt="">
        </div> -->
  <div style='max-width: 600px; width:100%; padding-bottom: 35px; margin: auto; background: #fff; text-align: center;'>
    <h1 style='padding:30px 10px; text-align: center; background: linear-gradient(to right,#00c6ff,#0072ff); color: #fff; font-weight: 300;'>Confirm your email</h1>
    <p style='margin: 25px 0; font-size: 20px; font-weight: 300;'>Hi <strong>${name}</strong>,</p>
    <p style='color: #888888; padding:0 20px; max-width: 450px; margin: auto; margin-bottom: 25px; font-weight: 300'>
      You just created a new customer account at <strong>${process.env.BRAND_NAME}</strong> Store. All you have to do now is activate it
    </p>
    <a style='background: rgb(0, 114, 255); color:#fff; padding:8px 25px;display: inline-block; text-decoration: none; border-radius: 4px;' href="${url}">Active account</a>
<!--     <div style='padding: 0 25px;'><div style='height: 1px; width: 100%; background: #ddd; margin: 35px 0;'></div></div> -->
  </div>
</body>
  `;
};
