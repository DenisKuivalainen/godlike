# My personal CV webpage

This page was created to achieve 2 goals: to be able to provide information about me, and to show what I can.

## Links

* [Webpage](https://kuivalainen.herokuapp.com/) hosted on Heroku.
* [Calculatronz](https://kuivalainen.herokuapp.com/calculatronz) page hosted on the server.
* [Schedule](https://kuivalainen.herokuapp.com/nspu/schedule?id=1139) api hosted on the server.

### Technologies

* React js
* Node js

### Application logic

The application uses as input an object containing some information presented in a format close to json. Each component of the code takes the necessary information from this object and generates the page content based on it.

Let's consider the algorithm for generating the "Skills" field. The component uses the following part of the object:

```sh
skills: [
    {
        name: 'Programming',
        spec: [
            'JavaScript (React, Node.js, Express)',
            'C# (MVC, Xamarin mobile programming, Unity)',
            ...
        ]
    },
    ...
],
```

Each object  in *skills* array is used to render: name is added to array as title of a skill, each item in *spec* array is added to the same array via parser script (it splits a line into strings of length *n*). After all items of array are mapped as paragraph HTML elements.

So, the information is easy to change, add or edit changing only one file. All information will be rendered automaticaly.

### ToDo

* Change browser icon
* Add link to Instagram on photo hover
* Add link to download .pdf resume on 
* Chande information source

## License

MIT
