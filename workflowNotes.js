// Googling things is part of life now
//  99% of the questions you have are already on the web, answered
// You need to work on a task and hit walls for about 15 minutes. IF you still can't resolve the task,
// THEN YOU NEED TO ASK ANOTHER STUDENT/COWORKER, or ASK STACK OVERFLOW.
// Clearly formated Stack OverFlow questions can get answers as quickly as under 5 minutes. Word it clearly,
// and show what you have tried and what you are trying to resolve.

// If you still have no solution, ask DIR for assistance with task. THIS IS WHAT THEY ARE HERE FOR.
// IF YOU DON'T ASK, YOU WILL SPIN YOUR WHEELS ON THE FIRST STEP FOR HOURS. This doesn't help anyone.
// Tag Ian or James on slack if you can't reach them through Zoom.

// --------------
// Software Development Methods

// Waterfall Method
//  - Requirements: what is needed (8 months)
// - Specifications: what is needed to make the requirements happen (2 months)
// - Implementation: the coding to make it happen (1-2 years)
//  - Testing (1-2 months)

// This process will restart itself back at Requirements after Testing reveals what needs to be added
// Client sees the software after 2 years, which could mean they are surprised with the result and it doesn't work.
// This is an older way of doing it, like oil and gas, places that have been developing software for years.


// Agile Development Method

// Used mostly in software dev companies, workshops, etc. To maintain a stable work flow.
// It's not necessary to follow all steps exactly. But this is a good outline of the process.

// 1) Sprints: 
    // You are producing working code every 2-3 weeks, you will show to client demoing on a live site.
    // You have to deliver something every 2 weeks or so. This can be like a login page, but it is developed
    // in full for a demo. Login works, the layout and design is complete, etc.
    // After sprint time you will demo the product to the client.

// 2) Pair Programming:
    // One person is coding (driver) and the other person is the observer (watching).
    // The watcher is trying to think of better solutions, missing functions, etc.
    // After 30 minutes, switch roles.
    // You can solve the problem faster because you have two people looking at the problem.
    // Some companies do this, some don't

// 3) Automated Testing
// 4) Code Reviews:
    // One day a week or so, sit with team mates and lead developer and review the code you have made.
    // It's a time for constructive criticism, for collaborating on how to improve the existing code and
    // come up with better solutions.
    // Some companies do this, some don't

// 5) Automated Development
// 6) Scrum Meeting:
    // Every day at the start of the work day, you will gather your team members.
    // Each team member will answer three questions:
        // What did you do yesterday?
        // What are your plans for today?
        // Are there any blockers (anything preventing your progress)?
    // This is not a technical meeting, so it should last about 2 minutes total. Each person only needs to
    // talk for about 30 seconds. Say what you need in one line, this isn't the place to dive into code or 
    // solve a problem. This is only an update.

// --------------------

// Normal Flow

// Business People come up with the requirements. They know how the business works, not the coding itself.
// They know how their equipment works, how to communcate with customers, and what their processes are. 
// How things are approved, what the regulations are, etc.

// Shopping Car Application

// Stories - the requirements that the business people come up with on a Backlog

// 1- A user should be able to register
// 2 - user should be able to login
// 3- user should be able to update/delete their products
// 4- user should be able to list their products

// Planning Phase:
// This is when Manager meets with developers to discuss the requirements

// Manager then asks developers "What do you think the complexity of this story is?"
// This means how complex do you think this is, which is a relative term. It's not asking for time length exactly.

// For ex: for story 1,
// features are assigned a Points system to describe the complexity, a Fibronacci sequence
//  1, 2, 3, 5, 8, 13, 26 (something like the number added to itself)

// Planning Poker
// Manager will ask all the developers: "Which of these numbers do you think the compexity of this story is?"
// Devs will write number down, or on phone, and on the count of three devs will show 
// You will then work with your dev team mates to decide which number you can agree on. People with lower numbers
// will generally move to higher numbers to meet with team mates.

// As each story is assigned and worked on, the number will probably get lower. Like a recipe, the first time
// you make it, it may take longer and you will make mistakes. But by the 10th time you have learned how to do it
// well and will avoid the major hangups.

// Add up the total Points for all stories: Total Points = 34
// This is the total point score for one sprint, which is 2 weeks.

// A big whiteboard with sticky notes is common, but online tools like Trello are used as well.

// You can add the story parts, color code them, etc.
// You will add all the tasks needed to complete each story to the Backlog. This is where you break the story
// down into each task that will make up the complete story.

// Ex. Backlog task items for Story 1: user should be able to register
    // -create a register page with validation
    // -make it mobile responsive
    // -Setup a Firebase database
    // -Encrypt the password before storing in DB

// You will estimate and assign a time range to each task, like 1/2 a day, a 1/4 of a day, 2 days 

// When a developer is assigned or chooses a task, they will take that sticky note and move it to the Doing
// section and write their name on it.

// When developer is finished with a task, it is tempting to move on to another Story, or the next Story.
// A common mistake is to switch Stories before all tasks are completed. Go to the next task to complete the
// Story that is currently being worked on.

// Once all the tasks are completed, there is a bunch of things sitting with the QA Tester and it may be
// one person to test all the tasks. You will need to help them out if you are completed with tasks to
// test the features and ensure the story is completed, fully tested, and ready for production.

// So you started the Sprint with 34 Points worth of features, and you Completed = 26 points for ex. Say
//  you were not able to complete one of the features assigned to the first Sprint. You go on to the next
// Sprint and work on those Stories and add up the Completed Points from that sprint = 32 points.

// You will average the amount of points that you are completing each Sprint, and the average count will
// equal your Velocity. This is the speed at which you are completing work on average.
// After 3 to 4 sprints, you can get a decent average of the points to judge how much work you can handle
// in each Sprint.

// If you've averaged 28 Points in your Velocity, and you are then assigned 42 points worth for a Sprint,
// You are able to say that 42 points will be too much work for your team and will not be able to complete
// that much work in one Sprint. You can then judge how much you could do if you really stretched yourself
// and pushed, like 30 points may be reasonable with extra hard work at your current Velocity.

// When Demoing a product, demo is always on a designated server and NOT ON YOUR LOCAL MACHINE. Surge.sh is
// a good resource for easily taking a testing site online for demo.
// Some companies may not have the developers demo the product, it really will depend on each place and their
// practices.

// When you see a third party dependency, you can add 20-30%% more time beacuse there are other factors you are 
// dependent on. There may be a password to something like Amazon AWS Client, and the person who has the password
// is on vacation. It could be that you are publishing to a company's existing server, and you are dependent on
// someone getting that info to you or expecting errors to come up that you can't control.

// When choosing a dev method, waterfall or agile, both client and developers must agree on which one to follow.
// You have to explain each and collaborate with them. Some clients or companies may be particular about a preference
// for Waterfall method over Agile, or vice versa. It will really depend on each client, on each company, etc.

