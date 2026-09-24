import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    // In production, this would send an email, save to database, etc.
    console.log('Contact form submission:', result.data);

    return NextResponse.json(
      { success: true, message: 'Your inquiry has been received.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
