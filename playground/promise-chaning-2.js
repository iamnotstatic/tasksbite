require('../src/db/mongoose');

const Task = require('../src/db/models/task');

// Task.findByIdAndDelete('5def7f6e06674d06387ebc71')
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async id => {
  const user = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5df0aee99013781b4c71119e')
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
