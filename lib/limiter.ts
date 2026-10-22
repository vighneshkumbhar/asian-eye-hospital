interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const cache = new Map<string, RateLimitRecord>();

interface RateLimitConfig {
  limit: number;      // Max requests allowed in the window
  windowMs: number;   // Time window in milliseconds
}

/**
 * Basic in-memory rate limiter for server actions.
 * Perfect for serverless environments with moderate traffic.
 * 
 * @param ip Unique identifier (e.g. client IP or username)
 * @param config RateLimitConfig
 * @returns boolean true if allowed, false if rate limited
 */
export function rateLimit(ip: string, config: RateLimitConfig): { success: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const record = cache.get(ip);

  if (!record) {
    const newRecord: RateLimitRecord = {
      count: 1,
      resetTime: now + config.windowMs,
    };
    cache.set(ip, newRecord);
    return { success: true, remaining: config.limit - 1, reset: newRecord.resetTime };
  }

  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + config.windowMs;
    return { success: true, remaining: config.limit - 1, reset: record.resetTime };
  }

  if (record.count >= config.limit) {
    return { success: false, remaining: 0, reset: record.resetTime };
  }

  record.count += 1;
  return { success: true, remaining: config.limit - record.count, reset: record.resetTime };
}

// Helper to get client IP from headers
import { headers } from "next/headers";

export async function getClientIp(): Promise<string> {
  const forwardedFor = (await headers()).get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return "127.0.0.1";
}
