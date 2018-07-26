/**
 * Created by rishabhkhanna on 26/07/18.
 */
const expect = require('chai').expect
const studentController = require("../controller/student");

describe('check student database', ()=>{
    it('should get all students',async ()=>{
        var students = await studentController.getAllStudents();
        expect(students[0].id).to.equal(1)
    })

    it('should insert a student', async ()=>{
        var student = await studentController.insertStudent("Rishabh Khanna")
        expect(student.name).to.equal("Rishabh Khanna");
    })
})
