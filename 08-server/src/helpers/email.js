const nodemailer = require("nodemailer");

class EmailController {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.HOST_EMAIL,
      port: 587,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD_EMAIL,
      },
    });
  }

  async sendEmail({ subject, to = [], attachments = [], html }) {
    try {
      const info = await this.transporter.sendMail({
        from: process.env.USER_EMAIL,
        to,
        subject,
        attachments,
        html,
      });

      if (info.rejected.length > 0) {
        throw new Error("Error al enviar el email");
      }

      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmailController;
