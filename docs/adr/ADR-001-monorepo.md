# ADR-001: Monorepo Architecture

## Status

Accepted

## Problem

The ERP Support Platform contains multiple applications and supporting assets:

* Frontend
* Backend
* Documentation
* Infrastructure

We needed to decide whether to use a Monorepo or Multi-Repository architecture.

## Options Considered

### Option 1: Multi Repository

Separate repositories for:

* frontend
* backend
* infrastructure

Pros:

* Smaller repositories
* Independent versioning

Cons:

* Increased coordination
* More setup complexity
* Harder cross-project changes

### Option 2: Monorepo

Single repository containing:

* frontend
* backend
* docs
* infrastructure

Pros:

* Simpler development workflow
* Easier onboarding
* Easier architectural consistency
* Better suited for a small team

Cons:

* Larger repository over time

## Decision

We chose a Monorepo architecture.

## Consequences

Positive:

* Easier project management
* Simpler setup
* Better visibility across the system

Negative:

* Repository size may grow over time
* Requires discipline in folder organization
