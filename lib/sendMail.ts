import nodemailer from "nodemailer";

interface OptionsType {
  email: string;
  subject: string;
  message: string;
}

type SMTPServer = string;
type SMTPPort = number;
type SMTPMail = string;
type SMTPPassword = string;

// Define TransportOptionsType interface
interface TransportOptionsType {
  host: SMTPServer;
  port: SMTPPort;
  service: SMTPServer;
  auth: {
    user: SMTPMail;
    pass: SMTPPassword;
  };
  secure: boolean;
  requireTLS: boolean;
}
export const sendMail = async (options: OptionsType) => {
  // Check if options.email is defined and not an empty string
  if (!options.email || !options.email.trim()) {
    console.error("Error: No recipients defined");
    return;
  }

  const transportOptions: TransportOptionsType = {
    host: process.env.SMPT_SERVER as SMTPServer,
    port: parseInt(process.env.SMPT_PORT as string, 10) as SMTPPort,
    service: process.env.SMPT_SERVER as SMTPServer,
    auth: {
      user: process.env.SMPT_MAIL as SMTPMail,
      pass: process.env.SMPT_PASSWORD as SMTPPassword,
    },
    secure: true,
    requireTLS: true,
  };

  const transporter = nodemailer.createTransport(transportOptions);

  const mailOptions = {
    from: process.env.SMTP_MAIL, // corrected from SMPT to SMTP
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  transporter.sendMail(mailOptions, function (error: Error | null, info: any) {
    // Corrected error type to Error | null
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
