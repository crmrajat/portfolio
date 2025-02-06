/**
 * This script automates two tasks:
 * 1. Stages, commits, and pushes changes to git (via git-push-script)
 * 2. Builds and deploys to Github Pages (via npm run deploy)
 */

import { execSync } from 'child_process';

// Combine arguments into a single commit message
const commitMessage = process.argv.slice(2).join(' ');

if (!commitMessage) {
    console.error('❗ Please provide a commit message');
    console.error('Usage: npm run automate "your commit message"');
    process.exit(1);
}

try {
    // Build the project
    console.log(' - - - - - - 🔄️ Building project - - - - - - ');
    execSync('npm run build', { stdio: 'inherit' });
    console.log(' - - - - - - ✅ Build successful! - - - - - - ');

    // Stage changes
    console.log(' - - - - - - 🔄️ Staging changes - - - - - - ');
    execSync('git add .', { stdio: 'inherit' });
    console.log(' - - - - - - ✅ Changes staged! - - - - - - ');

    // Commit changes
    console.log(' - - - - - - 🔄️ Committing changes - - - - - - ');
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    console.log(' - - - - - - ✅ Changes committed! - - - - - - ');

    // Push changes
    console.log(' - - - - - - 🔄️ Pushing to remote - - - - - - ');
    execSync('git subtree push --prefix dist origin gh-pages', {
        stdio: 'inherit',
    });
    console.log(' - - - - - - ✅ Changes pushed successfully! - - - - - - ');
} catch (error) {
    console.error('❌ Failed to complete operation:');
    console.error('An error occurred:', error.message);
    process.exit(1);
}
