import { generateSlug } from 'random-word-slugs'
import chalkAnimation from 'chalk-animation'

const numWords = parseInt(process.argv[2])

const slug = generateSlug(numWords, {format: "title"})
chalkAnimation.neon(slug)