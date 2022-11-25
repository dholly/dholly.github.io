/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
    'Help': {
        title: 'Help',
        subtitle: 'Some useful Links',
        body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
    }
});
monogatari.configuration('credits', {
    "Developers": {
        "Dev # 1": "Taya Raccooon",
        "Dev # 2": "Zhenka",
    },
    "Special thanks to": {
        "Top Level Patrons": [
            "Big Patron # 1", "Big Patron # 2", "Big Patron # 3"
        ],
        "Patrons": [
            "Patron # 1", "Patron # 2", "Patron # 2"
        ],
        "Семейка Зайкиных": [
            "Саша", "Маша",
        ],
    },


});
monogatari.translation('English', {
    'Stats': 'Inventory',
    'menuTitle': 'Menu'
});
monogatari.translation('English', {
    'Credits': 'About'
});

monogatari.translation('Русский', {
    'Stats': 'Инвентарь',
    'menuTitle': 'Меню'
});
// Define the notifications used in the game
monogatari.action('notification').notifications({
    'ER': {
        title: 'У вас набухло в штанах',
        body: 'Вы возбудились',
        icon: ''
    }
});
monogatari.translation('English', {
    'Start': 'New game',
    'Load': 'Loading',
    'Help': 'About',
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {});

// Define the music used in the game.
monogatari.assets('music', {
    'alena': 'alena.mp3',
});

// Define the voice files used in the game.
monogatari.assets('voices', {});

// Define the sounds used in the game.
monogatari.assets('sounds', {});

// Define the videos used in the game.
monogatari.assets('videos', {
    'video': 'raccoon.mp4'
});

// Define the images used in the game.
monogatari.assets('images', {});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
    'bg': 'bg.png',
    'logo': 'p2.gif',
    'blank': 'blank.png',
    'blankdark': 'bg-blank.png',
    'camp': 'camp.png',

});

monogatari.storage({
    stats: {
        Corrupted: 0,
        Arousal: 0,
        Portrait: ''
    },
    quests: {
        CurrentQuest: '',
    }
});


// Define the Characters
monogatari.characters({
    'k': {
        name: 'Katarina',
        color: '#5bcaff',
        sprites: {
            smile: 'k-smile.png',
            dull: 'k-dull.png',
            dullhand: 'k-dull-h.png',
            angry: 'k-angry.png',
            angryhand: 'k-angry-h.png',
            angrysword: 'k-angry-sword.png',
            brokencloth: 'k-cloth.png',
            jumping: 'k-jump.png',

        },
        expressions: {
            normal: 'face.png'
        }
    },
    'action': {
        name: 'action',
        color: '#5bcaff',
        sprites: {
            single: 'attack-single.png',
        }

    },
    'g': {
        name: 'Garen',
        sprites: {
            smile: 'g-smile.png',
            dull: 'g-dull.png',
        }
    },
    's': {
        name: 'Soldier',
        sprites: {
            weapon: 's-weapon.png',
            unarmed: 's-unarmed.png',
            group: 's-group.png',
            leftover: 's-leftover.png',
        }
    },
    'grunt': {
        name: 'Grunt',
        sprites: {
            grunt: 'grunt.png',
        }
    },
    'narrator-prologue': {
        name: 'prologue-teller',

    }
});


