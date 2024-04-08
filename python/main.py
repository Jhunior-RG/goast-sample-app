import sentry_sdk
from jokes_server import app

sentry_sdk.init(
    dsn="https://f5bd2b349e3dd9a2465a498a5c44b791@o4507036008644608.ingest.us.sentry.io/4507036010151936",
    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    traces_sample_rate=1.0,
    # Set profiles_sample_rate to 1.0 to profile 100%
    # of sampled transactions.
    # We recommend adjusting this value in production.
    profiles_sample_rate=1.0,
)

if __name__ == '__main__':
    app.run(debug=True)