let cards = [
    {
        protocol: "Apathy",
        power: 0,
        top: "Your total value in this line is increased by 1 for each face-down card in this line.",
        middle: "",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Apathy",
        power: 1,
        top: "",
        middle: "Flip all other face-up cards in this line.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Apathy",
        power: 2,
        top: "Ignore all middle commands of cards in this line.",
        middle: "",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, flip this card.</div>",
        keywords: {
        }
    },
    {
        protocol: "Apathy",
        power: 3,
        top: "",
        middle: "Flip 1 of your opponent's face-up cards.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Apathy",
        power: 4,
        top: "",
        middle: "You may flip 1 of your covered cards.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Apathy",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Darkness",
        power: 0,
        top: "",
        middle: "Draw 3 cards. Shift 1 of your opponent's covered cards.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Darkness",
        power: 1,
        top: "",
        middle: "Flip 1 of your opponent's cards. You may shift that card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Darkness",
        power: 2,
        top: "All face-down cards in this stack have a value of 4.",
        middle: "You may flip 1 covered card in this line.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Darkness",
        power: 3,
        top: "",
        middle: "Play 1 card face-down in another line.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Darkness",
        power: 4,
        top: "",
        middle: "Shift 1 face-down card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Darkness",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Death",
        power: 0,
        top: "",
        middle: "Delete 1 card from each other line.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Death",
        power: 1,
        top: "<div><span class='emphasis'>Start:</span> You may draw 1 card. If you do, delete 1 other card, then delete this card.</div>",
        middle: "",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Death",
        power: 2,
        top: "",
        middle: "Delete all cards in 1 line with values of 1 or 2.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Death",
        power: 3,
        top: "",
        middle: "Delete 1 face-down card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Death",
        power: 4,
        top: "",
        middle: "Delete a card with a value of 0 or 1.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Death",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Fire",
        power: 0,
        top: "",
        middle: "Flip 1 other card. Draw 2 cards.",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, draw 1 card and flip 1 other card.</div>",
        keywords: {
        }
    },
    {
        protocol: "Fire",
        power: 1,
        top: "",
        middle: "Discard 1 card. If you do, delete 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Fire",
        power: 2,
        top: "",
        middle: "Discard 1 card. If you do, return 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Fire",
        power: 3,
        top: "",
        middle: "",
        bottom: "<div><span class='empahsis'>End:</span> You may discard 1 card. If you do, flip 1 card.</div>",
        keywords: {
        }
    },
    {
        protocol: "Fire",
        power: 4,
        top: "",
        middle: "Discard 1 or more cards. Draw the amount discarded plus 1.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Fire",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Gravity",
        power: 0,
        top: "",
        middle: "For every 2 cards in this line, play the top card of your deck face-down under this card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Gravity",
        power: 1,
        top: "",
        middle: "Draw 2 cards. Shift 1 card either to or from this line.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Gravity",
        power: 2,
        top: "",
        middle: "Flip 1 card. Shift that card to this line.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Gravity",
        power: 4,
        top: "",
        middle: "Shift 1 face-down card to this line.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Gravity",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Gravity",
        power: 6,
        top: "",
        middle: "Your opponent plays the top card of their deck face-down in this line.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Hate",
        power: 0,
        top: "",
        middle: "Delete 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Hate",
        power: 1,
        top: "",
        middle: "Discard 3 cards. Delete 1 card. Delete 1 card",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Hate",
        power: 2,
        top: "",
        middle: "Delete your highest value card. Delete your opponent's highest value card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Hate",
        power: 3,
        top: "<div><span class='emphasis'>After you delete cards:</span> Draw 1 card.</div>",
        middle: "",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Hate",
        power: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, delete the lowest value covered card in this line.</div>",
        keywords: {
        }
    },
    {
        protocol: "Hate",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Life",
        power: 0,
        top: "",
        middle: "Play the top card of your deck face-down in each line where you have a card.",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, delete this card.</div>",
        keywords: {
        }
    },
    {
        protocol: "Life",
        power: 1,
        top: "",
        middle: "Flip 1 card. Flip 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Life",
        power: 2,
        top: "",
        middle: "Draw 1 card. You may flip 1 face-down card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Life",
        power: 3,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, play the top card of your deck face-down in another line.</div>",
        keywords: {
        }
    },
    {
        protocol: "Life",
        power: 4,
        top: "",
        middle: "If this card is covering a card, draw 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Life",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Light",
        power: 0,
        top: "",
        middle: "Flip 1 card. Draw cards equal to that card's value.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Light",
        power: 1,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> Draw 1 card.</div>",
        keywords: {
        }
    },
    {
        protocol: "Light",
        power: 2,
        top: "",
        middle: "Draw 2 cards. Reveal 1 face-down card. You may shift or flip that card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Light",
        power: 3,
        top: "",
        middle: "Shift all face-down cards in this line to another line.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Light",
        power: 4,
        top: "",
        middle: "Your opponent reveals their hand.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Light",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Love",
        power: 1,
        top: "",
        middle: "Draw the top card of your opponent's deck.",
        bottom: "<div><span class='emphasis'>End:</span> You may give 1 card from your hand to your opponent. If you do, draw 2 cards.</div>",
        keywords: {
        }
    },
    {
        protocol: "Love",
        power: 2,
        top: "",
        middle: "Your opponent draws 1 card. Refresh.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Love",
        power: 3,
        top: "",
        middle: "Take 1 random card from your opponent's hand. Give 1 card from your hand to your opponent",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Love",
        power: 4,
        top: "",
        middle: "Reveal 1 card from your hand. Flip 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Love",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Love",
        power: 6,
        top: "",
        middle: "Your opponent draws 2 cards.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Metal",
        power: 0,
        top: "Your opponent's total value in this line is reduced by 2.",
        middle: "Flip 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Metal",
        power: 1,
        top: "",
        middle: "Draw 2 cards. Your opponent cannot compile next turn.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Metal",
        power: 2,
        top: "Your opponent cannot play cards face-down in this line.",
        middle: "",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Metal",
        power: 3,
        top: "",
        middle: "Draw 1 card. Delete all cards in 1 other line with 8 or more cards.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Metal",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Metal",
        power: 6,
        top: "<div><span class='emphasis'>When this card would be covered or flipped:</span> First, delete this card.</div>",
        middle: "",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Plague",
        power: 0,
        top: "",
        middle: "Your opponent discards 1 card.",
        bottom: "Your opponent cannot play cards in this line.",
        keywords: {
        }
    },
    {
        protocol: "Plague",
        power: 1,
        top: "<div><span class='emphasis'>After your opponent discards cards:</span> Draw 1 card.</div>",
        middle: "Your opponent discards 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Plague",
        power: 2,
        top: "",
        middle: "Dicard 1 or more cards. Your opponent discards the amount of cards discarded plus 1.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Plague",
        power: 3,
        top: "",
        middle: "Flip each other face-up card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Plague",
        power: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> Your opponent deletes 1 of their face-down cards. You may flip this card.</div>",
        keywords: {
        }
    },
    {
        protocol: "Plague",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Psychic",
        power: 0,
        top: "",
        middle: "Draw 2 cards. Your opponent discards 2 cards, then reveals their hand.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Psychic",
        power: 1,
        top: "Your opponent can only play cards face-down.",
        middle: "",
        bottom: "<div><span class='emphasis'>Start:</span> Flip this card.</div>",
        keywords: {
        }
    },
    {
        protocol: "Psychic",
        power: 2,
        top: "",
        middle: "Your opponent discards 2 cards. Rearrange their protocols.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Psychic",
        power: 3,
        top: "",
        middle: "Your opponent discards 1 card. Shift 1 of their cards.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Psychic",
        power: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> You may return 1 of your opponent's cards. If you do, flip this card.</div>",
        keywords: {
        }
    },
    {
        protocol: "Psychic",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Speed",
        power: 0,
        top: "",
        middle: "Play 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Speed",
        power: 1,
        top: "<div><span class='emphasis'>After you clear cache:</span> Draw 1 card.</div>",
        middle: "Draw 2 cards.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Speed",
        power: 2,
        top: "<div><span class='emphasis'>When this card would be deleted by compiling:</span> Shift this card, even if this card is covered.</div>",
        middle: "",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Speed",
        power: 3,
        top: "",
        middle: "Shift 1 of your other cards.",
        bottom: "<div><span class='emphasis'>End:</span> You may shift 1 of your cards. If you do, flip this card.</div>",
        keywords: {
        }
    },
    {
        protocol: "Speed",
        power: 4,
        top: "",
        middle: "Shift 1 of your opponent's face-down cards.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Speed",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Spirit",
        power: 0,
        top: "",
        middle: "Refresh. Draw 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Spirit",
        power: 1,
        top: "You can play cards in any line.",
        middle: "Draw 2 cards.",
        bottom: "<div><span class='emphasis'>Start:</span> Either discard 1 card or flip this card.</div>",
        keywords: {
        }
    },
    {
        protocol: "Spirit",
        power: 2,
        top: "",
        middle: "You may flip 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Spirit",
        power: 3,
        top: "<div><span class='emphasis'>After you draw cards:</span> You may shift this card, even if this card is covered.</div>",
        middle: "",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Spirit",
        power: 4,
        top: "",
        middle: "Swap the positions of 2 of your protocols",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Spirit",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Water",
        power: 0,
        top: "",
        middle: "Flip 1 other card. Flip this card.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Water",
        power: 1,
        top: "",
        middle: "Play the top card of your deck face-down in each other line.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Water",
        power: 2,
        top: "",
        middle: "Draw 2 cards. Rearrange your protocols.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Water",
        power: 3,
        top: "",
        middle: "Return all cards with a value of 2 in 1 line.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Water",
        power: 4,
        top: "",
        middle: "Return 1 of your cards.",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Water",
        power: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
        }
    },
]

