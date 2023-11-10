# Data Binding
- Data binding automatically keeps your page up-to-date based on your application's state
- You use data binding to specify things such as the source of an image, the state of a button, or data for a particular user.

## One Way Binding
- One-way data binding is a one-way interaction between component and its template
- If you perform any changes in your component, then it will reflect the HTML elements
- It supports the following types :

### String Interpolation
- String interpolation is the process of formatting or manipulating strings
- In Angular, Interpolation is used to display data from component to view (DOM).
- It is denoted by the expression of {{ }} and also known as **mustache** syntax

Let’s create a simple string property in component and bind the data to view.
Add the below code in **test.component.ts** file as follows −

```
export class TestComponent implements OnInit { 
   appName = "My first app in Angular 8"; 
}
```

Move to **test.component.html** file and add the below code −
```
<h1>{{appName}}</h1>
```

### Event Binding
- Events are actions like mouse click, double click, hover or any keyboard and mouse actions
- If a user interacts with an application and performs some actions, then event will be raised
- It is denoted by either parenthesis () or on-.
- We have different ways to bind an event to DOM element.

Let’s understand how simple button click even handling works.

Add the following code in **test.component.ts** file as follows −
```
export class TestComponent { 
   showData($event: any){ 
      console.log("button is clicked!"); if($event) { 
         console.log($event.target); 
         console.log($event.target.value); 
      } 
   } 
}
```

- **Here, the target is button. $event.target property will have the target information.**

We have two approaches to call the component method to view (test.component.html). First one is defined below -
```
<h2>Event Binding</h2> 
<button (click)="showData($event)">Click here</button>
```

Alternatively, you can use prefix - on using canonical form as shown below −
```
<button on-click = "showData($event)">Click here</button>
```

### Property Binding
- Property binding is used to bind the data from property of a component to DOM elements. - It is denoted by []

Let’s understand with a simple example.

Add the below code in **test.component.ts** file.
```
export class TestComponent { 
   userName:string = "Peter"; 
   imgPath:string = "asserts/img1.jpg"
}
```

Add the below changes in view **test.component.html**,
```
<input type="text" [value]="userName" />
<img [src]="imgPath" />
```

### Attribute Binding
- Attribute binding is used to bind the data from component to HTML attributes. 
- The syntax is as follows −
```
<HTMLTag [attr.ATTR]="Component data">
```

For example,
```
<td [attr.colspan]="columnSpan"> ... </td>
```

### Class binding
- Class binding is used to bind the data from component to HTML class property. 
- The syntax is as follows −
- Class Binding provides additional functionality. 
- If the component data is boolean, then the class will bind only when it is true. 
- Multiple class can be provided by string (“foo bar”) as well as Array of string. 
- Many more options are available.

For example,
```
<p [class]="myClasses">
```

Let’s understand with a simple example.

Add the below code in **test.component.ts** file,
```
export class TestComponent { 
   myCSSClass = "red"; 
   applyCSSClass = false; 
   applyCSSClassTrue = true; 
}
```

Add the below changes in view **test.component.html** 
```
<p [class]="myCSSClass">This paragraph class comes from *myClass* property </p> 
<p [class.blue]="applyCSSClass">This paragraph class does not apply</p>
<p [class.blue]="applyCSSClassTrue">This paragraph class does apply</p>
```

Add the below content in **test.component.css**
```
.red { 
   color: red; 
} 
.blue { 
   color: blue; 
}
```

### Style Binding
-Style binding is used to bind the data from component into HTML style property. 
- The syntax is as follows −

```
<HTMLTag [style.STYLE]="component data">
```

For example,
```
<p [style.color]="myParaColor"> ... </p>
```

Let’s understand with a simple example.

Add the below code in **test.component.ts** file.
```
myColor = 'brown';
```

Add the below changes in view **test.component.html**
```
<p [style.color]="myColor">Text color is styled using style binding</p>
```

--------------------------------------------------------------------------------------

## Two-way data binding
- **Two-way data binding** is a two-way interaction, data flows in both ways (from component to views and views to component). 
- Simple example is **ngModel**. 
- If you do any changes in your property (or model) then, it reflects in your view and vice versa. 
- It is the combination of property and event binding

### NgModel
- NgModel is a standalone directive. 
- ngModel directive binds form control to property and property to form control. 
- The syntax of ngModel is as follows −
```
<HTML [(ngModel)]="model.name" /> <!--This is also called BANANA in the BOX-->
```
For example,
```
<input type="text" [(ngModel)]="model.name" />
```
Let’s try to use **ngModel** in our test application.

Configure **FormsModule** in **AppModule** (src/app/app.module.ts)
```
import { FormsModule } from '@angular/forms'; @NgModule({ 
   imports: [ 
      BrowserModule, 
      FormsModule
   ] 
}) 
export class AppModule { }
```
**FormModule** do the necessary setup to enable two-way data binding.

Update **TestComponent** view **(test.component.html)** as mentioned below −
```
<input type="text" [(ngModel)]="userName" />
<p>Two way binding! Hello {{ userName }}!</p>
```
Property is bind to form control **ngModel**directive and if you enter any text in the textbox, it will bind to the property.