import { z } from "zod";

export const modalFormSchema = z.object({
    name: z 
        .string()
        .min(3, "É necessario um nome com pelo menos 3 letras")
        .nonempty("O nome é obrigatório"),
    repository: z
        .string()
        .nonempty("A repositório é obrigatório"),
    link: z
        .string(),
    description: z
        .string()
        .nonempty("A descrição é obrigatório"),
    coverUrl: z 
        .string(),
});

export type ICreateAndEditProjectsSchema = z.infer<typeof modalFormSchema>;
