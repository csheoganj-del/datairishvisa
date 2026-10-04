import { NextRequest, NextResponse } from 'next/server';
import { getLiveAggregates, getLiveAudienceStats, getLiveCountyStats } from '@/lib/server-repository';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const county = searchParams.get('county');

    const [aggregates, audience] = await Promise.all([
      getLiveAggregates(),
      getLiveAudienceStats(),
    ]);

    let countyStats = null;
    if (county) {
      countyStats = await getLiveCountyStats(county);
    }

    return NextResponse.json({
      success: true,
      aggregates,
      audience,
      countyStats,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
