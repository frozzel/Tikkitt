const db = require('../config/connection');
const { User, Project } = require('../models');
const userSeeds = require('./userSeeds.json');
const projectsSeeds = require('./projectsSeeds.json');

db.once('open', async () => {
  try {
    await Project.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < projectsSeeds.length; i++) {
      const { _id, projectAuthor } = await Project.create(projectsSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: projectAuthor },
        {
          $addToSet: {
            projects: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
