import { NextResponse } from 'next/server';
import { applicationFormSchema } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = applicationFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    // In production, this would save the application, send email, etc.
    console.log('Job application:', result.data);

    return NextResponse.json(
      { success: true, message: 'Your application has been submitted.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
