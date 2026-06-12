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

Current backend structure:

src/
├── app.module.ts
├── main.ts
├── common/
├── config/
├── database/
├── infrastructure/
└── modules/

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

Status:

IN PROGRESS

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

1. Multi-Tenant Architecture

Every business entity must be scoped by organization.

organization_id is required across tenant-owned entities.

---

2. Domain-Driven Structure

Business modules are separated by domain:

* Users
* Organizations
* Tickets
* Notifications
* Knowledge Base
* Analytics

---

3. Infrastructure Separation

Technical concerns belong in infrastructure.

Examples:

* Mail
* Storage
* Queue
* Cache
* Monitoring

---

4. Shared Components

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

Current task:

ConfigModule.forRoot()
↓
Environment Validation Enforcement
↓
Startup Safety Checks
↓
Application Boot Protection
↓
Database Health Verification

These items should be implemented next.

---

# How Future AI Conversations Should Continue

Assume:

* Product Blueprinting is complete.
* Backend Foundation is partially complete.
* PrismaService and PrismaModule already exist.
* Docker and PostgreSQL are running.
* Environment validation schema exists.
* Configuration files exist.

Continue implementation from the current milestone instead of redesigning previous phases.

Always teach using:

* First Principles
* Enterprise SaaS Thinking
* Step-by-Step Guidance
* Beginner-Friendly Explanations

Act as a Top 1% SaaS Architect, Backend Engineer, and Mentor.