initialize();

function initialize() {
    let array = cards;
    displayCards(array);
}

$(".js_protocol").click(function() {
    checkFilters();
})
$(".js_power").click(function() {
    checkFilters();
})
$(".js_select-all-protocol").click(function() {
    $(".js_protocol").prop("checked", true);
    checkFilters();
})
$(".js_remove-all-protocol").click(function() {
    $(".js_protocol").prop("checked", false);
    checkFilters();
})
$(".js_select-all-power").click(function() {
    $(".js_power").prop("checked", true);
    checkFilters();
})
$(".js_remove-all-power").click(function() {
    $(".js_power").prop("checked", false);
    checkFilters();
})

function checkFilters() {
    let array = cards;

    let [apathy, darkness, death, fire, gravity, hate, life, light, love, metal, plague, psychic, speed, spirit, water] = checkProtocols();

    let [zero, one, two, three, four, five, six] = checkPower();

    array = getProtocols(array, apathy, darkness, death, fire, gravity, hate, life, light, love, metal, plague, psychic, speed, spirit, water);

    array = getPower(array, zero, one, two, three, four, five, six)

    displayCards(array);
}

function checkProtocols() {
    let apathy = $('.js_apathy').is(':checked');
    let darkness = $('.js_darkness').is(':checked');
    let death = $('.js_death').is(':checked');
    let fire = $('.js_fire').is(':checked');
    let gravity = $('.js_gravity').is(':checked');
    let hate = $('.js_hate').is(':checked');
    let life = $('.js_life').is(':checked');
    let light = $('.js_light').is(':checked');
    let love = $('.js_love').is(':checked');
    let metal = $('.js_metal').is(':checked');
    let plague = $('.js_plague').is(':checked');
    let psychic = $('.js_psychic').is(':checked');
    let speed = $('.js_speed').is(':checked');
    let spirit = $('.js_spirit').is(':checked');
    let water = $('.js_water').is(':checked');

    return [apathy, darkness, death, fire, gravity, life, light, love, metal, plague, psychic, speed, spirit, water];
};

