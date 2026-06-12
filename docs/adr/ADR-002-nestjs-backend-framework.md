# ADR-002: NestJS Backend Framework

## Status

Accepted

## Problem

The ERP Support Platform requires a backend framework that supports:

* Modular architecture
* Dependency Injection
* TypeScript
* Scalability
* Enterprise SaaS development

## Options Considered

### Option 1: Express

Pros:

* Minimal
* Large ecosystem

Cons:

* Requires significant architectural setup
* No built-in dependency injection

### Option 2: NestJS

Pros:

* Built-in Dependency Injection
* Modular architecture
* TypeScript-first
* Enterprise-ready
* Strong testing support

Cons:

* Slightly steeper learning curve

## Decision

We selected NestJS as the backend framework.

## Consequences

Positive:

* Consistent architecture
* Scalable module boundaries
* Easier maintenance

Negative:

* Additional framework abstractions to learn
