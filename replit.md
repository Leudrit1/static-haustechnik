# Overview

This is a full-stack web application for Veluna Haustechnik GmbH, a Swiss home technology/plumbing company. The application serves as a marketing website showcasing the company's services in water systems, heating installations, and general home technology solutions. Built with React, Express, and TypeScript, it features a modern, responsive design with animations and interactive components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend uses **React with TypeScript** in a single-page application (SPA) pattern:

- **UI Framework**: Radix UI primitives with custom shadcn/ui components for consistent, accessible design
- **Styling**: Tailwind CSS with custom design tokens and color schemes
- **Animations**: Framer Motion for smooth transitions and scroll-based animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod schema validation

The component structure follows a modular pattern with feature-based organization:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Feature-specific components in `client/src/components/`

## Backend Architecture

The backend uses **Express.js** with TypeScript:

- **Server Framework**: Express with middleware for JSON parsing and request logging
- **Development Setup**: Vite integration for HMR (Hot Module Reload) in development
- **Production Build**: ESBuild for bundling server code
- **API Structure**: RESTful API pattern (routes prefixed with `/api`)
- **Storage Layer**: Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`) for development

The storage layer is designed to be database-agnostic with a clear interface that can be swapped for a PostgreSQL implementation using Drizzle ORM.

## Database Layer

The application includes **Drizzle ORM** configuration for PostgreSQL:

- **ORM**: Drizzle with Neon serverless driver
- **Schema Definition**: Type-safe schema in `shared/schema.ts`
- **Migrations**: Configured to use `./migrations` directory
- **Validation**: Drizzle-Zod for runtime schema validation

Current schema includes a users table with username/password authentication structure. The in-memory storage implementation serves as a temporary solution until database is provisioned.

## Build and Development

- **Development Mode**: Vite dev server with Express backend running concurrently
- **Production Build**: 
  - Frontend: Vite builds React app to `dist/public`
  - Backend: ESBuild bundles server to `dist/index.js`
- **TypeScript**: Strict mode enabled with path aliases for clean imports (`@/`, `@shared/`, `@assets/`)

# External Dependencies

## Third-Party UI Libraries

- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, select, toast, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Framer Motion**: Animation library for smooth transitions and gestures
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider component

## Database and ORM

- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Drizzle Kit**: CLI tool for migrations and schema management
- **Drizzle-Zod**: Integration between Drizzle and Zod for validation

## Form and Validation

- **React Hook Form**: Performant form library with validation
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Validation resolver for React Hook Form

## Development Tools

- **Vite**: Build tool and dev server
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **ESBuild**: Fast JavaScript bundler for production builds

## Routing and State

- **Wouter**: Minimalist routing library for React
- **TanStack Query**: Server state management and caching

## Session Management

- **connect-pg-simple**: PostgreSQL session store for Express (configured but not actively used with current in-memory storage)

The application is designed to be deployed on Replit with PostgreSQL database integration, though it currently runs with an in-memory storage solution for development purposes.