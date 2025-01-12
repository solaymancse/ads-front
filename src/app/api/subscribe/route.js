import { NextResponse } from 'next/server';

export async function POST(req) {
    const { email } = await req.json();

    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DATACENTER = process.env.MAILCHIMP_DATA_CENTER;

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const data = {
        email_address: email,
        status: 'subscribed',
    };

    const options = {
        method: 'POST',
        headers: {
            Authorization: `apikey ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 500) {
            // Handle specific 500 internal server error from Mailchimp
            console.error('Mailchimp Internal Server Error:', result);
            return NextResponse.json({
                error: 'Mailchimp is experiencing issues. Please try again later.',
            }, { status: 500 });
        }

        if (response.status >= 400) {
            // Handle other errors (e.g., email already subscribed, invalid email)
            return NextResponse.json({
                error: result.detail || 'There was an error subscribing the email. Please try again.',
            }, { status: 400 });
        }

        return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 201 });
    } catch (error) {
        console.error('Error with the Mailchimp API request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
