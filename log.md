#19/5/2015
Today I started work on the game.

#20/5/2015
Still haven't done anything particularly interesting. just getting the basic
stuff to work. Having some trouble where pure virtual functions don't work due
to cheerp's inherent **shitness**, but anyway.

#26/5/2015
I have been mucking around with makefiles a lot. Hopefully I will one day
have them done so that I can actually work on the game.
Or I could just switch to an ide...
holy shit I don't even need a makefile, a single line can build the whole
thing like it did on windows. That was certainly a **waste of** time.
plus if you use the wildcard character it's even easier.

#27/5/2015
Today I decided to shelve game idea for the moment, mostly because it would be
a pretty major undertaking. However, the game is still going to have basically
the same gameplay and stuff, so it will provide a basis for if I still want to
make the game later. Remember **Professor Cane**? that's what this is going to be.
Also I finally got rid of that pure virtual problem properly.
Ok I did some pretty **damn** groovy stuff with the menu screen and it has a
picture of a cane and stuff. now I'm getting some error when I try to change to
the actual gameplay screen, though.

#28/5/2015
Ok, I have gotten source mapping to kinda work using break points. Then I just
fixed some stuff and got stuff working. I have decided that this game is going
to have cutscenes kinda like I made for that **mobile game** ages ago, cos that
will make for some pretty mad grooviness I think.
I also organised some stuff into different classes which was pretty **"darned"**
exiting.

#30/5/2015
get ready for an abstract factory mate. So I guess since i'll **probably** be
needing more of them in the future, I'll probably have to make it a class, and
then perhaps the GraphicFactory file can store an instance of an abstractFactory
that makes **sweet, sweet** Graphics.
Yeah it's going ok, but back in the day I used to use a stream rather than a
string. that would still be ok, but this thing's string class is pretty shit.
I should just be able to make some of my own methods to do all the usual stuff
though.

#31/5/2015
Ok I wrote a nice little set of string management functions which let you treat
Strings kinda as you would an input stream, just **much** simpler. also it can't
anything **except strings** at the moment, although it shouldn't be that hard to
write functions to convert a string to other types and do **stuff**.
There are **people** and they are **distracting** me from my studies. Oh no.
Anyway this should all work ok, but I should really be able to design this so
that there aren't any dynamic objects.

#1/6/2015
Added a namespace to hold all of the factories that have to be global.

#2/6/2015
Fixed some normal error, but then got a million weird errors. I think it's
because I was trying to use the unordered_map thing when I have it set to use
no standard library, so anyway now I am making my own **statically allocated map
that only uses strings** class.

#6/6/2015
Got rid of most of the weird errors but it still isn't working and I have no
idea whatsoever why. I'm kinda tempted to switch back to straight javascript,
but using a shell script or something to join a bunch of files together.
Anyway, I have the **worst** hangover **ever**, so i'll do that another day.

#9/6/2015
Ok I survived the hangover plus everything is at least **moderately G**, so
that's nice. I made that compiler thingo and it is just as dodgy as you can
imagine, plus it's written in **python!**
Ok so now i'm going to implement all those slide factories and things again,
since it was so fun last time. but this time i'm going to make them just all
make use of factory base objects and then give them new functions and have them
floating about as variables.<br />
The whitehouse blueprints are in my briefcase.

#11/6/2015
KKK, so I have come up with a plan for nicely set up factories and stuff which I
shall enact another day.
Factories will always work synchronously and will have the actual data sent into
them. So if you want things to be built from files, you'll have to load the file
somehow, and then put it into the factory.
in hindsight, this is actually **pretty** obvious.
Yeah but anyway, i've been getting more stuff done as well.

#12/6/2015
Dear diary, I recorded a mad tune for the first level today, it's pretty mad.
I'm going to get drunk later, and I dunno if it's just my attitude, but
everything is looking **quite G** indeed. I'm kinda bored right now, though,
which would explain why I'm telling my life story to my fucking game development
log.

#19/6/2015
gday gang! today I am doing stuff with how the game stores assets, since it
can't load them synchronously. Basically i'm just going back to the old ways
where it loads a bunch of stuff from a list at the start and then just stores it
all in a dictionary.
Since this is now the story of my life, I properly did squats with actual weight
today so I **am** very excited.
Oh yeah also I need to make some kind of stringManager class that will let us
keep track of how far through a string you have read without destroying it and
also pass it through functions since apparantly they are passed by value.

#20/6/2015
Ok I did that string stuff and it is very, **very** nice. Now I think I am going
to add a new thing to the javascript compiler to let me import text files as
constants so that I can put the asset lists straight into the code without
writing it in since that would be kinda bad and loading it asynchronously is
a pain in the dick.
Ok it looks like i'm going to have to make it that this compiler thing reads
files character by character and insers my special thingies as it hits them.
nah fuck that i'll just make it that it conjoins all the lines in the inserted
file and joins them with the rest of the line, for insert, and does include the
same way my daddy did it, and so did his daddy and his daddy. It's always been
this way, ya know and no **god damn government** run by a **black** man is going
to change it, **ya hear?**

#22/6/2015
I added that new thing to the javascript compiler and it works alright, now i'm
just getting the importation of the all the different kinds of assets to work.
>8) 8) 8)

#29/6/2015
I have a slide kinda appearing on the screen and playing a fiendish sound. next
task is to get it that I can play a series of slides, and then it's time to
start making them fancier with different types of graphic.

#30/6/2015
hehe I have made one groovy cutscene indeed, probs time to make some of those
things
I need to make it that pictures and animations are interchangable again, that
was nice. <3 did that. and also I did that other thing and made some mad thingos
my brain **is** a bit **fried** now

#1/7/2015
Ok I think i'm ready to at least try and start making the real first cutscene.
If I run into something I still need, I can program it is i'm going along.
yeah actually I should probably make it that animations actually work.

#4/7/2015
made a wiping graphic and made animations work properly.

#6/7/2015
I have decided that I am going to make this game like not just have one play
style but a whole heap and also a branching storyline kinda like revenge of the
sunfish, but with a little bit more cohesion.
Oh yeah and I also want to finish it before the end of the month for 1gam.

#11/7/2015
I then proceeded to get a cold and not feel like working on this for a few days.
Anyway today I did some stuff to do with getting the danmaku level loading and
stuff, I also made a superprototype that should work for all of the gameplay
scenes to give them a canvas. I still want to finish this before the end of the
month, but if I don't finish it until early next month I'll have a nice buffer
zone for the future.
Next time on Detention:
 - Make it that different scenes can have different canvas sizes.
 - Actually make tilemaps display tiles and shit.

#13/7/2015
Ok, I have got the different canvas sizes thing working, but now before I can
make it that tilemaps display properly, I have to make it that the tilesets that
they use can be loaded and work. <3

#15/7/2015
Hehe, I'm **programming** in the **Pine Forest**. Now my code will have mad
forest vibes.
I am cold.
Ok I have sorted all that mess out and am ready to get back to by task of
getting tile maps to display their tiles, which shouldn't be **particularly
hard**.
