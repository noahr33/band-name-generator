import { generateSlug } from 'random-word-slugs'
import chalkAnimation from 'chalk-animation'
import inquirer from 'inquirer'

inquirer
    .prompt([
        {
            type: 'number',
            name: 'numWords',
            message: "How many words do you want in your band name?",
            default: 3
        },
        {
            type: 'list',
            name: 'animationName',
            message: 'Which animation would you like to use?',
            choices:  ['rainbow', 'pulse', 'glitch', 'radar', 'neon', 'karaoke']
        }
    ])
    .then ((answers) => {
        const slug = generateSlug(answers.numWords, {format: "title"})
        chalkAnimation[answers.animationName](slug)
    })
    .catch ((err) => {
        console.log(err);
    })
