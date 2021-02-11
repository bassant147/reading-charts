## This project was created by create-react-app, and the backend was created with JSON-server.

### Available scripts - *npm must be installed first*

#### 1- For setup, This command will install all modules listed as dependencies in project. Open project directory and type:
#### &nbsp; &nbsp; &nbsp; *npm install*
#### 2- The following script runs both the frontend and backend servers *concurrently*:
#### &nbsp; &nbsp; &nbsp; *npm run dev* 
#### 3- For testing, *make sure both the frontend and backend servers are running before running this script* :
#### &nbsp; &nbsp; &nbsp; *npm run test-e2e*
---

### Testing - *Testcafe was used*

#### There are 4 testcases;
#### 1- A test for checking whether there is an Add Chart button.
#### 2- Three tests for checking each selection on the menu; to make sure that the selected chart is the same one that's being displayed to the user.
#### 3- To test for the internal server error scenario, I only ran the frontend server. An Alert appears as soon as the page loads.
---

### Please note the following:

Using Redux in this small app is considered an overkill because Redux takes a lot to setup. However, I decided to use it for scalibilty reasons. 
