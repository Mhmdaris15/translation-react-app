const translate = require('node-google-translate-skidz');

const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "Write the Text (in Indonesian)?"
  }
]

inquirer.prompt(questions).then(answers => {
  translate({
    text: `${answers['name']}`,
    source: 'id',
    target: 'en'
  }, function(result) {
    const {translation} = result;
    console.log(translation);
  });
})


