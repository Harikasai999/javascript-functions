// (example) Write a function that accepts two number arguments and adds them
// together.
function add(a, b) {
    var sum = a + b;
    return sum;

};

console.log(add(2,3));
// Create a function that takes in a cost and a quantity and outputs the total
// pre-tax cost for that quantity of items at the given price. For example
//
//     var preTaxTotal = totalCost(5, 5.99); // 5 items at 5.99
//     //=> 29.950000000000003
function totalCost(quantity, price) {
    var total = quantity * price;
    return total;
};
console.log(totalCost(5,5.99));

// Write a function that takes a rank and a suit as input, and returns a string
// representation of a card. For example, it should behave as follows
//
//     cardString("ace", "spades");
//     //=> ace of spades
//
//     cardString("queen", "hearts");
//     //=> queen of hearts
function cardString(rank, suit) {
    var cardString = rank + " of " + suit;
    return cardString;
};
console.log(cardString("ace","spades"));

// Write a function called `openTag` that accepts a tag name and returns an
// opening HTML tag with that tag name. For example,
//
//     openTag("p");
//     //=> <p>
//
//     openTag("div");
//     //=> <div>
function openTag(tag) {
    var open = "<" + tag + ">";
    return open;
};
console.log(openTag("div"));

// Similarly, write a function called `closingTag` that returns the closing HTML tag
// with that name.
//
//     closeTag("p");
//     //=> </p>
//
//     closeTag("div");
//     //=> </div>
function closeTag(tag) {
    var close = "</" + tag + ">";
    return close;
};
console.log(closeTag("div"));


// Write a function called `toTagString` that accepts two inputs: a tag name,
// and the string content, and returns the content tagged with the specified
// string.  For example:
//
//     toTagString("li", "list item 1");
//     //=> <li>list item 1</li>
//
//     // the 'em' tag is for 'emphasis'
//     toTagString("em", "this is important stuff");
//     //=> <em>this is important stuff</em>
//
// Although I won't be testing for this, your code should re-use the functions that
// you created in the previous section.
function toTagString(tag, content) {
    var result = openTag(tag) + content + closeTag(tag);
    return result;
};
console.log(toTagString("em","this is important stuff"));
