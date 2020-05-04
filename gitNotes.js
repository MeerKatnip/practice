
// MERGE branch method

// MyWebsite
//     - git init (initialize the repo)

// When you create a repo, it creates a master branch by default
// Everyone is commiting changes to the same branch, the master branch, because it's the only one available at the beginning
// At this point, any unfinished code will effect any completed code in the branch

// A way to handle this is to start with a master branch, and each user will create their own branch off of
// the master branch. You can call the child branch whatever you want, but you don't want it to be named after
// the person working on it, you want to call it something that describes what the code inside is doing.
// For ex.

// Master branch will have:
    // index.html
    // empty js folder
    // empty css folder
    
// a child branch from here will copy what is on the master branch and create a branch off of it, so:
    // master branch
    // -----(mobile-responsive-register) w/ copy of index.html, js folder, css folder
                // work and changes to this bit of code, updates, etc.
                        // when completed, child branch will be merged with Master Branch

    // -----(setup-firebase) w/ copy of index.html, js folder, css folder
                // work and changes to this bit of code, updates, etc.
                // when completed, child branch will be merged with Master Branch

    // ----- integrated-services w/ copy of index.html, js folder, css folder
                // work and changes to this bit of code, updates, etc.
                // code not completed, child branch WILL NOT be merged with Master Branch

// Once a child branch is merged with master branch, the copies that are overriding what is in the MAster Branch,
// you will have a Merge Collision, or Merging Issue. GitHub will try to decide do I take the changes from Amy
// or from Andrew? If you are editing the same lines on the file, like html for ex., you will have to sit down
// with your teammates and decide which lines to keep and which to discard.
 
// If you have done lines 1-15, and another dev has done 16-20, it will MERGE the two index.html files into
// one file. If there is an OVERLAP on the line numbers, and the content is different, it will give you the error.

// IF you are updating and there is a merge conflict, for ex if you are using Terminal, you will get the error
// and your code will not be uploaded because it needs to be corrected with your teammates first. You will have
// to correct the file and choose what to upload, then you can submit it.

// git init creates master branch

// .DS_Store is a junk file, doesn't need to go into GitHub
// touch .gitignore (add this to your project root folder)
// any file names you pass in this file will be ignored by git. Just add .DS_store, app.js, etc.

// Once you get git commit -m "enter note text here", it will clear the master branch and say 
// nothing to commit, working tree clean

// From here, to make a child branch off the master branch:
// git checkout -b name-of-branch-i-want-to-make master

// -b creates new branch, you add the name of the branch, and then list the branch you want to create off of
// This branch will have everything that the MASTER branch has at this particular time, since master was 
// indicated. You can branch off of any existing branches, it doesn't have to be master. The new branch will
// contain a copy of the same file from it's parent branch.

// Once you make the new branch, your terminal will be jumped/switched to the newly created branch.
// You can always run git status or git branch to see what branch you are on.

// git add . will add all files, git add filename will add that one
// then do git commit -m 'commit notes

// files that are committed to a child branch WILL NOT BE added to the parent or master branch by default.
// You will have to upload it to each branch you want the file to be in once the branches exist. If you have
// a file in the child branch that you are working on or editing, these changes won't show up in any other 
// branch until the branches are MERGED.

// git checkout branch-name    this lets you change between branches

// When it's time to merge with the master branch:
    // switch to the final branch you are moving the files to. so to move files to master, you will switch to master.
    // git checkout master
    // then you will merge the name of the child branch into the master branch with;
    // git merge child-branch-name
    // it will print out a list of how many files have been changed, how many insertions, and what 
    // files are now available in the receiving branch.
    // any subsequent changes done to child branch will have to be merged with receiving branch again,
    // it will not update the changes automatically.

// 

// PULL branch method

// To invite members:
// go to Settings > Manage Access > Invite Collaborator

// Notification will be sent to member and will show up in their EMAIL. It may not be visible on GitHub site.

// Once the members have joined, they can Clone the repo.
    // You will copy the URL from repo to Clone and use git clone https://URL
    // this will upload it to your computer
    // cd into the folder name
    // the git checkout - 'branch name'
    
// Open a Pull request in GitHub will allow you to check for any merge conflicts
// IF there aren't any, you can submit the merge. Generally, you want to let the person who owns the repo
// review your changes and see what you're doing before you send it through.

// If you're ready to, and all your teammates agree, you can merge it yourself but choosing Merge Pull Request
// and once it goes through, the merge will be completed.

// THESE ARE DIFFERENT!!
// 
// PULL REQUEST: Requesting a merge check to see if any conflicts exist, and merge can be approved
// PULL: Drawing files down from the server to your local computer
// 


// --------
// IAN NOTES
// Getting Started:


// One person in the group should create a repo on their GitHub for your project:

// Create new repo on your GitHub

// Make directory on your computer with same name
// mkdir <repo>

// Go into the directory
// cd <repo>

// Follow instructions on GitHub to set up your local repo.
//         echo "# <repo>" >> README.md

// git init

// git add README.md

// git commit -m "first commit"

// git remote add origin https://github.com/<user>/<repo>.git

// git push -u origin master


// Invite group members to the project repo:
        
// On GitHub go to the repo, go to the Settings tab
// Go to Manage Access
// Invite a Collaborator
// Search for other group members

// Other members clone project repo:

// From GitHub repo, click on Clone or Download and copy the link
// In your terminal, go to where you want the project to be stored
// To get the repo, type
// git clone <the link that you copied>

// At this point, everyone in the group has access to the repo on GitHub and has a local repo to work with.


// Working on the project:


//         Each group member will create their own branch to work on:
             

// NO ONE SHOULD BE WORKING ON MASTER BRANCH!!

// Create your own branch to work on
//                 git checkout -b ‘my-branch-name’

            
// To check branches

// git branch


// To change branches

// git checkout <branch name>


// To merge two branches together

// Given there are two branches branch-a and branch-b

// And you want changes on branch-b to be merged into branch-a

// Checkout the target branch, in this case branch-a

// git checkout branch-a

// From there, merge branch-b

// git merge branch-b


//         When the part you are working on is functional, push your branch:


//                 To check status

//                 git status

                

//                 To add all changes

//                 git add .

//                 Or add specific file

//                 git add <file>


//                 Commit changes

//                 git commit -m ‘A comment describing whats been committed’


//                 Push your branch to GitHub

//                 git push origin <your branch name>


        




// When a branch is pushed, create a Pull Request:


// In the project GitHub repo, go to Pull Requests tab
// Click Compare & Pull Request on your branch
//                 OR click New Pull Request and select your branch

// Click Create Pull Request

//         Merge pull request to master:


//                 Click Merge Pull Request, then Confirm Merge

//                 After a branch is merged, everyone should pull from master

//                 git pull origin master
