# Directive
- Directives are classes that add additional behavior to elements in your Angular applications. 
- Use Angular's built-in directives to manage forms, lists, styles, and what users see
- The different types of Angular directives are as follows:
    - **Components**: Used with a template. This type of directive is the most common directive type.
    - **Attribute directives**: Change the appearance or behavior of an element, component, or another directive.
    - **Structural directives**: Change the DOM layout by adding and removing DOM elements.

## Type so Structural Directive
- ***ngIf** : Conditionally creates or disposes of subviews from the template.
- ***ngIf-else** : Conditionally creates or disposes of subviews from the template using if else block
- ***ngFor** : Repeat a node for each item in a list.
- ***ngSwitch** : A set of directives that switch among alternative views

### *ngIf
```
<div *ngIf="boolean"> </div>
```
Example:
**test.components.html**
```
<div *ngIf="display">
    This is Paragraph
</div>
<i><small>Note: This will be not show bcoz display is false</small></i>
```
**test.components.ts**
```
export class TestComponets
{
    display:boolean = false;
}
```

### *ngIf-else
```
<div *ngIf="boolean; else id_selector">  </div>
<ng-template #id_selector>  </ng-template>
```

Example:
**test.components.html**
```
<div *ngIf="display" else elseBlock>
    This is Paragraph 1
</div>
<ng-template #elseBlock>  
    This is Paragraph 2
</ng-template>
<i><small>Note: "This is Paragraph 2" will be show bcoz display is false</small></i>
```
**test.components.ts**
```
export class TestComponets
{
    display:boolean = false;
}
```

### *ngFor
```
<div *ngFor="let item of item-list">  </div>
```

Example:
**test.components.html**
```
<div *ngFor="let item of items; index as i"> 
 <p >{{i}}   {{item}} </p> 
</div>
```
**test.components.ts**
```
export class TestComponets
{
    items = ["item 1", "item 2", "item 3", "item 4"]
}
```

The following exported values can be aliased to local variables:
- `$implicit: T` : The value of the individual items in the iterable (ngForOf).
- `ngForOf: NgIterable<T>` : The value of the iterable expression. Useful when the expression is more complex then a property access, for example when using the async pipe (`userStreams` | async).
- `index: number` : The index of the current item in the iterable.
- `count: number` : The length of the iterable.
- `first: boolean` : True when the item is the first item in the iterable.
- `last: boolean` : True when the item is the last item in the iterable.
- `even: boolean` : True when the item has an even index in the iterable.
- `odd: boolean` : True when the item has an odd index in the iterable.

### *ngSwitch
```
<div [ngSwitch]="expression">
  <div *ngSwitchCase="expression_1"></div>  
  <div *ngSwitchCase="expression_2"></div>  
  <div *ngSwitchDefault></div>  
</div>
```
Example:
**test.components.html**
```
<div [ngSwitch]="digit"> 
  <div *ngSwitchCase="'one'">One is Displayed</div>   
  <div *ngSwitchCase="'two'">Two is Displayed</div>   
  <div *ngSwitchDefault>Default Option is Displayed</div>   
</div> 
```
**test.components.ts**
```
export class TestComponets
{
    digit:string = 'one';
}
```

# Note : One structural directive per element
The reason why we cannot use multiple structural directives on the same element is because it would be ambiguous which directive should take precedence. For example, if you had both *ngIf and *ngFor on the same element, which directive would decide whether or not the element should be rendered?

To avoid this ambiguity, Angular only allows you to use one structural directive per element. However, there is an easy workaround for this: you can put the *ngIf directive on a container element that wraps the *ngFor element. This will allow you to control the rendering of the *ngFor element based on the condition specified in the *ngIf directive.