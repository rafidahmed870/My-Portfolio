# syntax=docker/dockerfile:1

# ─────────────────────────────────────────────
# Stage 1 — deps
# Install only production dependencies
# ─────────────────────────────────────────────
FROM node:22-alpine AS deps

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy lockfile and manifests first for layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install all deps (including devDeps needed for build)
RUN pnpm install --frozen-lockfile


# ─────────────────────────────────────────────
# Stage 2 — builder
# Build the Next.js app
# ─────────────────────────────────────────────
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy deps from previous stage
COPY --from=deps /app/node_modules ./node_modules

# Copy full source
COPY . .

# Build — outputs to .next/
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN pnpm run build


# ─────────────────────────────────────────────
# Stage 3 — runner
# Minimal production image
# ─────────────────────────────────────────────
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only what's needed to run the app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set correct ownership
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 5040

ENV PORT=5040
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
