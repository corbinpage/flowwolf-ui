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
    { "name": "gender", "slug": "gender", "defaultValue": "M" },
    { "name": "country", "slug": "country", "defaultValue": "USA" },
    { "name": "age", "slug": "age", "defaultValue": 28 }
  ],
  "outputs": [
    { "name": "Country Array", "slug": "countryArray"},
    { "name": "Years Left", "slug": "yearsLeft"},
    { "name": "Life Expectancy", "slug": "lifeExpectancy"}
  ],
  "rules": [
  {
    "name": "getGenderArrayM", "order": 1,
    "conditions": [
    { "expression": '{ "==": [{ "var": "gender" }, "M"] }' }
    ], "actions": [
    { "expression": "ageArray = [78, 80, 71, 71, 72]" }
    ]
  },
  {
    "name": "getGenderArrayF", "order": 2,
    "conditions": [
    { "expression": '{ "===": [{ "var": "gender" }, "F"] }' }
    ], "actions": [
    { "expression": "ageArray = [76, 87, 73, 71, 72]" }
    ]
  },
  {
    "name": "getGenderArrayElse", "order": 3,
    "conditions": [
    { "expression": '{ !: [countryArray] }' }
    ], "actions": [
    { "expression": "ageArray = [77, 84, 72, 71, 72]" }
    ]
  },
  {
    "name": "getDeathAge", "order": 4,
    "conditions": [
      { "expression": '{"and": "[{ " !== ": [{ "var": "country" }, null]}, { "!== ": [{ "var": "ageArray" }, null]}]" }' }
    ], "actions": [
    { "expression": "lifeExpectancy = ageArray[['usa', 'japan','australia','france','iceland'].indexOf(country ? country.toLowerCase() : '')]" }
    ]
  },
  {
    "name": "getYearsLeft", "order": 5,
    "conditions": [
    { "expression": '{ ">=": [{ "var": "lifeExpectancy" }, { "var": "age" }]}' }
    ], "actions": [
    { "expression": "yearsLeft = lifeExpectancy - age" }
    ]
  },
  ]
}
];
