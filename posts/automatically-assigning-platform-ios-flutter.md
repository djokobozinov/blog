---
title: 'Automatically assigning platform `iOS` with version `10.0` on target `Runner` because no platform was specified - Flutter'
date: '2021-09-18'
description: 'If you had this error when trying to build Flutter app on iPhone 12 Pro Max this is the solution that worked for me'
---

If you had this error when trying to build Flutter app on iPhone 12 Pro Max this is the solution that worked for me:

- Go in the flutter_project/ios, open the Runner.xcodeproj, and change the iOS version to 10.0, in the Deployment Info, if you have version that is bellow.
![Screenshot 2021-09-18 at 13.21.01.png](/images/posts/automatically_assign_platform_flutter.png)

- In your terminal in flutter_project run 
```
$ flutter clean
``` 
- In your terminal in flutter_project/ios run the commands 
```
$ pod update
$ pod repo update
``` 
- Open iOS simulator and in terminal run
```
$ flutter run
```

And the problem is solved!
