/**
 * Created by rishabhkhanna on 26/07/18.
 */
const {student} = require("../db/models");

async function getAllStudents() {
    return await student.findAll()
}

async function insertStudent(name) {
    return await student.create({
        name: name
    })

}

module.exports = {
    getAllStudents,
    insertStudent
}