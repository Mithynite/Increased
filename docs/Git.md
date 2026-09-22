
# Git

- **nejrozšířenější verzovací systém** 
	- narozdíl od GitHubu či GitLabu - **to jsou serverové nadstavby**
- Git repository je vše co v sobě má .git soubor (skrytý)

### Branches
- main / master branch
- merging with other branches

### Commands

`git config --global -l` = lists all the configuration for the Git (username, email...)
	`git config --global user.username "Kuba"` = change username

`git init` = initialize Git repository (makes the current folder a Git repo)
	`git init -b "some-branch"` = define branch name

`git branch (--all)` = show all branches
	`git branch -M <old-name> <new-name>` = rename a branch
	`git branch -v (--all)` = shows all commits
	`git branch <new-branch-name>` = create new branch (new branch automatically copies all the current content of the main branch)
`git switch <new-branch>` = switch to different branch


`git status` = shows our repo status (something to commit etc.) + which branch is currently in use

`git remote` = shows currently connected remote repositories/projects (if none is connected, the output is empty)
	`git remote add <remote-name> https://gitlab.fel.cvut.cz/...`  = add remote (name is usually "origin")
	`git remote -v` = prints connection details

`git pull <remote-name> <branch>` = pulls the content of the remote project (use token instead of password)

`git log` = information about commits, SHA and other
	`git log --all` = all info (exit with "q")
	`git log --all > <path/file-name>` = export all git logs

`git add <file-name>` = add new file to commit
	`git add --all` = adds all the untracked files

`git commit` = make a commit
	`git commit -m "Založení nového souboru"`

`git fetch origin` = gets all the remote commits (for comparison etc.)

`git push <remote> --all` = push all the changes to the remote (origin)
	`git push origin <branch name>` = push just single branch changes
	`git push -f origin Oprava` = force push changes the remote content **no matter what**

`git pull <remote>` = pull remote changes
	`git pull origin Oprava` = just changes from the branch "Oprava"

### Return to historical commit

`git switch <some branch>`
`git log --all`
`git checkout <hash>` = enter a hash of the commit we want to return to
- currently we are in semi-state so we shall continue or go back to the previous branch

![[Pasted image 20251012135525.png]]

#### Option 1: Return to the previous branch  
`git switch main`

![[Pasted image 20251012135711.png]]

#### Option 2: Continue working from the commit

- create new branch from the old commit

![[Pasted image 20251012140044.png]]
### Branch merge

- we need to switch to the sub-branch (which does not contain the changes)

#### Fast-forward merge

- when one branch is sub-branch to another

`git switch <sub-branch name>`
`git merge <branch-name>` = merge with the branch which contains the changes 
`git log --all`