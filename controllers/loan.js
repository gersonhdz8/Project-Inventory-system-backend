import Model from "../models/modelMongoDB.js";

export default class LoanController{

    static async getLoan(req,res,next){
        try {
            const loan = await Model.getLoan(parseInt(req.params.id))            
            res.status(200).json(loan);
        } catch (error) {
            next(error); 
        }
    }

    static async getAllLoan(req,res,next){
        try {
            const loan = await Model.getAllLoan()            
            res.status(200).json(loan);
        } catch (error) {
            next(error); 
        }
    }
    static async createLoan(req,res,next){

        try {
            const loan = await Model.createLoan(req.body)
            res.status(200).json(loan);
        } catch (error) {
            next(error); 
        }
    }
    static async deleteLoan(req,res,next){

        try {
            const loan = await Model.deleteLoan(parseInt(req.params.id))                       
            res.status(200).json(loan);
        } catch (error) {
            next(error); 
        }
    }
    static async updateLoan(req,res,next){

        try {
            const loan = await Model.updateLoan(parseInt(req.params.id),req.body)            
            res.status(200).json(loan);
        } catch (error) {
            next(error); 
        }
    }
    static async statusLoan(req,res,next){

        try {
            const loan = await Model.statusLoan(req.params.loanId, req.params.status)            
            res.status(200).json(loan);
        } catch (error) {
            next(error); 
        }
    }

}