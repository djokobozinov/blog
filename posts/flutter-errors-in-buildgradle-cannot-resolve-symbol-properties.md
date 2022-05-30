---
title: 'Errors in build.gradle in Flutter application: Cannot resolve symbol "Properties" and Cannot resolve symbol "GradleException"'
date: '2021-11-08'
description: 'If you are developing Flutter application using Android studio maybe you have seen this errors in build.gradle'
tags: 'Flutter'
---

If you are developing Flutter application using Android studio maybe you have seen this errors in build.gradle:
- Cannot resolve symbol 'Properties'
- Cannot resolve symbol 'GradleException'

![Screenshot from 2021-11-08 10-07-28.png](/images/posts/flutter_errors_1.png)

You can just choose to ignore this error, it will not cause any problems.
Or if it is too annoying, you can checkout the following solution.

### Solution:

- Go in *File -> Project Structure -> Project Settings -> Project* and set *Project SDK* to *Android API 30 Platform* (or the latest).
![Screenshot from 2021-11-08 10-08-17.png](/images/posts/flutter_errors_2.png)

- Go in *File -> Project Structure -> Project Settings -> Modules* and select the *Dependencies* tab and choose *Android API 30 Platform* in the *Module SDK* dropdown.
![Screenshot from 2021-11-08 10-08-34.png](/images/posts/flutter_errors_3.png)

- Change *GradleException()* to *FileNotFoundException()* because it's not supported in the Java version of Android API 30
![Screenshot from 2021-11-08 10-40-59.png](/images/posts/flutter_errors_4.png)
 


And the problem is solved.