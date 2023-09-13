import { z } from "zod";

export const createPortfolioFormSchema = z.object({
    color: z.string().min(1, "A escolha de uma cor é obrigatória"),
    position: z.string().nonempty("Informar cargo"),
    description: z.string().nonempty("Obrigatório descrição do Portfólio"),
});

export type TCreatePortfolioFormSchema = z.infer<
    typeof createPortfolioFormSchema
>;
