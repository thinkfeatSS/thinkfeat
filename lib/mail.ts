import EmailTemplate from "@/components/EmailTemplate";
import { render } from "@react-email/render";
import { sendMail } from "./sendMail";

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
  name: string
) => {
  const resetLink = `${process.env.NEXT_URL}/new-password?token=${token}`;

  const html = render(
    EmailTemplate({
      params: {
        name: name,
        url: resetLink,
        action: "resetPassword",
      },
    })
  );

  await sendMail({
    email: email,
    subject: "verification link send",
    message: html,
  });
};

export const sendVerificationEmail = async (
  email: string,
  token: string,
  name: string
) => {
  const confirmLink = `${process.env.NEXT_URL}/new-verification?token=${token}`;

  const html = render(
    EmailTemplate({
      params: {
        name: name,
        url: confirmLink,
        action: "verification",
      },
    })
  );

  await sendMail({
    email: email,
    subject: "Confirm your email",
    message: html,
  });
};
