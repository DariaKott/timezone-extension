import { DateTime, IANAZone } from "luxon";

/**
 * Returns the timezone offset between two zones or a zone and UTC.
 * @param zone The primary timezone IANA string.
 * @param defaultZone Optional default timezone IANA string. If not provided, UTC is used.
 * @returns The offset in hours between the two time zones.
 */
function getTimezoneOffset(zone: string, defaultZone?: string): number {
  const now = DateTime.now();

  // Create DateTime objects for the specific and default (or UTC) zones
  const specificZoneTime = now.setZone(zone);
  const defaultZoneTime = now.setZone(defaultZone || "UTC");

  // Calculate the offset in hours
  const offset = (specificZoneTime.offset - defaultZoneTime.offset) / 60;

  return offset;
}

export default getTimezoneOffset;
