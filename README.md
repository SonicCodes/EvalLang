# Eval Lang 
## A pretty weird language that evaluates in a human way, made to be forgiving and looks like js.

```field=Others
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

Does it require a javascript engine to run? No, when you parse this you'll get array (per line) of dictionaries with the field ```name, operator & value```.

The current design.
```
field(( )[=|>|<|>=|=>|=<|<=]( )('|")value('|"))(;)
```


I hope you'll contribute to this repo, I've spent a night on making it.

```
Do what ever you want with this, but keep in-mind I am not responsible 
for any-type of damage it or it's usage/mis-use in any usecase have caused.
```
