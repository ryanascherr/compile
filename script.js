let cards = [
    {
        protocol: "Apathy",
        value: 0,
        top: "Your total value in this line is increased by 1 for each face-down card in this line.",
        middle: "",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Apathy",
        value: 1,
        top: "",
        middle: "Flip all other face-up cards in this line.",
        bottom: "",
        keywords: {
            flip: true,
        },
    },
    {
        protocol: "Apathy",
        value: 2,
        top: "Ignore all middle commands of cards in this line.",
        middle: "",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, flip this card.</div>",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Apathy",
        value: 3,
        top: "",
        middle: "Flip 1 of your opponent's face-up cards.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Apathy",
        value: 4,
        top: "",
        middle: "You may flip 1 of your face-up covered cards.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Apathy",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Darkness",
        value: 0,
        top: "",
        middle: "Draw 3 cards. Shift 1 of your opponent's covered cards.",
        bottom: "",
        keywords: {
            draw: true,
            shift: true,
        }
    },
    {
        protocol: "Darkness",
        value: 1,
        top: "",
        middle: "Flip 1 of your opponent's cards. You may shift that card.",
        bottom: "",
        keywords: {
            flip: true,
            shift: true,
        }
    },
    {
        protocol: "Darkness",
        value: 2,
        top: "All face-down cards in this stack have a value of 4.",
        middle: "You may flip 1 covered card in this line.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Darkness",
        value: 3,
        top: "",
        middle: "Play 1 card face-down in another line.",
        bottom: "",
        keywords: {
            play: true,
        }
    },
    {
        protocol: "Darkness",
        value: 4,
        top: "",
        middle: "Shift 1 face-down card.",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Darkness",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Death",
        value: 0,
        top: "",
        middle: "Delete 1 card from each other line.",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Death",
        value: 1,
        top: "<div><span class='emphasis'>Start:</span> You may draw 1 card. If you do, delete 1 other card, then delete this card.</div>",
        middle: "",
        bottom: "",
        keywords: {
            delete: true,
            draw: true,
        }
    },
    {
        protocol: "Death",
        value: 2,
        top: "",
        middle: "Delete all cards in 1 line with values of 1 or 2.",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Death",
        value: 3,
        top: "",
        middle: "Delete 1 face-down card.",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Death",
        value: 4,
        top: "",
        middle: "Delete a card with a value of 0 or 1.",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Death",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Fire",
        value: 0,
        top: "",
        middle: "Flip 1 other card. Draw 2 cards.",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, draw 1 card and flip 1 other card.</div>",
        keywords: {
            draw: true,
            flip: true,
        }
    },
    {
        protocol: "Fire",
        value: 1,
        top: "",
        middle: "Discard 1 card. If you do, delete 1 card.",
        bottom: "",
        keywords: {
            delete: true,
            discard: true,
        }
    },
    {
        protocol: "Fire",
        value: 2,
        top: "",
        middle: "Discard 1 card. If you do, return 1 card.",
        bottom: "",
        keywords: {
            discard: true,
            return: true,
        }
    },
    {
        protocol: "Fire",
        value: 3,
        top: "",
        middle: "",
        bottom: "<div><span class='empahsis'>End:</span> You may discard 1 card. If you do, flip 1 card.</div>",
        keywords: {
            discard: true,
            flip: true,
        }
    },
    {
        protocol: "Fire",
        value: 4,
        top: "",
        middle: "Discard 1 or more cards. Draw the amount discarded plus 1.",
        bottom: "",
        keywords: {
            discard: true,
            draw: true,
        }
    },
    {
        protocol: "Fire",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Gravity",
        value: 0,
        top: "",
        middle: "For every 2 cards in this line, play the top card of your deck face-down under this card.",
        bottom: "",
        keywords: {
            play: true,
        }
    },
    {
        protocol: "Gravity",
        value: 1,
        top: "",
        middle: "Draw 2 cards. Shift 1 card either to or from this line.",
        bottom: "",
        keywords: {
            draw: true,
            shift: true,
        }
    },
    {
        protocol: "Gravity",
        value: 2,
        top: "",
        middle: "Flip 1 card. Shift that card to this line.",
        bottom: "",
        keywords: {
            flip: true,
            shift: true,
        }
    },
    {
        protocol: "Gravity",
        value: 4,
        top: "",
        middle: "Shift 1 face-down card to this line.",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Gravity",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Gravity",
        value: 6,
        top: "",
        middle: "Your opponent plays the top card of their deck face-down in this line.",
        bottom: "",
        keywords: {
            play: true,
        }
    },
    {
        protocol: "Hate",
        value: 0,
        top: "",
        middle: "Delete 1 card.",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Hate",
        value: 1,
        top: "",
        middle: "Discard 3 cards. Delete 1 card. Delete 1 card.",
        bottom: "",
        keywords: {
            delete: true,
            discard: true,
        }
    },
    {
        protocol: "Hate",
        value: 2,
        top: "",
        middle: "Delete your highest value card. Delete your opponent's highest value card.",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Hate",
        value: 3,
        top: "<div><span class='emphasis'>After you delete cards:</span> Draw 1 card.</div>",
        middle: "",
        bottom: "",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Hate",
        value: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, delete the lowest value covered card in this line.</div>",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Hate",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Life",
        value: 0,
        top: "",
        middle: "Play the top card of your deck face-down in each line where you have a card.",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, delete this card.</div>",
        keywords: {
            delete: true,
            play: true,
        }
    },
    {
        protocol: "Life",
        value: 1,
        top: "",
        middle: "Flip 1 card. Flip 1 card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Life",
        value: 2,
        top: "",
        middle: "Draw 1 card. You may flip 1 face-down card.",
        bottom: "",
        keywords: {
            draw: true,
            flip: true,
        }
    },
    {
        protocol: "Life",
        value: 3,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, play the top card of your deck face-down in another line.</div>",
        keywords: {
            play: true,
        }
    },
    {
        protocol: "Life",
        value: 4,
        top: "",
        middle: "If this card is covering a card, draw 1 card.",
        bottom: "",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Life",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Light",
        value: 0,
        top: "",
        middle: "Flip 1 card. Draw cards equal to that card's value.",
        bottom: "",
        keywords: {
            draw: true,
            flip: true,
        }
    },
    {
        protocol: "Light",
        value: 1,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> Draw 1 card.</div>",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Light",
        value: 2,
        top: "",
        middle: "Draw 2 cards. Reveal 1 face-down card. You may shift or flip that card.",
        bottom: "",
        keywords: {
            draw: true,
            flip: true,
            reveal: true,
            shift: true,
        }
    },
    {
        protocol: "Light",
        value: 3,
        top: "",
        middle: "Shift all face-down cards in this line to another line.",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Light",
        value: 4,
        top: "",
        middle: "Your opponent reveals their hand.",
        bottom: "",
        keywords: {
            reveal: true,
        }
    },
    {
        protocol: "Light",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Love",
        value: 1,
        top: "",
        middle: "Draw the top card of your opponent's deck.",
        bottom: "<div><span class='emphasis'>End:</span> You may give 1 card from your hand to your opponent. If you do, draw 2 cards.</div>",
        keywords: {
            draw: true,
            give: true,
        }
    },
    {
        protocol: "Love",
        value: 2,
        top: "",
        middle: "Your opponent draws 1 card. Refresh.",
        bottom: "",
        keywords: {
            draw: true,
            refresh: true,
        }
    },
    {
        protocol: "Love",
        value: 3,
        top: "",
        middle: "Take 1 random card from your opponent's hand. Give 1 card from your hand to your opponent.",
        bottom: "",
        keywords: {
            give: true,
            take: true,
        }
    },
    {
        protocol: "Love",
        value: 4,
        top: "",
        middle: "Reveal 1 card from your hand. Flip 1 card.",
        bottom: "",
        keywords: {
            flip: true,
            reveal: true,
        }
    },
    {
        protocol: "Love",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Love",
        value: 6,
        top: "",
        middle: "Your opponent draws 2 cards.",
        bottom: "",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Metal",
        value: 0,
        top: "Your opponent's total value in this line is reduced by 2.",
        middle: "Flip 1 card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Metal",
        value: 1,
        top: "",
        middle: "Draw 2 cards. Your opponent cannot compile next turn.",
        bottom: "",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Metal",
        value: 2,
        top: "Your opponent cannot play cards face-down in this line.",
        middle: "",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Metal",
        value: 3,
        top: "",
        middle: "Draw 1 card. Delete all cards in 1 other line with 8 or more cards.",
        bottom: "",
        keywords: {
            delete: true,
            draw: true,
        }
    },
    {
        protocol: "Metal",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Metal",
        value: 6,
        top: "<div><span class='emphasis'>When this card would be covered or flipped:</span> First, delete this card.</div>",
        middle: "",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Plague",
        value: 0,
        top: "",
        middle: "Your opponent discards 1 card.",
        bottom: "Your opponent cannot play cards in this line.",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Plague",
        value: 1,
        top: "<div><span class='emphasis'>After your opponent discards cards:</span> Draw 1 card.</div>",
        middle: "Your opponent discards 1 card.",
        bottom: "",
        keywords: {
            discard: true,
            draw: true,
        }
    },
    {
        protocol: "Plague",
        value: 2,
        top: "",
        middle: "Dicard 1 or more cards. Your opponent discards the amount of cards discarded plus 1.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Plague",
        value: 3,
        top: "",
        middle: "Flip each other face-up card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Plague",
        value: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> Your opponent deletes 1 of their face-down cards. You may flip this card.</div>",
        keywords: {
            delete: true,
            flip: true,
        }
    },
    {
        protocol: "Plague",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Psychic",
        value: 0,
        top: "",
        middle: "Draw 2 cards. Your opponent discards 2 cards, then reveals their hand.",
        bottom: "",
        keywords: {
            discard: true,
            draw: true,
            reveal: true,
        }
    },
    {
        protocol: "Psychic",
        value: 1,
        top: "Your opponent can only play cards face-down.",
        middle: "",
        bottom: "<div><span class='emphasis'>Start:</span> Flip this card.</div>",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Psychic",
        value: 2,
        top: "",
        middle: "Your opponent discards 2 cards. Rearrange their protocols.",
        bottom: "",
        keywords: {
            discard: true,
            rearrange: true,
        }
    },
    {
        protocol: "Psychic",
        value: 3,
        top: "",
        middle: "Your opponent discards 1 card. Shift 1 of their cards.",
        bottom: "",
        keywords: {
            discard: true,
            shift: true,
        }
    },
    {
        protocol: "Psychic",
        value: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> You may return 1 of your opponent's cards. If you do, flip this card.</div>",
        keywords: {
            flip: true,
            return: true,
        }
    },
    {
        protocol: "Psychic",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Speed",
        value: 0,
        top: "",
        middle: "Play 1 card.",
        bottom: "",
        keywords: {
            play: true,
        }
    },
    {
        protocol: "Speed",
        value: 1,
        top: "<div><span class='emphasis'>After you clear cache:</span> Draw 1 card.</div>",
        middle: "Draw 2 cards.",
        bottom: "",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Speed",
        value: 2,
        top: "<div><span class='emphasis'>When this card would be deleted by compiling:</span> Shift this card, even if this card is covered.</div>",
        middle: "",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Speed",
        value: 3,
        top: "",
        middle: "Shift 1 of your other cards.",
        bottom: "<div><span class='emphasis'>End:</span> You may shift 1 of your cards. If you do, flip this card.</div>",
        keywords: {
            flip: true,
            shift: true,
        }
    },
    {
        protocol: "Speed",
        value: 4,
        top: "",
        middle: "Shift 1 of your opponent's face-down cards.",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Speed",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Spirit",
        value: 0,
        top: "",
        middle: "Refresh. Draw 1 card.",
        bottom: "Skip your check cache phase.",
        keywords: {
            draw: true,
            refresh: true,
        }
    },
    {
        protocol: "Spirit",
        value: 1,
        top: "You can play cards in any line.",
        middle: "Draw 2 cards.",
        bottom: "<div><span class='emphasis'>Start:</span> Either discard 1 card or flip this card.</div>",
        keywords: {
            discard: true,
            draw: true,
            flip: true,
        }
    },
    {
        protocol: "Spirit",
        value: 2,
        top: "",
        middle: "You may flip 1 card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Spirit",
        value: 3,
        top: "<div><span class='emphasis'>After you draw cards:</span> You may shift this card, even if this card is covered.</div>",
        middle: "",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Spirit",
        value: 4,
        top: "",
        middle: "Swap the positions of 2 of your protocols",
        bottom: "",
        keywords: {
            swap: true,
        }
    },
    {
        protocol: "Spirit",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Water",
        value: 0,
        top: "",
        middle: "Flip 1 other card. Flip this card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Water",
        value: 1,
        top: "",
        middle: "Play the top card of your deck face-down in each other line.",
        bottom: "",
        keywords: {
            play: true,
        }
    },
    {
        protocol: "Water",
        value: 2,
        top: "",
        middle: "Draw 2 cards. Rearrange your protocols.",
        bottom: "",
        keywords: {
            draw: true,
            rearrange: true,
        }
    },
    {
        protocol: "Water",
        value: 3,
        top: "",
        middle: "Return all cards with a value of 2 in 1 line.",
        bottom: "",
        keywords: {
            return: true,
        }
    },
    {
        protocol: "Water",
        value: 4,
        top: "",
        middle: "Return 1 of your cards.",
        bottom: "",
        keywords: {
            return: true,
        }
    },
    {
        protocol: "Water",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
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
$(".js_value").click(function() {
    checkFilters();
})
$(".js_keyword").click(function() {
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
$(".js_select-all-value").click(function() {
    $(".js_value").prop("checked", true);
    checkFilters();
})
$(".js_remove-all-value").click(function() {
    $(".js_value").prop("checked", false);
    checkFilters();
})
$(".js_select-all-keywords").click(function() {
    $(".js_keyword").prop("checked", true);
    checkFilters();
})
$(".js_remove-all-keywords").click(function() {
    $(".js_keyword").prop("checked", false);
    checkFilters();
})

function checkFilters() {
    let array = cards;

    let [apathy, darkness, death, fire, gravity, hate, life, light, love, metal, plague, psychic, speed, spirit, water] = checkProtocols();

    let [zero, one, two, three, four, five, six] = checkValue();

    let [deleteVar, discard, draw, flip, give, play, rearrange, returnVar, reveal, refresh, shift, swap, take] = checkKeywords();

    array = getProtocols(array, apathy, darkness, death, fire, gravity, hate, life, light, love, metal, plague, psychic, speed, spirit, water);

    array = getValue(array, zero, one, two, three, four, five, six);

    array = getKeywords(array, deleteVar, discard, draw, flip, give, play, rearrange, returnVar, reveal, refresh, shift, swap, take);

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

    return [apathy, darkness, death, fire, gravity, hate, life, light, love, metal, plague, psychic, speed, spirit, water];
};

function checkValue() {
    let zero = $('.js_zero').is(':checked');
    let one = $('.js_one').is(':checked');
    let two = $('.js_two').is(':checked');
    let three = $('.js_three').is(':checked');
    let four = $('.js_four').is(':checked');
    let five = $('.js_five').is(':checked');
    let six = $('.js_six').is(':checked');

    return [zero, one, two, three, four, five, six];
};

function checkKeywords() {
    let deleteVar = $('.js_delete').is(':checked');
    let discard = $('.js_discard').is(':checked');
    let draw = $('.js_draw').is(':checked');
    let flip = $('.js_flip').is(':checked');
    let give = $('.js_give').is(':checked');
    let play = $('.js_play').is(':checked');
    let rearrange = $('.js_rearrange').is(':checked');
    let returnVar = $('.js_return').is(':checked');
    let reveal = $('.js_reveal').is(':checked');
    let refresh = $('.js_refresh').is(':checked');
    let shift = $('.js_shift').is(':checked');
    let swap = $('.js_swap').is(':checked');
    let take = $('.js_take').is(':checked');

    return [deleteVar, discard, draw, flip, give, play, rearrange, returnVar, reveal, refresh, shift, swap, take];
}

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

function getValue(array, zero, one, two, three, four, five, six) {
    if (!zero) {
        array = array.filter(cards => cards.value != 0);
    }
    if (!one) {
        array = array.filter(cards => cards.value != 1);
    }
    if (!two) {
        array = array.filter(cards => cards.value != 2);
    }
    if (!three) {
        array = array.filter(cards => cards.value != 3);
    }
    if (!four) {
        array = array.filter(cards => cards.value != 4);
    }
    if (!five) {
        array = array.filter(cards => cards.value != 5);
    }
    if (!six) {
        array = array.filter(cards => cards.value != 6);
    }

    return array;
}

function getKeywords(array, deleteVar, discard, draw, flip, give, play, rearrange, returnVar, reveal, refresh, shift, swap, take) {
    if (deleteVar) {
        array = array.filter(cards => cards.keywords.delete == true);
    }
    if (discard) {
        array = array.filter(cards => cards.keywords.discard == true);
    }
    if (draw) {
        array = array.filter(cards => cards.keywords.draw == true);
    }
    if (flip) {
        array = array.filter(cards => cards.keywords.flip == true);
    }
    if (give) {
        array = array.filter(cards => cards.keywords.give == true);
    }
    if (play) {
        array = array.filter(cards => cards.keywords.play == true);
    }
    if (rearrange) {
        array = array.filter(cards => cards.keywords.rearrange == true);
    }
    if (returnVar) {
        array = array.filter(cards => cards.keywords.return == true);
    }
    if (reveal) {
        array = array.filter(cards => cards.keywords.reveal == true);
    }
    if (refresh) {
        array = array.filter(cards => cards.keywords.refresh == true);
    }
    if (shift) {
        array = array.filter(cards => cards.keywords.shift == true);
    }
    if (swap) {
        array = array.filter(cards => cards.keywords.swap == true);
    }
    if (take) {
        array = array.filter(cards => cards.keywords.take == true);
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
                    <h2 class="card__value">${this.value}</h2>
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