monogatari.script({
    'English': {
        'SplashVideo': [

            'centered Please confirm you are 18 years old or older',
            {
                'Choice': {
                    '18age': {
                        'Text': 'Yeah! I am!',
                        'Do': 'jump allowed',
                    },
                    'not18age': {
                        'Text': 'To be a honest, im not...',
                        'Do': 'jump notallowed',

                    }
                }
            },

        ],
        'allowed': [
            'show scene blankdark',
            'show video video modal close',
            'centered  ',
            'end',
        ],
        'notallowed': [
            'centered This game contains adult content, thats illegal to show that stuff to people under 18'
        ],

        'Start': [



            'The birds are chirping far too happily and early for Katarina’s tastes. A shame they are too much a bother to slay.',
            'show scene camp with fadeIn',
            'show character k dull at left with fadeInUp',
            function () {
                document.querySelector('corrupted-menu').change(50)
            },
            function () {
                document.querySelector('arousal-menu').change(25)
            },
            function () {
                document.querySelector('quests-menu').change('You should win a battle!!!')
            },
            function () {
                document.querySelector('portrait-menu').change('v2')
            },

            'With a breath she jumps to her feet, still half asleep as she rubs her eyes, the camp soldiers starting to stir with the usual shouts and shuffle to attention with subsequent thrashings by their officers',
            'Then the yells outside change, followed by a different noise… that of metal clinking.  Material hits the ground. ',
            'After a moment, more yells and the telling sound of armor clinking in the air.',
            'show image attack-single.png center with fadeInTopLeft duration 0.1s',
            'show character k angryhand at left with fadeInRight duration 0.3s',
            'Katarina walks outside and nearly cleaved in two by Demacian steel.',
            'hide image attack-single.png center with fadeOut',
            'Nearly.',
            'Years of ingrained training have her side stepping the hefty blade as it digs into the ground, stuck as the soldier tries to retract it',
            'show character s weapon at right fadeIn',
            'The oaf overstepped from his slash, some youngling trying to prove his worth it seems. ',
            'show character k angry at left',
            'k His blood will make a fine start for the day.!',
            'With a kick to his knee he falls and looks up at her, exposing a slit under his helmet.',
            'show character k angrysword at left',
            'Katarina’s blade finds his windpipe, and blood flows out with a spurt when she pulls it back. ',
            'With a flick of her wrist the blade finds another soldier in the chest, felling him. ',
            'hide character s weapon with fadeOut',
            'show character s group at right with fadeInRight',
            'Three more spot her and charge.',
            's Avenge Cordin!',
            'k Really? Revenge? After launching a sneak attack?',
            'She laughs while flinging three blades, purposefully missing two of the armored grunts.',
            'show character k jumping at left with fadeinLeft',
            'The one blade hits the third in the bridge of his nose, causing him to fall to the ground and tripping the central soldier.',
            'hide character s group with fadeOut',
            'show character s leftover at right',
            'k Now how should I play with this charging fool~?',
            {
                'Choice': {
                    'stab': {
                        'Text': 'Side step and stab~',
                        'Do': 'jump prStab',
                    },
                    'vanish': {
                        'Text': 'Vanish and practice my aim~',
                        'Do': 'jump prVanish'
                    }
                }
            },
        ],
        'prStab': [

            'Katarina walks towards the grunt side stepping his thrust before squarely kicking him in the knee, making sure to hit a nerve',
            'hide character s with fadeOutRight duration 0.2s',
            'show character k angrysword at left',
            'show character s unarmed at right with fadeInRight',
            'He falls with a yell as Katarina walks to the disoriented soldier that fell earlier.',
            'hide character s with fadeOutRight duration 0.2s',
            'Her blade finds his throat as he starts to stand.',
            'jump prologue'
        ],
        'prVanish': [
            'hide character s with fadeOutRight duration 0.1s',
            'show character grunt grunt at right with fadeInRight duration 0.3s',
            'The third closes the distance and hits air.',
            'hide character grunt with fadeOutRight',
            'show character k angrysword at left',
            'She leapt to her other blades, catching them and waits.',
            'show character s unarmed with fadeIn at right',
            'When the one stands up...',
            'hide character s with fadeOutRight',
            '...a blade hits his eye, going deep enough to fell him.',
            'jump prologue'
        ],
        'prologue': [
            'show character grunt grunt at right with fadeInRight duration 0.3s',
            'The third one charges yet again. ',
            'Katarina amuses him for now. Dodging a blow, side stepping an over head slash. ',
            'At least five opportunities to kill him, but she laughs instead, further enraging the green horn.',
            'g Laughing wench! You will pay for this! I, the great-',
            'k Ugh. Great he’s giving a speech.',
            'g Will avenge my comrades and-',
            'g And the dance was going so well too.',
            'The red head flings a larger blade with extra force, looking at the grunt to see if he even catches on.',
            'g And today will be the day you-!',
            'g AHH!',
            'hide character grunt with fadeOutBottomRight',
            'The oak beam falls on top of him with extra momentum, no doubt squishing him like a berry in a bag when a rock falls on it',
            'With her bloodlust cooling somewhat Katarina looks around',
            'Dozens of Demacian soldiers besting and butchering this rabble squad.',
            'There is a slight shift in momentum as some soldiers get themselves organized, parrying and pushing back in one area. ',
            'Then the Demacians back off somewhat. The Noxian men wave their swords and axes at them',
            'show character k smile at left',
            'noxianSoldiers Scared to fight now!?',
            'noxianSoldiers You don’t have a bow. Get back here and-',
            'Then came a thunderous shaking of the ground.',
            'k Calvary? No, this attack is too competently well done…',
            'No officer would bring horses onto this mountain range…',
            'show character k angrysword at left',
            'Then another pair of armored steps approaches the Noxian. The warrior’s gait familiar despite the bedlam of the ambush.',
            'unk I’m almost honored at the words Katarina.',
            'show image attack-single.png center with fadeInTopLeft duration 0.1s',
            'show character k jumping at left with fadeInRight duration 0.3s',
            'She jumped at hearing that voice, landing on top of a tent’s corner post and avoiding the slow swing.',
            'show character g at right with fadeIn',
            'From her vantage point she sees a familiar, unexpected, and mostly unwelcome threat.',
            'show character k smile at left',
            'k I thought you were on patrol near the Frejord border?',
            'g smile I was. Then I was told to march here. So here I am.',
            'k Never figured you for an ambusher.',
            'g I use tactics that work. But I do apologize. If I had known you were here I would have sent a letter.',
            'He approaches the tent pole, his sword raised but relaxed in his grip',
            'k You’d ruin your tactics by sending a love letter for me?',
            'g Letter of challenge. Though I suppose it changes little in this case.',
            'Then came a wall of metal, hulking giants with shields as big, no bigger then them, come rushing through the encampment, breaking through tent and man like a stampede of beasts.',
            'k Demacia can’t raise horses? Or are its soldiers so broken in that they are more similar to beasts of burden then men?',
            'show image attack-single.png center with fadeInTopLeft duration 0.1s',
            'show character k jumping at left with fadeInRight duration 0.3s',
            'His blade cleaves through the pole she is on',
            {
                'Choice': {
                    'endgame': {
                        'Text': 'End for now',
                        'Do': 'jump endgame',
                    }
                }
            }
        ],
        'endgame': [
            'show scene blankdark',
            'end'
        ],


    },


    'Русский': {
        'SplashVideo': [

            'centered Пожалуйста, подтвердите, что вам исполнилось 18 лет',
            {
                'Choice': {
                    '18age': {
                        'Text': 'Да, я старше 18 лет!',
                        'Do': 'jump allowed',
                    },
                    'not18age': {
                        'Text': 'Нет, мне еще нет 18...',
                        'Do': 'jump notallowed',

                    }
                }
            },

        ],
        'allowed': [
            'show scene blankdark',
            'show video video modal close',
            'centered  ',
            'end',
        ],
        'notallowed': [
            'centered Эта игра соддержит сцены сексуального характера, вам на такое смотреть еще не положено, пожалуйста закройте игру.'
        ],
        'Start': [

            'Привет ето начало',
            'jump other'
        ],
        'other': [
            'show scene bg with fadeIn',
            'Вау, а где это мы?',
            'Посмотрите ка на эту даму!',
            'centered Вы смотрите и видите красивую девицу вдали',
            'show character k normal at top with bounceInLeft',
            '...',
            'ля какая!',
            'hide character k normal with bounceOutRight',
            'show notification ER',
            'k:normal привет!',
            'k:normal меня зовут большие сисяндры',
            {
                'Choice': {
                    'pisun': {
                        'Text': 'достать дрочило',
                        'Do': 'jump dostal'
                    },
                    'nepisun': {
                        'Text': 'не доставать дрочило',
                        'Do': 'jump nedostal',

                    }
                }
            },

            'end'
        ],
        'dostal': [
            '...',
            'вы достали дрочило',
            'но зачем?',
            'Конец игры',
            'jump other'
        ],
        'nedostal': [
            '...',
            'ваше дрочило осталось в штанах',
            'но почему?',
            'Конец игры',
            'jump other'
        ]

    }
});