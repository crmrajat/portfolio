/**
|--------------------------------------------------
This will stage the changes, then add a commit
message and finally push the changes to the git 
|--------------------------------------------------
*/

import { execSync } from 'child_process';

// // Get the commit message from command line arguments
const commitMessage = process.argv[2];

if (!commitMessage) {
    console.error('❗ Please provide a commit message');
    console.error('Usage: npm run push "your commit message"');
    process.exit(1);
}

try {
    // Execute git commands
    console.log('📦 Adding changes...');
    execSync('git add .', { stdio: 'inherit' });

    console.log('💬 Committing with message:', commitMessage);
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

    console.log('🚀 Pushing to remote...');
    execSync('git push', { stdio: 'inherit' });

    console.log('🏷️ Pushing tags...');
    execSync('git push origin --tags', { stdio: 'inherit' });

    console.log('Successfully pushed to repository! 🎉');
} catch (error) {
    console.error('❌ Failed to push changes:');
    console.error('An error occurred:', error.message);
    process.exit(1);
}
