---
title: 'GestureDetector with Container is not tappable on empty spaces'
date: '2022-04-25'
description: 'GestureDetector with Container is not tappable on empty spaces, on tap is working only for childs inside.'
---

GestureDetector with Container is not tappable, on tap is working only for childs inside. 

```
class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Column(
        children: <Widget>[
          GestureDetector(
              onTap: _incrementCounter,
              child: Container(
                width: double.infinity,
                height: 50,     
                child: Row(children: [
                  Icon(Icons.developer_mode),
                  Text('This is test row'),
                ]),
              )),
          Divider(),
          Text(
            'You have pressed times $_counter times',
          ),
        ],
      ),
    );
  }
}
```
If you try to tap anywhere in the empty spaces of the Row, you will see that counter is not increasing.

![image.png](/images/posts/gesture_1.png)

To fix this behavour, you can use a workaround. Just add ```color: Colors.transparent,``` in the Container that have child Row.

![image.png](/images/posts/gesture_3.png)

![image.png](/images/posts/gesture_2.png)

