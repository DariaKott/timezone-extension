import { DateTime, IANAZone } from "luxon";

function getTimezoneOffsetDifference(
  timezone1: string,
  timezone2: string
): number {
  const now = DateTime.now();
  const zone1 = IANAZone.create(timezone1);
  const zone2 = IANAZone.create(timezone2);

  const offset1 = zone1.offset(now.toMillis());
  const offset2 = zone2.offset(now.toMillis());

  return offset1 - offset2;
}
