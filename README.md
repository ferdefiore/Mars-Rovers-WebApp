# Mars Rovers - IBM Interview
### Problem introduction
 
A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.	
A rover's position and location are represented by a combination of x and y coordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North. 
In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading. 
Assume that the square directly North from (x, y) is (x, y+1).
 
**INPUT:**
The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.
 
The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau. 
The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation. 
Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.
 
**OUTPUT:**
The output for each rover should be its final coordinates and heading.
 
**EXAMPLE:**
**Test Input:** 5 5 1 2 N LMLMLMLMM 3 3 E MMRMMRMRRM
**Expected Output:** 1 3 N 5 1 E

## Extra:
As a complement to the solution of the problem, create a GUI where users should be able to:
- Set up the grid dimensions and visualize it accordingly
- Input rover's stating position and visualize it in the grid
- Input the instructions, run them, and visualize the rover in its final position 

# Main Application Description
This repository contains the source code to solve the Mars Rovers problem. But it is a spin-off of the original one. The main idea is to run a lot of rovers with a text input. This application is a complement to the solution. So here you can only run one rover.

The original is in: [Original Mars-Rovers.]([https://github.com/ferdefiore/Mars-Rovers](https://github.com/ferdefiore/Mars-Rovers)) 

It's a complete full-stack application that uses node-js, express, HTML, and CSS. 

To run the application, download or clone this project from the root directory. To start the backend you must be sure to have [NodeJs]([https://nodejs.org/es/](https://nodejs.org/es/)) installed.

After that, in the project folder, open a command console an run:

    npm i
    npm start

The server will show a message with the link to the web page because it runs on the localhost using HTTP and HTTPS ports.

> Listen on: http://localhost:8080/home/index.html
Listen on: https://localhost:8443/home/index.html

# UI Interface
This application has only one screen. Here the user can set the plateau dimensions, render the plateau, set the rover's position, and his instruction set.
It's important to click each button after writing the parameters,  if not it can show some input errors.
![Menu](https://user-images.githubusercontent.com/38536245/88965031-8c513300-d280-11ea-99ff-ab430e33c286.png)

After these three steps, with the run button, the rover will be shown in his final position.

![Rover](https://user-images.githubusercontent.com/38536245/88965026-8bb89c80-d280-11ea-9a88-d943e5d2802f.png)

