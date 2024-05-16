// import { EmailTemplate } from '../../../components/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    // const data = await resend.emails.send({
    //   from: 'Aishwarya <aishwaryaparab1@gmail.com>',
    //   to: ['aishwaryaparab1@gmail.com'],
    //   subject: 'Hello world',
    //   react: (
    //     <>
    //         <p>Email body</p>
    //     </>
    //   ),
    // });
    return Response.json(req.body);
  } catch (error) {
    return Response.json({ error });
  }
}