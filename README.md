# Increased

## What I want it to have?
- **Home**
    - General (always available)
        - Settings
        - "Increased" logo
        - Current day / date
        - "Welcome" catchphrase - text will change based on *user's activity*
    - Brand new
        - Start new Workout
        - Copy previous Workout
    - With workout
        - Workout's title
        - Preview of all exercises

- **Entities**
    - Exercise
        - Name
        - Category (1 or more) - each may have subcategories (user could possibly add new ones)
            - Chest
            - Back
            - Biceps            
            - Triceps
            - Forearms
            - Legs (example of subcategories)
                - Quads
                - Hams
                - Glutes
                - Calves
                - ...
        - Type (each checkboxed)
            - Weight
            - Reps
            - Time
            - Distance
        - Difficulty (optinal - just for user to choose)
    - Workout plan (Template)
        - Name
        - Exercises
        - Categories (derived from exercise categories)
        - Behaviour:
            1. **Using existing Workout plan**:
                - Shown on the Home screen as "Use Existing Workout"
                - Once clicked it would lead user to his alredy made Workout plans
                - User picks one of them 
                - App will load last record of this workout with all its exercises, sets, weights etc.
            2. **Create new workout plan**:
                - Also shown on the Home screen or user can just simply create new workout plan apart from current day and save it to his plan (that is not really important for now)
                - During creation of new Workout plan user will: 
                    - *Enter a name*
                    - *Select exercises* (max of 10 or whatever)
                    - *May fill other optional parameters which I do not know about at the moment so pass it, for now*
                - Now the workout can be used as template for user sessions
                - Each time this workout is used, system will count it
                - Does not matter whether the workout has been modified in terms of sets, reps, time... However, once new exercise would be **added or removed**, it will **not count as the part of the workout plan** anymore and would be considered as "Free session"
# Principles
### "Free session"
- Special type of workout
- Gets created when:
    - user alternates current workout (adds, removes or replaces and exercise) that was based on workout plan
    - user simply chose "Start new Workout" at the Home screen and then picked "Free session" - then they can enter whatever exercise needed
- At the end of the "free session", user **can save it as new Workout plan** if they want
