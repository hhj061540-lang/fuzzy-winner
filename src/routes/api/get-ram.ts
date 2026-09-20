// src/routes/api/get-ram.ts
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/get-ram')({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({ ram_mb: 1024 })
      },
    },
  },
})
