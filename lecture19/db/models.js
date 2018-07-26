/**
 * Created by rishabhkhanna on 26/07/18.
 */
const Sequelize = require('sequelize');
const  Datatypes = Sequelize.DataTypes;

const db = new Sequelize({
    dialect: "sqlite",
    storage: "./marksheet.db"
});

const student = db.define('student', {
    name: Datatypes.STRING
})

const subject = db.define('subject', {
    name: Datatypes.STRING,
    maxMarks: Datatypes.INTEGER
})

const exam = db.define('exam', {
    name: Datatypes.STRING,
    year: {
        type: Datatypes.INTEGER,
        validate:{
            max: 2050,
            min:1990
        }
    },
    month: {
        type: Datatypes.INTEGER,
        validate:{
            max:12,
            min:1
        }
    }
});

const paper = db.define('paper', {
    weight: Datatypes.INTEGER
});

paper.belongsTo(exam)
exam.hasMany(paper);

paper.belongsTo(subject)
subject.hasMany(paper)

const marks = db.define('marks', {
    marks: Datatypes.INTEGER
})

marks.belongsTo(paper)

marks.belongsTo(student);


module.exports = {
    db,
    student,
    subject,
    paper,
    marks
}










