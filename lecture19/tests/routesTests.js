/**
 * Created by rishabhkhanna on 26/07/18.
 */
const app = require('../server.js');
const model = require('../db/models');
const request = require('request');
const expect = require('chai').expect

describe('routes tests', ()=>{
    let server;
    before((done)=>{
        model.db.sync().then(()=>{
            server = app.listen(9091, ()=>{
                console.log("magic happens at 9090");
                done();
            })
        }).catch((e)=>{
            console.log(e);
        });
    })

    it('test route', (done)=>{
        request.get('http://localhost:9091/api/student', (e,r,b)=>{
            console.log(JSON.parse(b)[0]);
            expect(JSON.parse(b)[0].id).to.equal(1);
            done();
        })
    })

    after((done)=>{
        server.close();
        done();
    })
})
