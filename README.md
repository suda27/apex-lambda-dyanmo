# apex-lambda-dyanmo
How to create a sample lambda function using apex and read/write value to the dynamo DB

# Creata a role that has AWS lambda full access & Dynamo DB access
Now, it depends on the user to choose which level of permission can be granted. 
Try avoding to give full access to resources.

# Start from fresh? 
Install APEX from www.apex.run 

1 . Open the terminal. 
2 . Create a directory. 
3 . apex init - to initalize your function.
4 . Fill out the project name,description as you go by.
 
 # pre-requisite 
 1 . AWS account.
 2 . Create a user from IAM. (Best Practise).
 3 . Configure the user. (aws configure).
 4 . Create the table in the Dynamo DB.
 5 . Also create a role for the user same as mentioned above.
 
 # how to deploy? 
use the command "aws deploy" on terminal.
