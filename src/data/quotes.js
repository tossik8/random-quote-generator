const quotes = [
    {
        "quote": "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
        "author": "Sheryl Sandberg"
    },
    {
        "quote":"Success usually comes to those who are too busy looking for it.",
        "author":"Henry David Thoreau"
    },
    {
        "quote":"Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.",
        "author": "Augustine Og Mandino"
    },
    {
        "quote": "Alone we can do so little, together we can do so much.",
        "author":"Helen Keller"
    },
    {
        "quote": "I’m a great believer in luck, and I find the harder I work the more I have of it.",
        "author": "Thomas Jefferson"
    },
    {
        "quote": "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
        "author": "William James"
    },
    {
        "quote": "Some people never go crazy. What truly horrible lives they must lead.",
        "author": "Charles Bukowski"
    },
    {
        "quote":"It always seems impossible until it’s done.",
        "author": "Nelson Mandela"
    },
    {
        "quote": "What we fear doing most is usually what we most need to do.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "The important thing is that your teammates have to know you're pulling for them and you really want them to be successful.",
        "author": "Kobe Bryant"
    },
    {
        "quote": "Have a good time. Life is too short to get bogged down and be discouraged. You have to keep moving. You have to keep going. Put one foot in front of the other, smile and just keep on rolling.",
        "author": "Kobe Bryant"
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
        "quote":"In three words I can sum up everything I've learned about life: it goes on.",
        "author":"Robert Frost"
    },
    {
        "quote": "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
        "author":"Robert Frost"
    },
    {
        "quote":"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        "author":"J.K. Rowling"
    },
    {
        "quote":"Don’t walk in front of me… I may not follow, Don’t walk behind me… I may not lead, Walk beside me… just be my friend.",
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
        "quote": "The most important thing is to enjoy your life - to be happy - it's all that matters.",
        "author": "Steve Jobs"
    },
    {
        "quote": "The best way to find out what you want in life is to try a lot of things.",
        "author": "Oprah Winfrey"
    },
    {
        "quote": "Life itself is the most wonderful fairy tale.",
        "author": "Hans Christian Anderson"
    },
    {
        "quote": "The bad news is time flies. The good news is you're the pilot.",
        "author": "Michael Altshuler"
    },
    {
        "quote":"I can accept failure, everyone fails at something. But I can't accept not trying.",
        "author": "Michael Jordan"
    },
    {
        "quote": "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
        "author": "Amal Clooney"
    },
    {
        "quote": "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
        "author": "Lady Gaga"
    },
    {
        "quote": "Weaknesses are just strengths in the wrong environment.",
        "author": "Marianne Cantwell"
    },
    {
        "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "author": "Albert Einstein"
    },
    {
        "quote": "We generate fears while we sit. We overcome them by action.",
        "author":"Dr. Henry Link"
    },
    {
        "quote":"I've noticed when I fear something, if I just end up doing it, I'm grateful in the end.",
        "author":"Colleen Hoover"
    },
    {
        "quote":"Out of the mountain of despair, a stone of hope.",
        "author": "Martin Luther King, Jr."
    },
    {
        "quote":"A lot of people are afraid to say what they want. That's why they don't get what they want.",
        "author":"Madonna"
    },
    {
        "quote": "All children are artists. The problem is how to remain an artist once we grow up.",
        "author":"Pablo Picasso"
    },
    {
        "quote":"There are painters who transform the sun to a yellow spot, but there are others who with the help of their art and their intelligence, transform a yellow spot into sun.",
        "author":"Pablo Picasso"
    },
    {
        "quote":"Computers are useless. They can only give you answers.",
        "author": "Pablo Picasso"
    },
    {
        "quote": "To draw, you must close your eyes and sing.",
        "author": "Pablo Picasso"
    },
    {
        "quote": "I'd rather be optimistic and wrong than pessimistic and right.",
        "author":"Elon Musk"
    },
    {
        "quote": "Patriotism is your conviction that this country is superior to all other countries because you were born in it.",
        "author": "George Bernard Shaw"
    },
    {
        "quote": "I'm not interested in money. I just want to be wonderful.",
        "author": "Marilyn Monroe"
    },
    {
        "quote": "The only thing that feels better than winning is winning when nobody thought you could.",
        "author": "Hank Aaron"
    },
    {
        "quote": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
        "author":"John Quincy Adams"
    },
    {
        "quote":"Behind every great man is a woman rolling her eyes.",
        "author": "Jim Carrey"
    },
    {
        "quote" : "When in doubt, look intelligent.",
        "author" : "Garrison Keillor"
    },
    {
        "quote" : "If your ship doesn’t come in, swim out to it!",
        "author":"Jonathan Winters"
    },
    {
        "quote": "Eighty percent of success is showing up",
        "author":"Woody Allen"
    },
    {
        "quote": "I think, therefore I am.",
        "author":"René Descartes"
    },
    {
        "quote": "If you are going through hell, keep going.",
        "author": "Winston Churuchill"
    },
    {
        "quote":"That’s one small step for a man, a giant leap for mankind.",
        "author":"Neil Armstrong"
    },
    {
        "quote": "To err is human; to forgive, divine.",
        "author":"Alexander Pope"
    },
    {
        "quote": "So avoid using the word ‘very’ because it’s lazy. A man is not very tired, he is exhausted. Don’t use very sad, use morose. Language was invented for one reason, boys - to woo women - and, in that endeavor, laziness will not do. It also won’t do in your essays.",
        "author": "John Keating, Dead Poets Society"
    },
    {
        "quote": "You must strive to find your own voice, boys, and the longer you wait to begin, the less likely you are to find it at all.",
        "author": "John Keating, Dead Poets Society"
    },
    {
        "quote": "There's a time for daring and there's a time for caution, and a wise man understands which is called for.",
        "author": "John Keating, Dead Poets Society"
    },
    {
        "quote": "No matter what anybody tells you, words and ideas can change the world.",
        "author": "John Keating, Dead Poets Society"
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "quote": "I know not all that may be coming, but be it what it will, I'll go to it laughing.",
        "author": "Herman Melville"
    },
    {
        "quote": "It is not down on any map; true places never are.",
        "author": "Ishmael, Moby Dick"
    },
    {
        "quote": "As for me, I am tormented with an everlasting itch for things remote. I love to sail forbidden seas, and land on barbarous coasts.",
        "author": "Ishmael, Moby Dick"
    },
    {
        "quote": "An utterly fearless man is a far more dangerous comrade than a coward.",
        "author": "Herman Melville"
    }
];
export {quotes};
