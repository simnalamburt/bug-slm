slm-bug
========

#### Input

```slim
doctype html
html ng-app="whatever"
  body ng-controller="GreatCtrl"
    div ng-repeat="memo in memos | filter track by memo.id"
      h1 Some wonderful slm codes go here
      p But things went south
```

#### Expected output

*(Whitespaces included for readability)*

```html
<!DOCTYPE html>
<html ng-app="whatever">
  <body ng-controller="GreatCtrl">
    <div ng-repeat="memo in memos | filter track by memo.id">
      <h1>Some wonderful slm codes go here</h1>
      <p>But things went south</p>
    </div>
  </body>
</html>
```

#### Actual output

```html
<!DOCTYPE html><html ng-app="whatever"><body ng-controller="GreatCtrl">v ng-repeat="memo in memos | filter track by memo.id"
h1 Some wonderful slm codes go here
p But things went south</body></html>
```
