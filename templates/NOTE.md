
# NOTE

Classes in this folder are resuable html snippets. So for any piece of the the site you want to reuse, you'll
want to make one of these. 

If you want to define the style for one of these in the main css class then you need to do this:

Put a 'part' tag in your innerHTML
```
<button part="but-button">Click me</button>
```
In your css put the snippet name and then this
```
my-button::part(but-button) {
    background-color: #008CBA;
    ... whatever you want ... 
}
```
