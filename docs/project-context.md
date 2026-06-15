# ERP Support Platform - Project Context

## Project Overview

ERP Support Platform is a multi-tenant SaaS application designed to reduce operational downtime for organizations using ERP systems.

The system is not intended to be a traditional ticketing tool.

Primary objective:

> Reduce operational downtime through guided support workflows, structured incident management, intelligent routing, and operational visibility.

---

# Product Vision

The platform should:

* Reduce user panic during incidents
* Help users describe issues clearly
* Route issues correctly
* Accelerate resolution time
* Improve visibility for customers
* Reduce support workload
* Build operational trust

Target users:

1. Customer Employees
2. Customer Administrators
3. Support Agents
4. Internal ERP Engineers

---

# Development Philosophy

Core principle:

> Build the smallest correct system first and evolve through iteration.

Current strategy:

> Deliver an MVP suitable for academic demonstration and practical evaluation first, then expand toward the complete SaaS vision.

Development flow:

1. Problem Discovery
2. User Workflow Mapping
3. Information Architecture
4. Domain Modeling
5. UX Design
6. Backend Design
7. Database Design
8. Frontend Architecture
9. Automation Layer
10. Analytics

---

# Product Development Status

## Phase A - Product Blueprinting

Completed:

* User Workflows
* Information Architecture
* Domain Model
* UX Wireframes
* Backend Architecture
* Database Architecture
* Frontend Architecture

Status:

COMPLETE

---

## Phase B - Engineering Foundation

### B1 Repository Setup

Completed:

* Git Repository
* Documentation Structure
* ADR Foundation
* Monorepo Decision

Status:

COMPLETE

---

### B2 Backend Foundation

Completed:

* NestJS Bootstrap
* TypeScript Configuration
* Module Architecture
* Prisma Installation
* PrismaService
* PrismaModule
* PostgreSQL Integration
* Docker Setup
* Environment Configuration
* Joi Validation
* ConfigModule Setup
* Startup Safety Checks
* Database Health Verification
* Startup Logging
* Application Boot Protection

Current Startup Flow:

Application Start
↓
Environment Validation
↓
Startup Safety Validation
↓
Database Verification
↓
Application Listen
↓
Startup Complete

Status:

COMPLETE

---

## Phase C - Database Design Sprint

### C1 Database Modeling

Completed:

#### Enums

UserRole

* ADMIN
* SUPPORT_AGENT
* EMPLOYEE

IncidentStatus

* OPEN
* IN_PROGRESS
* RESOLVED
* CLOSED

IncidentPriority

* P1
* P2
* P3
* P4

#### Organization Model

Fields:

* id
* name
* createdAt
* updatedAt

Relationships:

* users
* incidents

#### User Model

Fields:

* id
* email
* fullName
* role
* organizationId
* createdAt
* updatedAt

Relationships:

* organization
* reportedIncidents

#### Incident Model

Fields:

* id
* title
* description
* status
* priority
* organizationId
* reporterId
* createdAt
* updatedAt

Relationships:

* organization
* reporter

Status:

COMPLETE

---

### C2 Database Migration

Completed:

* PostgreSQL Database Created
* Database Name: erp_support
* Prisma Migration Initialized
* Initial Migration Applied
* Organization Unique Constraint Added
* Prisma Client Generated

Current Migration History:

* init
* add_organization_unique_name

Status:

COMPLETE

---

### C3 Database Seeding

Planned:

* Seed Organizations
* Seed Users
* Seed Incidents
* Create Demo Data

Status:

NEXT

---

### C4 CRUD APIs

Planned:

* Organization CRUD
* User CRUD
* Incident CRUD

Status:

PENDING

---

# Current Database Schema

Organization

* id
* name (unique)

User

* id
* email (unique)
* fullName
* role
* organizationId

Incident

* id
* title
* description
* status
* priority
* organizationId
* reporterId

Relationships:

Organization
↓
Users

Organization
↓
Incidents

User
↓
Reported Incidents

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
* Prisma ORM

Database

* PostgreSQL

Infrastructure

* Docker

Future Infrastructure

* Redis
* BullMQ
* S3
* Elasticsearch

---

# Architecture Principles

## Multi-Tenant Architecture

Every tenant-owned record must belong to an organization.

organizationId is mandatory on tenant-owned entities.

---

## Domain-Driven Structure

Domains:

* Organizations
* Users
* Incidents
* Knowledge
* Notifications
* Analytics
* Authentication

---

## Infrastructure Separation

Infrastructure concerns remain isolated from business logic.

Examples:

* Startup Validation
* Health Checks
* Logging
* Storage
* Queues
* Monitoring

---

## Shared Components

Reusable logic belongs in common.

Examples:

* DTOs
* Guards
* Filters
* Interceptors
* Exceptions

---

# Branch Strategy

Model:

Trunk-Based Development

Rules:

* main is always deployable
* short-lived feature branches
* pull requests required
* frequent integration

Current completed branch:

* feat/database-design

---

# MVP Scope

The MVP intentionally excludes:

* Knowledge Base CRUD
* Notifications
* Analytics
* Chat
* Automation Workflows
* Redis
* Queue Processing

These features will be implemented after academic evaluation.

---

# Remaining MVP Roadmap

## Phase C

### Assignment 7

Seed Database

### Assignment 8

Build CRUD APIs

---

## Phase D - Authentication

* JWT Authentication
* Login API
* Password Hashing
* Role Guards
* Protected Routes

---

## Phase E - Incident Module

* Create Incident
* List Incidents
* Get Incident
* Update Incident Status

---

## Phase F - Frontend

* Login Screen
* Dashboard
* Incident Screens
* API Integration

---

## Phase G - Demo Polish

* Demo Data
* Demo Accounts
* README
* Screenshots
* Presentation Preparation

---

# Current Development Stage

Current Milestone:

Phase C - Database Design Sprint

Current Assignment:

Assignment 7 - Seed Database

Completed:

✅ Database Modeling

✅ Database Migration

✅ Prisma Client Generation

Next:

➡️ Seed Database

➡️ Build CRUD APIs

---

# Important Project Decisions

ADR-001

Decision:

Monorepo Architecture

Reason:

* Easier onboarding
* Easier development workflow
* Simpler project management
* Better visibility across the system

Status:

ACCEPTED

---

# How Future AI Conversations Should Continue

Assume:

* Product Blueprinting is complete.
* Backend Foundation is complete.
* Database Modeling is complete.
* Prisma Migrations are complete.
* PostgreSQL database is running.
* Database name is erp_support.
* Prisma Client is generated.
* Current schema is the source of truth.

Current milestone:

Phase C - Database Design Sprint

Current assignment:

Assignment 7 - Seed Database

Teaching style required:

* First Principles
* Enterprise SaaS Thinking
* Step-by-Step Assignments
* Beginner-Friendly Explanations

Act as a Top 1% SaaS Architect, Backend Engineer, and Mentor.
