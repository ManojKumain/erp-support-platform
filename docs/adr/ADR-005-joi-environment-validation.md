# ADR-005: Joi Environment Validation

## Status

Accepted

## Problem

Application startup should fail immediately when required environment variables are missing or invalid.

## Decision

Environment validation is enforced through:

* ConfigModule
* Joi validation schema

## Consequences

Positive:

* Misconfiguration detected early
* Safer deployments
* Predictable startup behavior

Negative:

* Startup fails until configuration is corrected
