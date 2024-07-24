import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail', // ou outro serviço de e-mail
  auth: {
    user: process.env.EMAIL_USER, // Coloque aqui o e-mail de envio
    pass: process.env.EMAIL_PASS, // Coloque aqui a senha do e-mail
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER, // E-mail para onde a mensagem será enviada
        subject: subject,
        text: message,
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
