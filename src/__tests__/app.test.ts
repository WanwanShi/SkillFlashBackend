import request from 'supertest'
import { app } from '../app'
import { connectDB, client} from '../database/connection'
import { seedDB } from '../database/seeds/seed_test'
import endpoints from '../endpoints.json'

beforeEach(async ()=>{
    await connectDB()
    await seedDB()
})
afterAll(async ()=>{
    await client.close();
})

describe('/not-a-route',()=>{
    test('GET:404 responds with an error message when given an invalid route', ()=>{
        return request(app).get('/not-a-route').expect(404)
        .then(({body: {message}})=>{
            expect(message).toBe('Path not found')
        })
    })
})

describe('/api',()=>{
    test('GET:200 responds with an object describing all the available endpoints', ()=>{
        return request(app).get('/api').expect(200)
            .then(({ body })=>{
                expect(typeof body).toBe('object')
                expect(body).toEqual(endpoints)
            })
    })
})

describe('/api/tags', ()=>{
    test('GET:200 responds with an array of tag object containing two properties: tagName tagCategory', ()=>{
        return request(app).get('/api/tags').expect(200)
            .then(({ body: { tags } })=>{
                expect(tags).toHaveLength(50)
                tags.forEach((tag:object)=>{
                    expect(tag).toMatchObject({
                        tagName: expect.any(String),
                        tagCategory: expect.any(String)
                    })
                })
            })
    })
})

describe('', ()=>{
    test('', ()=>{

    })
})

describe('', ()=>{
    test('', ()=>{
        
    })
})

describe('', ()=>{
    test('', ()=>{
        
    })
})

