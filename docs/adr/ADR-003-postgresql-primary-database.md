# ADR-003: PostgreSQL Primary Database

## Status

Accepted

## Problem

The ERP Support Platform requires a relational database capable of supporting:

* Multi-tenancy
* Transactions
* Reporting
* Future scalability

## Options Considered

### Option 1: MySQL

### Option 2: PostgreSQL

## Decision

We selected PostgreSQL as the primary database.

## Consequences

Positive:

* Strong relational integrity
* Excellent transaction support
* Mature ecosystem
* Suitable for SaaS products

Negative:

* Slightly more operational complexity than lightweight databases
