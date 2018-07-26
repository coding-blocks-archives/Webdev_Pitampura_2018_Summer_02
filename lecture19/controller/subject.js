/**
 * Created by rishabhkhanna on 26/07/18.
 */
const {subject} = require('../db/models')

module.exports = {
    getAllSubjects: async ()=>{
        return await subject.findAll();
    }
}