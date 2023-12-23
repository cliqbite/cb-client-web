// Import the feedback functions
import { danger, fail, message, warn } from 'danger'

// Setup
const pr = danger.github.pr

//To get the current branch in github
const currentBranch = danger.github.pr.head.ref

// Ensure lockfile is up to date
const packageChanged = modified_files.includes('package.json')
const lockfileChanged = modified_files.includes('pnpm-lock.yaml')

if (packageChanged && !lockfileChanged) {
  const message =
    'Changes were made to package.json, but not to pnpm-lock.yaml.'
  const idea = 'Perhaps you need to run `pnpm install`?'
  warn(`${message} - <i>${idea}</i>`)
}

// Enforce branch naming to gather metrics
const allowedBranchName =
  /^(build|chore|ci|docs|feat|fix|perf|refactor|changes|revert|style|test)\/([a-zA-Z0-9-]+)$/
if (!allowedBranchName.test(currentBranch)) {
  fail(`Branch name must match ${allowedBranchName} \
    eg \`feat/description\`
  `)
}
if (currentBranch.length < 5 || currentBranch.length > 50) {
  fail(`Branch name ${currentBranch} length should be between 5 to 50
    eg \`feat/description\`
  `)
}

// Always ensure we assign someone.
if (!pr.assignee) {
  message(
    'Please assign someone to merge this PR, and optionally include people who should review.'
  )
}

// If it's not a branch PR
if (pr.base.repo.full_name !== pr.head.repo.full_name) {
  message(
    'This pull request(PR) comes from a fork. This has to be manually checked and merged.'
  )
}

// Ensure title is present
if (pr.title.length < 10) {
  fail('Add title to PR')
}

// Ensure body is not empty and has min 100 charectors
if (pr.changed_files > 10 && pr.body.length < 100) {
  warn('The description is too short')
}

// Ensure PR is not soo big
if (
  pr.changed_files > 20 &&
  pr.base.ref !== 'main' &&
  pr.base.ref === 'develop'
) {
  warn(
    'This PR has a lot of changes. Please make sure you have a good reason to do this.'
  )
}
