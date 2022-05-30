---
title: 'Create Linux application with Flutter'
date: '2021-05-27'
description: 'Hello, in this article I will explain step by step, how you can create Linux application with Flutter'
tags: 'Flutter, Linux'
---

Hello, in this article I will explain step by step, how you can create Linux application with  [Flutter](https://flutter.dev/) . 

I have currently installed Ubuntu 21.04, but you can do it at any Linux distribution.

- **Install snap on Ubuntu**  from the command line
```
$ sudo apt update
$ sudo apt install snapd 
``` 

- **Install Flutter using snapd**
```
$ sudo snap install flutter --classic
``` 

- Install additional requirements for Linux
```
$ sudo apt-get install clang cmake ninja-build pkg-config libgtk-3-dev
``` 

- **Enable Linux desktop support**
```
$ flutter config --enable-linux-desktop
``` 

- **Install  [Visual Studio Code](https://snapcraft.io/code)**

   I have decided for this demonstration to use Visual Studio Code, but you can also 
   use Android Studio.
```
$ sudo snap install code --classic
``` 

- **Install Flutter plugin**
 - open VS Code
 - Go in extensions
 - Type in the search field "flutter"
 - Install and restart VS Code

![image.png](/images/posts/create_linux_application_with_flutter_1.png)

- **Create new Flutter project**
 - in VS code press Ctrl+Shift+P 
 - Select **Flutter: New Application Project** and press Enter
 - Select destination for the project
 - Enter project name

 Now you have created new Flutter project.

![image.png](/images/posts/create_linux_application_with_flutter_2.png)

- In the bottom right corner select the target device, we will select "**Linux desktop**". If you want to build web app or android you can select some other device.

![Screenshot from 2021-05-26 14-51-42.png](/images/posts/create_linux_application_with_flutter_3.png)

- **Run application**

To run application just click **Run > Start Without Debugging**, or press Ctrl+F5.
And here is our Flutter application for Linux.

![image.png](/images/posts/create_linux_application_with_flutter_4.png)

For this simple tutorial, my source is Flutter official documentation that can be find [here](https://flutter.dev/docs).

In some of the next articles I will write more about how you can deploy Flutter application to  [Snapcraft](https://snapcraft.io/) .

Thanks.


Checkout my Flutter game for Linux  [here](https://snapcraft.io/memory-game).