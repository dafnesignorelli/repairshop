import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://33fc4bf007834d63248626f065e138ce@o4508202158587904.ingest.de.sentry.io/4508202161340496",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
