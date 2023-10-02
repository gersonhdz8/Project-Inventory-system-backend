import z from "zod"

export const user = z.object({
    
    name: z.string().min(3).max(50),
    last_name: z.string().min(3).max(50),
    email: z.string().email(),
    username: z.string().min(3).max(50),
    contrasena: z.string().min(3).max(50),    
    dni: z.string().min(3).max(50),    
    
})
export const inventory = z.object({
    
    serialGroup: z.string().min(3).max(50),
    name: z.string().min(3).max(50),
    description: z.string().min(3).max(50),
    image_url: z.string().url(),
    category: z.string().array().min(3).max(50),    
    quantity: z.int().positive().min(0),
    inStock: z.int().positive().min(0),
    inLoan: z.int().positive().min(0),
    price: z.int().positive().min(0),    
    location: z.string().min(3).max(50),     
    
})
export const products = z.object({ 
    
    serial: z.string().min(3).max(50)       
    
})
export const reservations = z.object({
    
    products: z.array(z.object({
        serialGroup: z.string().min(3).max(50),
        cantidad_reserva: z.number().int().min(1),
    })),
    dni: z.string().min(3).max(50),
    email: z.string().email(),
    customerName: z.string().min(3).max(50),
    date: z.string().min(3).max(50)
    
    
})
export const loans = z.object({
    
    products:z.array(z.object({
        id_product: z.string().min(3).max(50)        
    })),
    dni: z.string().min(3).max(50),
    customerName: z.string().email(),
    date: z.string().min(3).max(50),
    returnDate: z.string().min(3).max(50) 

})