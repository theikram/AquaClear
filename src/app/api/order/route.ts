import { NextResponse } from 'next/server';
import { orderFormSchema } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = orderFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    // In production, this would create an order, send notifications, etc.
    console.log('Order submission:', result.data);

    return NextResponse.json(
      { success: true, message: 'Your order has been received.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
