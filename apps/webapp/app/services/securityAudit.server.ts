import { getHttpContext } from "./httpAsyncStorage.server";
import { logger } from "./logger.server";

export type SecurityEventSeverity = "info" | "warn" | "critical";

/**
 * Structured security / compliance-oriented events (session lifecycle, auth
 * anomalies, policy violations). Logs include HTTP correlation when the
 * request runs inside Express `runWithHttpContext`.
 *
 * Use for SIEM filtering via `securityEvent` / `security.*` message prefixes.
 */
export function recordSecurityEvent(
  event: string,
  fields: Record<string, unknown> & { severity?: SecurityEventSeverity }
): void {
  const severity = fields.severity ?? "info";
  const { severity: _s, ...rest } = fields;
  const http = getHttpContext();
  const payload = {
    securityEvent: event,
    securitySeverity: severity,
    ...rest,
    correlationPath: http?.path,
    correlationRequestId: http?.requestId,
    correlationMethod: http?.method,
  };

  if (severity === "critical") {
    logger.error(`security.${event}`, payload);
  } else if (severity === "warn") {
    logger.warn(`security.${event}`, payload);
  } else {
    logger.info(`security.${event}`, payload);
  }
}
