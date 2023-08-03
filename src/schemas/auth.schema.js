import { z } from 'zod'

export const registerSchema = z.object({
  username: z.string({
    required_error: "El usuario es obligatorio"
  }),
  email: z.string({
    required_error: "El email es obligatorio"
  })
    .email({
      message: 'Mail invalido'
    }),
  password: z.string({
    required_error: "La contraseña es obligatoria"
  })
    .min(6, {
      message: "La contraseña debe tener como mínimo 6 caracteres"
    })
})

export const loginSchema = z.object({
  email: z.string({
    required_error: "El email es obligatorio"
  })
    .email({
      message: 'Mail invalido'
    }),
  password: z.string({
    required_error: "La contraseña es obligatoria"
  })
    .min(6, {
      message: "La contraseña debe tener como mínimo 6 caracteres"
    })
})