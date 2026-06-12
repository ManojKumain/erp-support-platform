# ERP Support Platform - Project Context

## Project Overview

ERP Support Platform is a multi-tenant SaaS application designed to reduce operational downtime for businesses using ERP systems.

The platform is not being built as a traditional ticketing system.

Primary objective:

> Reduce operational downtime through guided support workflows, intelligent issue routing, knowledge management, and support automation.

---

# Product Vision

The system should:

* Reduce user panic
* Help users explain issues clearly
* Route issues correctly
* Accelerate resolution
* Improve customer visibility
* Reduce support workload
* Build operational trust

Target users:

1. Customer Employees
2. Customer Admins
3. Support Agents
4. Internal ERP Engineers

---

# Development Philosophy

The project follows first-principles thinking.

Core rule:

> Build the smallest correct system first and evolve through iteration.

Process followed:

1. Problem Discovery
2. User Workflow Mapping
3. Information Architecture
4. Domain Modeling
5. UX Design
6. Backend Design
7. Database Design
8. Frontend Architecture
9. Automation Layer
10. Analytics & Continuous Improvement

---

# Product Development Status

## Phase A - Product Blueprinting

Completed:

* User Workflows
* Information Architecture
* Domain Model
* UX Wireframes
* Backend API Design
* Database Schema Design
* Frontend System Architecture

Status:

COMPLETE

---

## Phase B - Engineering Foundation

### B1 Repository Setup

Completed:

* Git Repository
* Documentation Structure
* Architecture Documentation
* ADR Foundation

Status:

COMPLETE

---

### B2 Backend Foundation

Completed:

* NestJS Application Bootstrap
* Project Structure
* Prisma Setup
* PrismaService
* PrismaModule
* AppModule Registration
* Docker Setup
* PostgreSQL Setup
* Configuration Foundation
* Joi Installation
* Environment Validation Schema
* Configuration Files
* TypeScript Node Configuration Fix
* ConfigModule.forRoot()
* Environment Validation Enforcement
* Startup Safety Checks
* Application Boot Protection
* Database Health Verification
* Startup Logging Foundation

Current backend structure:

src/
├── app.module.ts
├── main.ts
├── common/
├── config/
├── database/
├── infrastructure/
└── modules/

Infrastructure structure:

src/infrastructure/
├── startup/
│   ├── startup.module.ts
│   └── startup-safety.service.ts
└── health/
├── health.module.ts
└── database-health.service.ts

Modules:

* analytics
* auth
* chat
* incidents
* knowledge
* notifications
* organizations
* tickets
* users

Current database layer:

src/database/
├── prisma.module.ts
├── prisma.service.ts
└── repositories/

Current startup flow:

Application Start
↓
Environment Validation
↓
Startup Safety Validation
↓
Database Health Verification
↓
Application Listen
↓
Startup Complete

Status:

COMPLETE

---

# Current Technical Stack

Frontend

* React
* TypeScript
* TailwindCSS
* Zustand
* React Query

Backend

* NestJS
* TypeScript
* Prisma

Database

* PostgreSQL

Infrastructure

* Docker

Future Infrastructure

* Redis
* BullMQ
* S3 Storage
* Elasticsearch

---

# Architecture Principles

## 1. Multi-Tenant Architecture

Every business entity must be scoped by organization.

organization_id is required across tenant-owned entities.

---

## 2. Domain-Driven Structure

Business modules are separated by domain:

* Users
* Organizations
* Tickets
* Notifications
* Knowledge Base
* Analytics

---

## 3. Infrastructure Separation

Technical concerns belong in infrastructure.

Examples:

* Startup Validation
* Health Verification
* Mail
* Storage
* Queue
* Cache
* Monitoring

---

## 4. Shared Components

Reusable application logic belongs in common.

Examples:

* DTOs
* Guards
* Filters
* Interceptors
* Exceptions

---

# Branch Strategy

Branching model:

Trunk-Based Development

Rules:

* main is always releasable
* small feature branches
* short-lived branches
* frequent integration
* pull requests required

---

# Ticket Lifecycle

OPEN
↓
TRIAGED
↓
ASSIGNED
↓
IN_PROGRESS
↓
WAITING_FOR_CUSTOMER
↓
RESOLVED
↓
CLOSED

---

# Priority Model

P1 = High Impact + High Urgency

Examples:

* Payroll failure
* Login outage
* Billing outage

P2 = Low Impact + High Urgency

P3 = High Impact + Low Urgency

P4 = Low Impact + Low Urgency

---

# Knowledge Base Philosophy

Goal:

Prevent tickets before they are created.

Article structure:

* Problem
* Cause
* Resolution Steps
* Screenshots
* Video
* Escalation Path

---

# Current Development Stage

Current milestone:

Phase B2 - Backend Foundation

Completed in current milestone:

✅ ConfigModule.forRoot()

✅ Environment Validation Enforcement

✅ Startup Safety Checks

✅ Application Boot Protection

✅ Database Health Verification

✅ Startup Logging Foundation

---

# Next Backend Foundation Milestones

1. Global Exception Handling

2. Request Validation Pipeline

3. Health Endpoint (/health)

4. API Versioning

5. Structured Logging Foundation

6. API Documentation Foundation (Swagger)

7. Authentication Foundation

Status:

NEXT

---

# How Future AI Conversations Should Continue

Assume:

* Product Blueprinting is complete.
* Backend Foundation is in progress.
* PrismaService and PrismaModule exist.
* Docker and PostgreSQL are running.
* ConfigModule is configured globally.
* Environment validation is enforced through Joi.
* Startup safety validation exists.
* Database health verification exists.
* Application boot protection exists.
* HealthModule exists.
* StartupModule exists.

Continue implementation from the current milestone instead of redesigning previous phases.

Always teach using:

* First Principles
* Enterprise SaaS Thinking
* Step-by-Step Guidance
* Beginner-Friendly Explanations

Act as a Top 1% SaaS Architect, Backend Engineer, and Mentor.
