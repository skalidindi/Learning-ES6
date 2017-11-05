// Given
var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

/* =>
[
  { skill: 'css', users: [ 'Bill', 'Sue' ], count: 2 },
  { skill: 'javascript', users: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', users: [ 'Sue' ], count: 1 }
] */

function groupEndorsementsBySkill(endorsements) {
  var groupedEndorsementsBySkill = [];
  var skillsMap = {};

  for (var endorsement of endorsements) {
    var skill = endorsement.skill;
    var user = endorsement.user;

    if (!skillsMap.hasOwnProperty(skill)) {
      skillsMap[skill] = {
        users: [user],
        index: groupedEndorsementsBySkill.length
      };
      // skillsMap[skill].users.push(user);
      groupedEndorsementsBySkill.push({skill: skill, users: skillsMap[skill].users, count: 1});
    } else {
      skillsMap[skill].users.push(user);
      groupedEndorsementsBySkill[skillsMap[skill].index] = {skill: skill, users: skillsMap[skill].users, count: skillsMap[skill].users.length};
    }
  }

  return groupedEndorsementsBySkill;
}

console.log(groupEndorsementsBySkill(endorsements));
