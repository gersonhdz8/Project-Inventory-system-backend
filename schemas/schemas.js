import z from "zod"

export const user = z.object({
    
    name: z.string().min(3).max(100),
    last_name: z.string().min(3).max(100),
    email: z.string().email(),
    username: z.string().min(3).max(100),
    contrasena: z.string().min(3).max(100),    
    dni: z.string().min(3).max(100),    
    
})
export const inventory = z.object({
    
    serialGroup: z.string().min(3).max(100),
    name: z.string().min(3).max(100),
    description: z.string().min(3).max(100),
    image_url: z.string().url(),
    category: z.string().array().min(3).max(100),    
    quantity: z.int().positive().min(0),
    inStock: z.int().positive().min(0),
    inLoan: z.int().positive().min(0),
    price: z.int().positive().min(0),    
    location: z.string().min(3).max(100),     
    
})
export const products = z.object({ 
    
    serial: z.string().min(3).max(100)       
    
})
export const reservations = z.object({
    
    products: z.array(z.object({
        serialGroup: z.string().min(3).max(100),
        cantidad_reserva: z.number().int().min(1),
    })),
    dni: z.string().min(3).max(100),
    email: z.string().email(),
    customerName: z.string().min(3).max(100),
    date: z.string().min(3).max(100)
    
    
})
export const loans = z.object({
    
    products:z.array(z.object({
        id_product: z.string().min(3).max(100)        
    })),
    dni: z.string().min(3).max(100),
    customerName: z.string().email(),
    date: z.string().min(3).max(50),
    returnDate: z.string().min(3).max(100) 

})