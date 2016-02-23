import {Decision} from './decision';

export var MOCK_DECISIONS: Decision[] = [
{"id": 1, "name": "Alpha"},
{"id": 2, "name": "Beta"},
{"id": 3, "name": "Gamma"},
{"id": 4, "name": "Delta"},
{"id": 5, "name": "Epsilon"},
{"id": 6, "name": "Zeta"},
{"id": 7, "name": "Eta"},
{"id": 8, "name": "Theta"},
{"id": 9, "name": "Iota"},
{
  "id": 10,
  "name": "Life Expectancy",
  "description": "Life Expectancy around the world!",
  "slug": "lifeExpectancy",
  "service": "node-rules",
  "inputs": [
  { "name": "gender", "slug": "gender", "type": "text"},
  { "name": "country", "slug": "country", "type": "text" },
  { "name": "age", "slug": "age", "type": "text" }
  ],
  "outputs": [
  { "name": "Country Array", "slug": "countryArray", "type": "text" },
  { "name": "Years Left", "slug": "yearsLeft", "type": "text" },
  { "name": "Life Expectancy", "slug": "lifeExpectancy", "type": "text" }
  ],
  "rules": [
  {
    "name": "getGenderArrayM", "order": 1,
    "conditions": [
    { "expression": "this.gender === 'M'" }
    ], "actions": [
    { "expression": "this.ageArray = [78, 80, 71, 71, 72]" }
    ]
  },
  {
    "name": "getGenderArrayF", "order": 2,
    "conditions": [
    { "expression": "this.gender === 'F'" }
    ], "actions": [
    { "expression": "this.ageArray = [76, 87, 73, 71, 72]" }
    ]
  },
  {
    "name": "getGenderArrayElse", "order": 3,
    "conditions": [
    { "expression": "!this.countryArray" }
    ], "actions": [
    { "expression": "this.ageArray = [77, 84, 72, 71, 72]" }
    ]
  },
  {
    "name": "getDeathAge", "order": 4,
    "conditions": [
    { "expression": "this.country !== null && this.ageArray !== null" }
    ], "actions": [
    { "expression": "this.lifeExpectancy = this.ageArray[['usa', 'japan','australia','france','iceland'].indexOf(this.country ? this.country.toLowerCase() : '')]" }
    ]
  },
  {
    "name": "getYearsLeft", "order": 5,
    "conditions": [
    { "expression": "this.lifeExpectancy >= this.age" }
    ], "actions": [
    { "expression": "this.yearsLeft = this.lifeExpectancy - this.age" }
    ]
  },
  ]
}
];
