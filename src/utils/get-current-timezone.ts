import { DateTime } from "luxon";

/**
 * Returns the current timezone in IANA format.
 * @returns The current timezone as a string.
 */
export default function getCurrentTimezone(): string {
  // Using Luxon to access the system's default timezone
  return DateTime.local().zoneName;
}
