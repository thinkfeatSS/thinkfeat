import { getVerificationTokenByEmail } from "@/data/verificationToken";
import { v4 as uuidv4 } from "uuid";
import { query } from "./db";
import { getPasswordResetTokenByEmail } from "@/data/passwordResetToken";

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getPasswordResetTokenByEmail(email);
  if (existingToken) {
    // await db.passwordResetToken.delete({
    //   where: { id: existingToken.id },
    // });

    await query("DELETE FROM password_reset WHERE user_id = ?", [
      existingToken.user_id,
    ]);
  }

  // const passwordResetToken = await db.passwordResetToken.create({
  //   data: {
  //     email,
  //     token,
  //     expires,
  //   },
  // });

  const createdPasswordResetToken = await query(
    "INSERT into password_reset (user_email, user_token, expires) VALUES (?, ?, ?)",
    [email, token, expires]
  );

  const [getPasswordResetToken] = await query(
    "SELECT * FROM password_reset WHERE user_email = ? AND user_token = ?",
    [email, token]
  );

  return getPasswordResetToken;
};

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    // await db.verificationEmailToken.delete({ where: { id: existingToken.id } });
    await query("DELETE FROM verification_email WHERE user_id = ?", [
      existingToken.user_id,
    ]);
  }

  // const verificationToken = await db.verificationEmailToken.create({
  //   data: { email, token, expires },
  // });

  const verificationToken = await query(
    "INSERT INTO verification_email (user_email, user_token, expires) VALUES (?, ?, ?)",
    [email, token, expires]
  );
  const [getVerificationToken] = await query(
    "SELECT * FROM verification_email WHERE user_email = ? AND user_token = ?",
    [email, token]
  );

  return getVerificationToken;
};
