# Eval Lang 
## A pretty weird language that evaluates in a human way, made to be forgiving and looks like js.

```js 
field=Others
field='Others'
field="Others"
field = Others
field=Others;
field=9;
field > 9;
field < 9
field <= 9
field =< 9
field => 9
field >= 9
field;
field
```

```js
[
  { field: 'field', operator: '=', value: 'Others' },
  { field: 'field', operator: '=', value: 'Others' },
  { field: 'field', operator: '=', value: 'Others' },
  { field: 'field', operator: '=', value: 'Others' },
  { field: 'field', operator: '=', value: 'Others' },
  { field: 'field', operator: '=', value: '9' },
  { field: 'field', operator: '>', value: 9 },
  { field: 'field', operator: '<', value: 9 },
  { field: 'field', operator: '=<', value: 9 },
  { field: 'field', operator: '=<', value: 9 },
  { field: 'field', operator: '>=', value: 9 },
  { field: 'field', operator: '>=', value: 9 },
  { field: 'field', operator: '!' },
  { field: 'field', operator: '!' }
]
```

Does it require a javascript engine to run? No, when you parse this you'll get array (per line) of dictionaries with the field ```name, operator & value```.

The current design.
```js
field(( )[=|>|<|>=|=>|=<|<=]( )('|")value('|"))(;)
```

### Note
This is not a programming language, it's not turing complete, and I'm not planning to make it so.

There are things missing, for my use-case this was enough.
- XOR operator (planning to use ```|```)
- AND operator (planning to use ```&```)
- HAS operator (planning to use ```~```)




I hope you'll contribute to this repo, I've spent a night on implementing it.

```
Do what ever you want with this, but keep in-mind I am not responsible 
for any-type of damage it or it's usage/mis-use in any usecase have caused.
```
