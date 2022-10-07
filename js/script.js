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
monogatari.configuration ('credits', {
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
            "Саша", "Маша" ,
        ],
    },


});
monogatari.translation ('English', {
    'Stats': 'Inventory'
});
monogatari.translation ('English', {
    'Credits': 'About'
});

monogatari.translation ('Русский', {
    'Stats': 'Инвентарь'
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
monogatari.assets('music', {});

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

});

monogatari.storage ({
    player: {
        name: 'test',
        age: 0
    },

    stats: {
        hp: 100,
        mp: 100,
        inventory: {
            eggs: 10,

        }
    }
});


// Define the Characters
monogatari.characters({
    'k': {
        name: 'Katarina',
        color: '#5bcaff',
        sprites: {
            normal: 'k.png'

        },
        expressions: {
            normal: 'face.png'
        }
    },
    'narrator-prologue' : {
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
                        'Text': 'If be a honest, im not...',
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


            'k Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, molestias, perferendis! Eligendi expedita reprehenderit similique? Autem blanditiis cumque dolor dolore dolores enim esse eum excepturi facilis fugiat iure, maxime natus nemo non nulla obcaecati, quisquam quo ut. Autem deleniti dolorum expedita impedit nulla porro provident quibusdam, recusandae unde voluptates! Ab adipisci aliquam at consectetur dolor doloremque dolores eos, eum expedita facere harum id iure magnam maxime nihil nostrum perspiciatis placeat quo reiciendis repellat similique soluta suscipit tempora! Commodi eligendi odio quo! Adipisci asperiores cum, debitis dolores ex harum, inventore natus officiis possimus quaerat quod repellendus repudiandae saepe sapiente veritatis vero?',
            'k:normal Noxus!',
            'k Katarina!',
            'jump other'
        ],
        'other': [
            'show scene bg with fadeIn',
            'Wow, where we are?',
            'end'
        ]
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
            'show notification Er',
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