import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { error: "Booking API has been removed" },
    { status: 410 }
  );
}

export function PUT() {
  return NextResponse.json(
    { error: "Booking API has been removed" },
    { status: 410 }
  );
}

export function DELETE() {
  return NextResponse.json(
    { error: "Booking API has been removed" },
    { status: 410 }
  );
}
