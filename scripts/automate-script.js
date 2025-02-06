/**
 * This script automates three tasks:
 * 1. Builds local scripts
 * 2. Stages, commits, and pushes changes to git
 * 3. Optionally publishes to Github (when using automate:full)
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
    // Execute the git-push-script
    console.log(' - - - - - 🔄️ Running the git-push-script - - - - - ');

    execSync('npm run push ' + commitMessage, { stdio: 'inherit' });

    console.log(' - - - - - ✅ git-push-script successful !  - - - - - ');

    // Execute the NPM publish command
    console.log(' - - - - - 🔄️ Running the publish to Github - - - - - ');

    execSync('npm run deploy', { stdio: 'inherit' });

    console.log(' - - - - - ✅ publish to Github successful !  - - - - - ');
} catch (error) {
    console.error('❌ Failed to push changes:');
    console.error('An error occurred:', error.message);
    process.exit(1);
}
