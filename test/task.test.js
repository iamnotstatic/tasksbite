const request = require('supertest');
const app = require('../src/app');
const Task = require('../src/models/task');
const {
  userOneId,
  userTwoId,
  userOne,
  userTwo,
  taskOne,
  taskTwo,
  taskThree,
  setupDatabse
} = require('./fixtures/db');

beforeEach(setupDatabse);

test('should create task for user', async () => {
  const response = await request(app)
    .post('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: 'I need to finish the task manager section today'
    })
    .expect(201);

  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
  expect(task.completed).toEqual(false);
});

test('Should fetch user tasks', async () => {
  const response = await request(app)
    .get('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toEqual(2);
});

test('Should not delete other users taks', async () => {
  const response = await request(app)
    .delete(`/tasks/${taskOne._id}`)
    .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
    .send()
    .expect(404);

  const task = Task.findById(taskOne._id);
  expect(task).not.toBeNull();
});

test('Should delete user task', async () => {
  await request(app)
    .delete(`/tasks/${taskTwo._id}`)
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test('Should fetch only incomplete tasks ', async () => {
  await request(app)
    .get('/tasks?completed=false')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});
