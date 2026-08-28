import { z } from "zod";

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "Nombre demasiado largo"),
  empresa: z.string().max(100, "Nombre de empresa demasiado largo").optional(),
  telefono: z
    .string()
    .min(10, "Ingresa un número de teléfono válido (10 dígitos)")
    .max(20, "Número de teléfono inválido")
    .regex(/^[\d\s\+\-\(\)]+$/, "Solo se permiten números y caracteres: + - ( )"),
  correo: z
    .string()
    .email("Ingresa un correo electrónico válido")
    .max(100, "Correo demasiado largo"),
  ciudad: z.string().min(2, "Indica tu ciudad").max(100, "Ciudad inválida"),
  tipoProyecto: z.string().min(1, "Selecciona el motivo de tu consulta"),
  equipos: z.string().optional(),
  servicio: z.string().optional(),
  presupuesto: z.string().optional(),
  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "Mensaje demasiado largo (máx. 1000 caracteres)"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