function checkPower() {
    let zero = $('.js_zero').is(':checked');
    let one = $('.js_one').is(':checked');
    let two = $('.js_two').is(':checked');
    let three = $('.js_three').is(':checked');
    let four = $('.js_four').is(':checked');
    let five = $('.js_five').is(':checked');
    let six = $('.js_six').is(':checked');

    return [zero, one, two, three, four, five, six];
};

function getProtocols(array, apathy, darkness, death, fire, gravity, hate, life, light, love, metal, plague, psychic, speed, spirit, water) {
    if (!apathy) {
        array = array.filter(cards => cards.protocol != "Apathy");
    }
    if (!darkness) {
        array = array.filter(cards => cards.protocol != "Darkness");
    }
    if (!death) {
        array = array.filter(cards => cards.protocol != "Death");
    }
    if (!fire) {
        array = array.filter(cards => cards.protocol != "Fire");
    }
    if (!gravity) {
        array = array.filter(cards => cards.protocol != "Gravity");
    }
    if (!hate) {
        array = array.filter(cards => cards.protocol != "Hate");
    }
    if (!life) {
        array = array.filter(cards => cards.protocol != "Life");
    }
    if (!light) {
        array = array.filter(cards => cards.protocol != "Light");
    }
    if (!love) {
        array = array.filter(cards => cards.protocol != "Love");
    }
    if (!metal) {
        array = array.filter(cards => cards.protocol != "Metal");
    }
    if (!plague) {
        array = array.filter(cards => cards.protocol != "Plague");
    }
    if (!psychic) {
        array = array.filter(cards => cards.protocol != "Psychic");
    }
    if (!speed) {
        array = array.filter(cards => cards.protocol != "Speed");
    }
    if (!spirit) {
        array = array.filter(cards => cards.protocol != "Spirit");
    }
    if (!water) {
        array = array.filter(cards => cards.protocol != "Water");
    }

    return array;
}

function getPower(array, zero, one, two, three, four, five, six) {
    if (!zero) {
        array = array.filter(cards => cards.power != 0);
    }
    if (!one) {
        array = array.filter(cards => cards.power != 1);
    }
    if (!two) {
        array = array.filter(cards => cards.power != 2);
    }
    if (!three) {
        array = array.filter(cards => cards.power != 3);
    }
    if (!four) {
        array = array.filter(cards => cards.power != 4);
    }
    if (!five) {
        array = array.filter(cards => cards.power != 5);
    }
    if (!six) {
        array = array.filter(cards => cards.power != 6);
    }

    return array;
}

function displayCards(array) {
    $(".card-container").empty();

    $(array).each(function( index ) {
        let topBackground = this.top != "" ? "card-box--opaque" : "";
        let middleBackground = this.middle != "" ? "card-box--opaque" : "";
        let bottomBackground = this.bottom != "" ? "card-box--opaque" : "";

        $(".card-container").append(`
            <div class="card card--${this.protocol.toLowerCase()}">
                <div class="card__top">
                    <h2 class="card__protocol">${this.protocol}</h2>
                    <h2 class="card__power">${this.power}</h2>
                </div>
                <div class="card__body">
                    <div class="card__box ${topBackground}"><div>${this.top}</div></div>
                    <div class="card__box ${middleBackground}">${this.middle}</div>
                    <div class="card__box ${bottomBackground}">${this.bottom}</div>
                </div>
            </div>
        `)
      });
}