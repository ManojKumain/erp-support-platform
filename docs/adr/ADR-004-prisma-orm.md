# ADR-004: Prisma ORM

## Status

Accepted

## Problem

The application requires a data-access layer that is:

* Type-safe
* Productive
* Maintainable
* Compatible with PostgreSQL

## Options Considered

### Option 1: TypeORM

### Option 2: Prisma

## Decision

We selected Prisma as the primary ORM.

## Consequences

Positive:

* End-to-end type safety
* Strong developer experience
* Explicit schema management

Negative:

* Additional code generation step
