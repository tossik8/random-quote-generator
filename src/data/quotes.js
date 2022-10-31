const quotes = [
    {
        "quote": "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
        "author": "Sheryl Sandberg"
    },
    {
        "quote": "The best thing to hold onto in life is each other.",
        "author": "Audrey Hepburn"
    },
    {
        "quote": "Love doesn’t make the world go round. Love is what makes the ride worthwhile.",
        "author": "Franklin P. Jones"
    },
    {
        "quote": "The most sincere compliment we can pay is attention.",
        "author": "Walter Anderson"
    },
    {
        "quote": "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
        "author": "Steve Jobs"
    },
    {
        "quote": "That's been one of my mantras - focus and simplicity. Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it's worth it in the end because once you get there, you can move mountains.",
        "author": "Steve Jobs"
    },
    {
        "quote": "It's not that I'm so smart, it's just that I stay with problems longer.",
        "author": "Albert Einstein"
    },
    {
        "quote":"Be yourself; everyone else is already taken.",
        "author":"Oscar Wilde"
    },
    {
        "quote":"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "author": "Marilyn Monroe"
    },
    {
        "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "author": "Albert Einstein"
    },
    {
        "quote":"So many books, so little time.",
        "author":"Frank Zappa"
    },
    {
        "quote":"A room without books is like a body without a soul.",
        "author":"Marcus Tullius Cicero"
    },
    {
        "quote":"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "author":"Bernard M. Baruch"
    },
    {
        "quote":"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
        "author":"William W. Purkey"
    },
    {
        "quote":"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "author":"Dr. Seuss"
    },
    {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
    },
    {
        "quote": "The way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {
        "quote": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        "author": "Steve Jobs"
    },
    {
        "quote":"If life were predictable it would cease to be life, and be without flavor.",
        "author":"Eleanor Roosevelt"
    },
    {
        "quote": "In the end, it's not the years in your life that count. It's the life in your years.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "author": "Oprah Winfrey"
    },
    {
        "quote": "It is during our darkest moments that we must focus to see the light.",
        "author": "Aristotle"
    },
    {
        "quote": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "author": "James Cameron"
    },
    {
        "quote": "Life is what happens when you're busy making other plans.",
        "author": "John Lennon"
    },
    {
        "quote":"You only live once, but if you do it right, once is enough.",
        "author":"Mae West"
    },
    {
        "quote": "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "The only impossible journey is the one you never begin.",
        "author": "Tony Robbins"
    },
    {
        "quote": "Only a life lived for others is a life worthwhile.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Love the life you live. Live the life you love.",
        "author": "Bob Marley"
    },
    {
        "quote": "I failed my way to success.",
        "author": "Thomas Edison"
    },
    {
        "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "author": "Maya Angelou"
    },
    {
        "quote":"Be the change that you wish to see in the world.",
        "author":"Mahatma Gandhi"
    },
    {
        "quote":"In three words I can sum up everything I've learned about life: it goes on",
        "author":"Robert Frost"
    },
    {
        "quote":"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        "author":"J.K. Rowling"
    },
    {
        "quote":"Don’t walk in front of me… I may not follow, Don’t walk behind me… I may not lead, Walk beside me… just be my friend",
        "author":"Albert Camu"
    },
    {
        "quote": "The journey of a thousand miles begins with one step.",
        "author": "Lao Tzu"
    },
    {
        "quote": "When the going gets tough, the tough get going.",
        "author": "Joe Kennedy"
    },
    {
        "quote": "Life is like a box of chocolates. You never know what you’re going to get.",
        "author": "Forrest Gump"
    },
    {
        "quote":"If you tell the truth, you don’t have to remember anything.",
        "author": "Mark Twain"
    },
    {
        "quote": "What you do speaks so loudly that I cannot hear what you say.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "A mind is like a parachute. It doesn’t work if it isn’t open.",
        "author": "Frank Zappa"
    },
    {
        "quote": "If you aren’t going all the way, why go at all?",
        "author": "Joe Namath"
    },
    {
        "quote": "I would rather die of passion than of boredom.",
        "author": "Vincent van Gogh"
    },
    {
        "quote": "Keep smiling, because life is a beautiful thing and there’s so much to smile about.",
        "author": "Marilyn Monroe"
    },
    {
        "quote": "The successful warrior is the average man, with laser-like focus.",
        "author": "Bruce Lee"
    },
    {
        "quote": "Creativity is intelligence having fun.",
        "author": "Albert Einstein"
    },
    {
        "quote":"Food comes first and then morality.",
        "author": "Bertolt Brecht"
    },
    {
        "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
        "author": "Bruce Lee"
    },
    {
        "quote": "The people who are crazy enough to think they can change the world are the ones who do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "Life itself is the most wonderful fairy tale.",
        "author": "Hans Christian Anderson"
    }
];
export {quotes};
