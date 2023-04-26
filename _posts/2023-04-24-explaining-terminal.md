---
title: "Introduction to Terminals: Part 1"
---

#### _This article was written during a 75-minute interview I had for a technical writer position. The task was to write an article aimed at mid-teens about terminals. Here is exactly what I came up with in that time. My goal was to teach all the way up to how to open Google Chrome using the terminal, rather than double-clicking on the Desktop icon. Feel free to critique me in person._

----------------------------

If you happen to find yourself around programmers or hackers one day, it is very possible that you may hear one of the following terms: "terminal", "command line", or "CLI" (short for "Command Line Interface"). As it turns out, all these terms mean the same thing. However, that latter term gives some more information about what a "terminal" actually is: an interface.

Now, what is an interface? An interface is simply a program, or a "view" of a computer, allowing a user (you, me, and everyone else using computers) to interact with that computer. This "view" can come in various flavors. For example, I have a Windows device, i.e. my laptop runs the Windows Operating System (OS). Windows has a very easy to use interface (their programmers work hard to make it easy to use so that more people will buy their OS). Consequently, when most people use a computer, they use what's known as a Graphical User Interface (GUI). The GUI is made up of windows, icons, and menus that allow you to interact with the computer by clicking and dragging things on the screen. It does not get any more intuitive than seeing a red "X" button on the top right corner of your browser, and using it to close that windows. Just what the average, non-technical, computer-user needs.

Then we have the computer enthusiasts. Instead of just using their computers simply for basic tasks like checking email, these people take it to the next level. They write code. They automate tedious tasks. They hack into their OS to make it more efficient. They themselves are more efficient with the computer. How?

As it turns out, using the GUI is not the most efficient way of doing things sometimes. Sure, double clicking on an icon on your Desktop is easy, but sometimes, doing things through the terminal can be faster and more efficient. With the terminal, you can accomplish tasks with a few simple commands, instead of navigating your way through folders, and clicking through menus and options.

![CLI versus GUI](https://www.itrelease.com/wp-content/uploads/2017/11/GUI-vs-CLI.png)

You can also perform more complex tasks through the CLI. For instance, you can use the CLI to search for specific files or folders on your computer, rename files or folders in bulk, or even modify system settings. Let's try it out together right now (I will assume you have a Windows computer)!

In the bottom left corner of your keyboard, you have the "Windows" key. Press that. Now a menu bar will open. Without clicking on anything (turns out, using the mouse for clicking isn't all that efficient), write "cmd". This will prompt you to open one of Window's terminals, the "Command Prompt" (there is also a different terminal called "PowerShell"). Now a black box will open. This is the terminal! 

Yours will say something similar to mine:

**Microsoft Windows [Version 10.0.19044.2728]**
**(c) Microsoft Corporation. All rights reserved.**

**C:\Users\Andrei>**

Instead of "Andrei" it will be your name or whatever you named your computer. "C:\Users\Andrei>" indicates the current directory that I am in ("directory" is another word for "folder"). This means that I am currently in a folder called "Andrei", and this folder is in another (parent) folder called "Users", and "Users" is inside the grand-daddy of all the folders on my computer: the C drive (a.k.a. the "root directory"). From here, we can execute various commands to interact with our computer.

Let's start with a basic command: "dir". Type "dir" into the terminal and press enter. This command will display a list of all the files and folders in the current directory (I am in the "Andrei" folder). You will see a list of files and folders with their names, sizes, dates/times last accessed, and if it is a folder or not ("DIR" is for "directory"). You can now navigate to a "child directory" of the folder you are currently in. For example, by executing the "dir" command in the "Andrei" directory, I can see "Desktop" in the list. This means that I can use the "cd" command to "change directories" ("cd"). If I want to go to the "Desktop" folder, I will type "cd Desktop" and press enter. 

Now that I am inside of "Desktop", let's say I want to create a folder. The command to create a new folder is "mkdir". Type "mkdir test" and press enter. This command will create a new folder named "test" in the directory which you are in ("Desktop" in our case).

And this is just scratching the surface with what we can do with the terminal. 

The terminal also allows you to perform more advanced tasks such as networking and system management. For example, the "ping" command can be used to check the connectivity of a network host, while the "tasklist" command can be used to display a list of running processes.

Overall, the Windows CLI is a powerful tool that can help you perform a wide range of tasks more efficiently. With practice, you can become more comfortable using the terminal and unlock its full potential.

