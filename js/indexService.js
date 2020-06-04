'use strict'

const gHoroscopes = [
    ` Some signs on the financial front will appear encouraging. Ideas implemented on the professional front may literally turn into gold, so expect to add substantially to your wealth! Enjoying good health by getting serious on the exercise and workout fronts is indicated. You may be compelled to attend a function despite your reluctance. Earning an extra buck is indicated for
     real estate agents. Forces pulling you in different directions can leave you befuddled.
      Love Focus: Someone may express his or her love for you.`,
    `Good investments will keep the monetary front strong. Your reputation gets a boost at work through good networking. Going steady with someone you have met recently cannot be ruled out. Keeping your diet under control and remaining active will be the key to your good health. You may spend joyous time in following a family tradition or 
    a religious rite. You will be able to cover much ground on the academic front.
     Love Focus: It’s OK to let go things rather than upsetting each other’s mood by beating 
     around the bush.`,
    `Managing capital for something you want to purchase would not be tough. Professionals will find
      much merit in going in for newer ways to publicise their talents. Window shopping with partner 
      will not only be pleasurable, but also enhance togetherness. A new tip on the fitness front is likely to work wonders. Some of you may spend the day looking up suitable property. Good showing on the academic front will help you in forging ahead with confidence.
     Love Focus: A strong relationship can become stronger through your benevolence.`
]


function getHoroscope() {
    return gHoroscopes[getRandomIntInclusive(0, 2)];
}