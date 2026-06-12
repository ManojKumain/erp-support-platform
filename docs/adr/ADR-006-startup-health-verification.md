# ADR-006: Startup Health Verification

## Status

Accepted

## Problem

The application should not start successfully if critical infrastructure dependencies are unavailable.

## Decision

Startup now performs:

1. Configuration validation
2. Startup safety checks
3. Database connectivity verification

Application startup is blocked if any check fails.

## Consequences

Positive:

* Fail-fast architecture
* Reduced production incidents
* Improved deployment confidence

Negative:

* Startup time increases slightly due to health verification
