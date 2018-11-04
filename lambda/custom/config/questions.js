'use strict';
/*
 * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 * http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */


/**
 * Questions library
 *
 * Use this file to create your own set of questions.
 *
 * Object properties:
 *      index:          The index of the question in this list
 *      question:       The question you want Alexa to ask
 *      answers:        The list of available answers
 *      correct_answer: The correct answer to the question
 *
 * When adding or updating questions and answers, you must take the list of all values
 * in each of the 'answers' arrays for all questions and add them to a custom slot
 * in your skill called 'answers'.
 *
 * The 'answers' custom slot is be mapped to a couple of intents in the interaction model.
 * One intent, named 'AnswerOnlyIntent', contains only the slot, by itself, in order
 * to maximize the accuracy of the model.
 *
 * For example:
 *      AnswerOnlyIntent {answers}
 *
 * The other intent, 'AnswerQuestionIntent', provides more complex speech patterns
 * to match other utternaces users may include with their answers.
 *
 * For example:
 *      AnswerQuestionIntent is it {answers}
 *      AnswerQuestionIntent it is {answers}
 *      AnswerQuestionIntent the answer is {answers}
 *      AnswerQuestionIntent I think the answer is {answers}
 *
 * See model file at models/en-US.json for a complete example.
 */
module.exports = Object.freeze({
  "questions_en_US": [
    {
      "index": 1,
      "question": "Which science term is defined as reducing size by squeezing?",
      "answers": [
        "Compression",
        "Force",
        "Gravity",
        "Load"
      ],
      "correct_answer": "Compression"
    },
    {
      "index": 2,
      "question": "Which science term is defined as reducing length by bending over?",
      "answers": [
        "Folding",
        "Shrinking",
        "Replicating",
        "Pinching"
      ],
      "correct_answer": "Folding"
    },
    {
      "index": 3,
      "question": "Which science term means to run an experiment again and get the same result?",
      "answers": [
        "Replicate",
        "Valid",
        "Trial",
        "Simulate"
      ],
      "correct_answer": "Replicate"
    },
    {
      "index": 4,
      "question": "What term describes one time through a procedure?",
      "answers": [
        "Trial",
        "Repeatable",
        "Iteration",
        "Simulation"
      ],
      "correct_answer": "Trial"
    },
    {
      "index": 5,
      "question": "What term describes a push or pull on an object?",
      "answers": [
        "Force",
        "Pressure",
        "Compression",
        "Gravity"
      ],
      "correct_answer": "Force"
    },
    {
      "index": 6,
      "question": "What are goals that must be satisfied to successfully achieve a challenge?",
      "answers": [
        "Criteria",
        "Constraints",
        "Claim",
        "Recommendation"
      ],
      "correct_answer": "Criteria"
    },
    {
      "index": 7,
      "question": "What are factors that limit how you can solve a problem?",
      "answers": [
        "Constraints",
        "Criteria",
        "Variable",
        "Recommendation"
      ],
      "correct_answer": "Constraints"
    },
    {
      "index": 8,
      "question": "What is the amount of space a substance or object occupies?",
      "answers": [
        "Volume",
        "Matter",
        "Container",
        "Model"
      ],
      "correct_answer": "Volume"
    },
    {
      "index": 9,
      "question": "What is defined as anything that takes up space and has mass?",
      "answers": [
        "Matter",
        "Volume",
        "Molecules",
        "Structure"
      ],
      "correct_answer": "Matter"
    },
    {
      "index": 10,
      "question": "Which science term is defined as the basic building block of matter?",
      "answers": [
        "Atom",
        "Molecule",
        "Mineral",
        "Compound"
      ],
      "correct_answer": "Atom"
    },
    {
      "index": 11,
      "question": "What is a group of atoms bonded together, representing the smallest fundamental unit of a chemical compound that can take part in a chemical reaction?",
      "answers": [
        "Molecules",
        "Atoms",
        "Mineral",
        "Model"
      ],
      "correct_answer": "Molecules"
    },
    {
      "index": 12,
      "question": "Which science term is defined as the force that attracts a body toward any other physical body having mass?",
      "answers": [
        "Gravity",
        "Compression",
        "Strong Force",
        "Pull"
      ],
      "correct_answer": "Gravity"
    },
    {
      "index": 13,
      "question": "Which science term is defined as able to withstand force?",
      "answers": [
        "Strong",
        "Structure",
        "Stable",
        "Load"
      ],
      "correct_answer": "Strong"
    },
    {
      "index": 14,
      "question": "What are structures that resist folding and compressing?",
      "answers": [
        "Strong Structures",
        "Molecules",
        "Atoms",
        "Stable"
      ],
      "correct_answer": "Strong Structures"
    },
    {
      "index": 15,
      "question": "What term means to be able to resist tipping over?",
      "answers": [
        "Stable",
        "Strong",
        "Structure",
        "Force"
      ],
      "correct_answer": "Stable"
    },
    {
      "index": 16,
      "question": "What is the imaginary point on or near an object around which the object's matter is equally distributed?",
      "answers": [
        "Center of mass",
        "Stable point",
        "Density",
        "Satellite"
      ],
      "correct_answer": "Center of mass"
    },
    {
      "index": 17,
      "question": "Which science term is defined as the amount of push or pull a structure has to resist?",
      "answers": [
        "Load",
        "Force",
        "Strong",
        "Range"
      ],
      "correct_answer": "Load"
    },
    {
      "index": 18,
      "question": "What is the display of data in which each data item is shown as an x above its value on a number line?",
      "answers": [
        "Line Plot",
        "Data Graph",
        "Bar Graph",
        "Variable"
      ],
      "correct_answer": "Line Plot"
    },
    {
      "index": 19,
      "question": "What is the term to describe when someone follows the reported procedure, they get similar results?",
      "answers": [
        "Repeatable",
        "Precision",
        "Trial",
        "Template"
      ],
      "correct_answer": "Repeatable"
    },
    {
      "index": 20,
      "question": "What word describes how close together the measured values are?",
      "answers": [
        "Precision",
        "Range",
        "Variation",
        "Line Plot"
      ],
      "correct_answer": "Precision"
    },
    {
      "index": 21,
      "question": "Which science term is defined as the zone between the largest and smallest solution results?",
      "answers": [
        "Range",
        "Bar Graph",
        "Variation",
        "Constraints"
      ],
      "correct_answer": "Range"
    },
    {
      "index": 22,
      "question": "What term means a wide spread of data?",
      "answers": [
        "Variation",
        "Range",
        "Precision",
        "Trend"
      ],
      "correct_answer": "Variation"
    },
    {
      "index": 23,
      "question": "Which science term is defined as a pattern or a tendency?",
      "answers": [
        "Trend",
        "Repeatable",
        "Line Plot",
        "Phenomenon"
      ],
      "correct_answer": "Trend"
    },
    {
      "index": 24,
      "question": "What is the definition of a template?",
      "answers": [
        "Pattern",
        "Repeatable",
        "Plan Briefing",
        "Criterion"
      ],
      "correct_answer": "Pattern"
    },
    {
      "index": 25,
      "question": "What is an exploratory activity that gives a chance to become familiar with the materials or the function of the design?",
      "answers": [
        "Messing About",
        "Trial",
        "Investigation Exposition",
        "Mechanism"
      ],
      "correct_answer": "Messing About"
    },
    {
      "index": 26,
      "question": "What describes the way parts of an item are put together?",
      "answers": [
        "Structure",
        "Criteria",
        "Template",
        "Model"
      ],
      "correct_answer": "Structure"
    },
    {
      "index": 27,
      "question": "What describes the way parts of an item connect and move?",
      "answers": [
        "Mechanism",
        "Structure",
        "Template",
        "Model"
      ],
      "correct_answer": "Mechanism"
    },
    {
      "index": 28,
      "question": "What is the definition of phenomenon?",
      "answers": [
        "Something that happens",
        "To find the meaning of something",
        "A pattern or tendency",
        "A statement of what you understand"
      ],
      "correct_answer": "Something that happens"
    },
    {
      "index": 29,
      "question": "What is a quantity whose value may vary over the course of an experiment?",
      "answers": [
        "Variable",
        "Line Graph",
        "Bar Graph",
        "Evidence"
      ],
      "correct_answer": "Variable"
    },
    {
      "index": 30,
      "question": "Which science term is defined as finding the meaning of something?",
      "answers": [
        "Interpret",
        "Investigation",
        "Recommendation",
        "Plan Briefing"
      ],
      "correct_answer": "Interpret"
    },
    {
      "index": 31,
      "question": "Which is a statement of what you understand or a conclusion that you have reached from investigations?",
      "answers": [
        "Claim",
        "Plan Briefing",
        "Recommendation",
        "Evidence"
      ],
      "correct_answer": "Claim"
    },
    {
      "index": 32,
      "question": "What is the definition of a fair test?",
      "answers": [
        "Things that are being compared are being tested under the same conditions",
        "In an experiment, the variables that are kept constant",
        "A presentation of the procedure, results, and interpretations of the results from an investigation",
        "An opportunity during the design process to share plans and get advice from others"
      ],
      "correct_answer": "Things that are being compared are being tested under the same conditions"
    },
    {
      "index": 33,
      "question": "Which science term is defined as a presentation of the procedure, results, and interpretations of the results from an investigation?",
      "answers": [
        "Investigation Exposition",
        "Plan Briefing",
        "Science Knowledge",
        "Evidence"
      ],
      "correct_answer": "Investigation Exposition"
    },
    {
      "index": 34,
      "question": "What is the independent variable?",
      "answers": [
        "The variable that the scientist intentionally changes in an experiment",
        "The variable that is kept constant in an experiment",
        "The variable whose value is measured in an experiment",
        "The responding variable in an experiment"
      ],
      "correct_answer": "The variable that the scientist intentionally changes in an experiment"
    },
    {
      "index": 35,
      "question": "What are the control variables?",
      "answers": [
        "The variables that are kept constant in an experiment",
        "The variables that the scientist intentionally change in an experiment",
        "The manipulated variables in an experiment",
        "The responding variables in an experiment"
      ],
      "correct_answer": "The variables that are kept constant in an experiment"
    },
    {
      "index": 36,
      "question": "What are the dependent variables?",
      "answers": [
        "The variables whose values are measured in an experiment",
        "The variables that are kept constant in an experiment",
        "The variables that the scientist intentionally change in an experiment",
        "The manipulated variables in an experiment"
      ],
      "correct_answer": "The variables whose values are measured in an experiment"
    },
    {
      "index": 37,
      "question": "Which science term is defined as the opposing push that resists the movement of an object through air?",
      "answers": [
        "Drag",
        "Displacement",
        "Viscosity",
        "Gravity"
      ],
      "correct_answer": "Drag"
    },
    {
      "index": 38,
      "question": "What is data collected during investigations and the apparent trends in that data?",
      "answers": [
        "Evidence",
        "Trials",
        "Variables",
        "Phenomena"
      ],
      "correct_answer": "Evidence"
    },
    {
      "index": 39,
      "question": "How do you find a ratio?",
      "answers": [
        "Divide one number by another number",
        "Multiply one number by another number",
        "Add one number to another number",
        "Subtract one number from another number"
      ],
      "correct_answer": "Divide one number by another number"
    },
    {
      "index": 40,
      "question": "Which of the following is not an expression of density?",
      "answers": [
        "Dividing the volume of an object by its mass",
        "Dividing the mass of an object by the volume",
        "The relationship between the mass and volume of a substance",
        "The amount of matter in an given amount of space"
      ],
      "correct_answer": "Dividing the volume of an object by its mass"
    },
    {
      "index": 41,
      "question": "Which is an example of an extensive property?",
      "answers": [
        "The mass of the matter",
        "The density of the matter",
        "A property of the matter that does not depend on the amount of matter present in a sample",
        "The conductivity of the matter"
      ],
      "correct_answer": "The mass of the matter"
    },
    {
      "index": 42,
      "question": "Which is an example of an intensive property?",
      "answers": [
        "The density of the matter",
        "The mass of the matter",
        "The volume of the matter",
        "A property of the matter that depends on the amount of matter present in a sample"
      ],
      "correct_answer": "The density of the matter"
    },
    {
      "index": 43,
      "question": "To displace something is to",
      "answers": [
        "replace it",
        "compress it",
        "drop it",
        "control it"
      ],
      "correct_answer": "replace it"
    },
    {
      "index": 44,
      "question": "Which science term is defined as the repetition to improve on the first design?",
      "answers": [
        "Iteration",
        "Model",
        "Trial",
        "Standardize"
      ],
      "correct_answer": "Iteration"
    },
    {
      "index": 45,
      "question": "What is the definition of a model?",
      "answers": [
        "A representation of something",
        "An imitation of real-life situations",
        "A mixture that has a uniform composition of substances",
        "A mixture that varies in composition"
      ],
      "correct_answer": "A representation of something"
    },
    {
      "index": 46,
      "question": "Which is the definition of pressure?",
      "answers": [
        "The amount of compression force acting on a substance",
        "The opposing push that resists the movement of an object through air",
        "The amount of gravity exerted on an object",
        "The upward force exerted by any fluid upon a body placed in it"
      ],
      "correct_answer": "The amount of compression force acting on a substance"
    },
    {
      "index": 47,
      "question": "What are royalties?",
      "answers": [
        "Fees paid to the owner of a patent when you use it",
        "To give credit to any scientists or engineers that you got ideas from",
        "To encourage teamwork and combining ideas together",
        "People from a certain lineage or ancestry"
      ],
      "correct_answer": "Fees paid to the owner of a patent when you use it"
    },
    {
      "index": 48,
      "question": "Which science term is defined as an imitation of real-life situations?",
      "answers": [
        "Simulate",
        "Model",
        "Criteria",
        "Plan"
      ],
      "correct_answer": "Simulate"
    },
    {
      "index": 49,
      "question": "What instrument is used by scientists to measure mass?",
      "answers": [
        "Balance",
        "Scale",
        "Litmus paper",
        "Spectrometer"
      ],
      "correct_answer": "Balance"
    },
    {
      "index": 50,
      "question": "What is not considered a characteristic of a theory?",
      "answers": [
        "A claim that suggests what to do in certain situations",
        "A big idea in science",
        "Usually developed over a long time",
        "Using evidence gained through observations and experimental data"
      ],
      "correct_answer": "A claim that suggests what to do in certain situations"
    },
    {
      "index": 51,
      "question": "Which science term is defined as giving credit to any scientists or engineers that anyone got their ideas from?",
      "answers": [
        "Cite",
        "Collaborate",
        "Plan Briefing",
        "Recommendation"
      ],
      "correct_answer": "Cite"
    },
    {
      "index": 52,
      "question": "What is the upward force exerted by any fluid upon a body placed in it?",
      "answers": [
        "Buoyant Force",
        "Gravity",
        "Compression",
        "Air Resistance"
      ],
      "correct_answer": "Buoyant Force"
    },
    {
      "index": 53,
      "question": "What is not the proper way to display data in a bar graph?",
      "answers": [
        "As a X above its value",
        "As vertical bars",
        "As horizontal bars",
        "As negative values"
      ],
      "correct_answer": "As a X above its value"
    },
    {
      "index": 54,
      "question": "What is the definition of teamwork where scientists combine ideas together?",
      "answers": [
        "Collaborate",
        "Plan Briefing",
        "Science Knowledge",
        "Recommendation"
      ],
      "correct_answer": "Collaborate"
    },
    {
      "index": 55,
      "question": "Which of the following does not apply to Scientific Knowledge?",
      "answers": [
        "Goals that must be satisfied to be able to successfully achieve a challenge",
        "A discussion that helps one understand why a claim is true",
        "Knowledge about how things work gathered from reading",
        "Knowledge about how things work gathered from research"
      ],
      "correct_answer": "Goals that must be satisfied to be able to successfully achieve a challenge"
    },
    {
      "index": 56,
      "question": "What is the definition of Recommendation?",
      "answers": [
        "A claim that suggests what to do in certain situations",
        "Goals that must be satisfied to be able to successfully achieve a challenge",
        "Factors that limit how you can solve a problem",
        "A conclusion that one has reached from a set of investigations"
      ],
      "correct_answer": "A claim that suggests what to do in certain situations"
    },
    {
      "index": 57,
      "question": "What is the opportunity during the design process to share plans and get advice from others?",
      "answers": [
        "Plan Briefing",
        "Messing About",
        "Recommendation",
        "Cite"
      ],
      "correct_answer": "Plan Briefing"
    },
    {
      "index": 58,
      "question": "What is the definition of dense?",
      "answers": [
        "Having a high mass per unit volume",
        "Having a high volume per unit of mass",
        "Having an equal ratio of volume per mass",
        "Having a low mass per unit volume"
      ],
      "correct_answer": "Having a high mass per unit volume"
    },
    {
      "index": 59,
      "question": "What is the scientific term for being dense or having a thick consistency?",
      "answers": [
        "Viscous",
        "Saturated",
        "Concentration",
        "Drag"
      ],
      "correct_answer": "Viscous"
    },
    {
      "index": 60,
      "question": "Which is the atmosphere that extends from about 48 kilometers to 85 kilometers (30 to 53 miles) above the Earth's surface?",
      "answers": [
        "Mesosphere",
        "Thermosphere",
        "Exosphere",
        "Stratosphere",
        "Troposphere"
      ],
      "correct_answer": "Mesosphere"
    },
    {
      "index": 61,
      "question": "Which is the atmosphere that extends from about 85 kilometers to between 500 and 1000 kilometers (53 miles to between 311 and 621 miles) above Earth's surface?",
      "answers": [
        "Thermosphere",
        "Troposphere",
        "Exosphere",
        "Stratosphere",
        "Mesosphere"
      ],
      "correct_answer": "Thermosphere"
    },
    {
      "index": 62,
      "question": "Which is the atmosphere that extends from about 10 kilometers to 48 kilometers (6 to 30 miles) above Earth's surface?",
      "answers": [
        "Stratosphere",
        "Mesosphere",
        "Exosphere",
        "Thermosphere",
        "Troposphere"
      ],
      "correct_answer": "Stratosphere"
    },
    {
      "index": 63,
      "question": "Which is the atmosphere that extends from the Earth's surface to about 10 kilometers (6 miles) up?",
      "answers": [
        "Troposphere",
        "Exosphere",
        "Mesosphere",
        "Stratosphere",
        "Thermosphere"
      ],
      "correct_answer": "Troposphere"
    },
    {
      "index": 64,
      "question": "Which is the highest level of the atmosphere, gradually becoming outer space?",
      "answers": [
        "Exosphere",
        "Trophosphere",
        "Mesosphere",
        "Stratosphere",
        "Thermosphere"
      ],
      "correct_answer": "Exosphere"
    },
    {
      "index": 65,
      "question": "What is the scientific term for water that contains compounds with calcium and magnesium?",
      "answers": [
        "Hard Water",
        "Soft Water",
        "Surface Water",
        "Ground Water"
      ],
      "correct_answer": "Hard Water"
    },
    {
      "index": 66,
      "question": "What is the scientific term for water that holds compounds with sodium and potassium but contains little calcium and magnesium?",
      "answers": [
        "Soft Water",
        "Hard Water",
        "Surface Water",
        "Ground Water"
      ],
      "correct_answer": "Soft Water"
    },
    {
      "index": 67,
      "question": "What is the name of the water that comes from melting snow, and runs into lakes and other bodies of water?",
      "answers": [
        "Spring Runoff",
        "Ground Water",
        "Surface Water",
        "Acid Rain"
      ],
      "correct_answer": "Spring Runoff"
    },
    {
      "index": 68,
      "question": "Which is not a property of noble gases?",
      "answers": [
        "Elements that are found on the left side and center of the Periodic Table of the Elements",
        "A family of elements with full electron energy levels",
        "Elements that do not undergo chemical reactions",
        "Elements that are found in column eighteen in the Periodic Table of the Elements"
      ],
      "correct_answer": "Elements that are found on the left side and center of the Periodic Table of the Elements"
    },
    {
      "index": 69,
      "question": "Which is not a property of metals?",
      "answers": [
        "Elements that are found in column eighteen in the Periodic Table of the Elements",
        "Usually a solid that is hard and shiny and can be made into a wire",
        "Can conduct electricity",
        "Elements that are found on the left side and center of the Periodic Table of the Elements"
      ],
      "correct_answer": "Elements that are found in column eighteen in the Periodic Table of the Elements"
    },
    {
      "index": 70,
      "question": "Which of the following is not a property of acids?",
      "answers": [
        "Has a P H of more than seven",
        "A solution that tastes sour",
        "It has more hydrogen ions that pure water",
        "Has a P H of less than seven"
      ],
      "correct_answer": "Has a P H of more than seven"
    },
    {
      "index": 71,
      "question": "Which of the following is not a property of bases?",
      "answers": [
        "Has a P H of less than seven",
        "Has a P H of more than seven",
        "Has a slippery feel",
        "A solution with a bitter taste"
      ],
      "correct_answer": "Has a P H of less than seven"
    },
    {
      "index": 72,
      "question": "Which of the following is the definition of crystalline?",
      "answers": [
        "The arrangement of atoms in a specific pattern",
        "A bond where two atoms share six electrons",
        "A compound that contains only hydrogen and carbon atoms",
        "A pure substance made up of two or more different elements"
      ],
      "correct_answer": "The arrangement of atoms in a specific pattern"
    },
    {
      "index": 73,
      "question": "Which of the following is not a characteristic of a liquid?",
      "answers": [
        "The particles are far apart and move rapidly and randomly",
        "The particles remain close together and slide past each other in a fluid motion",
        "Matter that has a definite volume but not a definite shape",
        "It takes the shape of its container"
      ],
      "correct_answer": "The particles are far apart and move rapidly and randomly"
    },
    {
      "index": 74,
      "question": "Which of the following is not a characteristic of a gas?",
      "answers": [
        "The particles remain close together and slide past each other in a fluid motion",
        "Matter that has no definite shape or volume",
        "It takes the shape and volume of its container",
        "The particles are far apart and move rapidly and randomly"
      ],
      "correct_answer": "The particles remain close together and slide past each other in a fluid motion"
    },
    {
      "index": 75,
      "question": "Which of the following is not a characteristic of a solid?",
      "answers": [
        "It takes the shape of its container",
        "Matter that has a definite shape and volume",
        "Matter that has an organized arrangement",
        "The particles remain very close together and vibrate slowly"
      ],
      "correct_answer": "It takes the shape of its container"
    },
    {
      "index": 76,
      "question": "What is a compound made of a positive ion and a negative ion?",
      "answers": [
        "Salt",
        "Ozone",
        "Hydroxide Ion",
        "Neutron"
      ],
      "correct_answer": "Salt"
    },
    {
      "index": 77,
      "question": "What is the name of the pollutant that reacts with nitrogen oxides to make smog?",
      "answers": [
        "Volatile organic compounds",
        "Ozone",
        "Acid Rain",
        "Particulate Matter"
      ],
      "correct_answer": "Volatile organic compounds"
    },
    {
      "index": 78,
      "question": "What is the term for water that falls to Earth's surface with a P H close to seven",
      "answers": [
        "Precipitation",
        "Acid Rain",
        "Humidity",
        "Spring Runoff"
      ],
      "correct_answer": "Precipitation"
    },
    {
      "index": 79,
      "question": "Which of the following is not a characteristic of Litmus paper?",
      "answers": [
        "It is a test used to measure a range of P H's",
        "It is an indicator",
        "It is a paper made from wood, lichen, and other compounds",
        "It can determine whether a solution is acidic",
        "It can determine whether a solution is basic"
      ],
      "correct_answer": "It is a test used to measure a range of P H's"
    },
    {
      "index": 80,
      "question": "Which of the following is a hydrocarbon?",
      "answers": [
        "A compound that contains only hydrogen and carbon atoms",
        "An air pollutant formed from nitrogen oxides and volatile organic compounds",
        "Ozone found in the troposphere",
        "One oxygen atom, one hydrogen atom, and an extra electron"
      ],
      "correct_answer": "A compound that contains only hydrogen and carbon atoms"
    },
    {
      "index": 81,
      "question": "Which of the following is two distinct organisms living as one?",
      "answers": [
        "Lichen",
        "Bacteria",
        "Algae",
        "Fungus"
      ],
      "correct_answer": "Lichen"
    },
    {
      "index": 82,
      "question": "What is the name of the small organisms, some of which live underground on the roots of specific plants, some of which can convert nitrogen into a form that plants can use?",
      "answers": [
        "Bacteria",
        "Algae",
        "Fungus",
        "Lichen"
      ],
      "correct_answer": "Bacteria"
    },
    {
      "index": 83,
      "question": "What is the name of the process through which green plants use the energy of sunlight to make food and oxygen?",
      "answers": [
        "Photosynthesis",
        "Chemical reaction",
        "Food chain",
        "U V light"
      ],
      "correct_answer": "Photosynthesis"
    },
    {
      "index": 84,
      "question": "What is the scientific term for a type of matter composed of a single type of particle?",
      "answers": [
        "Pure substance",
        "Heterogeneous",
        "Molecule",
        "Compound"
      ],
      "correct_answer": "Pure substance"
    },
    {
      "index": 85,
      "question": "What is the scientific term for any mixture that has a uniform composition of substances?",
      "answers": [
        "Homogeneous",
        "Heterogeneous",
        "Compound",
        "Sample"
      ],
      "correct_answer": "Homogeneous"
    },
    {
      "index": 86,
      "question": "What is another term for a homogeneous mixture?",
      "answers": [
        "Solution",
        "Solute",
        "Solvent",
        "Solubility"
      ],
      "correct_answer": "Solution"
    },
    {
      "index": 87,
      "question": "What is the definition of heterogeneous?",
      "answers": [
        "A mixture that varies in composition from one part to another",
        "A mixture that has a uniform composition of substances",
        "Matter composed of a single type of particle",
        "A pure substance made up of two or more different elements"
      ],
      "correct_answer": "A mixture that varies in composition from one part to another"
    },
    {
      "index": 88,
      "question": "What is the name of the things you can see with your unaided eyes?",
      "answers": [
        "Macroscopic",
        "Particle",
        "Microscopic",
        "Nucleus"
      ],
      "correct_answer": "Macroscopic"
    },
    {
      "index": 89,
      "question": "Which of the following isn't considered microscopic?",
      "answers": [
        "Rust",
        "Subatomic particles",
        "Neutrons",
        "Protons"
      ],
      "correct_answer": "Rust"
    },
    {
      "index": 90,
      "question": "Which of the following isn't considered subatomic?",
      "answers": [
        "Atoms",
        "Nucleus",
        "Neutrons",
        "Electrons",
        "Protons"
      ],
      "correct_answer": "Atoms"
    },
    {
      "index": 91,
      "question": "What is the name of the subatomic particle found in the nucleus of an atom that has a positive charge?",
      "answers": [
        "Proton",
        "Neutron",
        "Electron",
        "Ion"
      ],
      "correct_answer": "Proton"
    },
    {
      "index": 92,
      "question": "What is the name of the subatomic particle found in the nucleus of an atom that is electrically neutral?",
      "answers": [
        "Neutron",
        "Proton",
        "Electron",
        "Ion"
      ],
      "correct_answer": "Neutron"
    },
    {
      "index": 93,
      "question": "Which of the following subatomic particles are found outside the nucleus of an atom?",
      "answers": [
        "Electrons",
        "Protons",
        "Neutrons",
        "Ions"
      ],
      "correct_answer": "Electrons"
    },
    {
      "index": 94,
      "question": "What is term for the average number of total protons and neutrons in an atom's nucleus?",
      "answers": [
        "Atomic mass",
        "Atomic number",
        "Chemical symbol",
        "Atomic theory"
      ],
      "correct_answer": "Atomic mass"
    },
    {
      "index": 95,
      "question": "What is the term for the number of protons in an atom's nucleus?",
      "answers": [
        "Atomic number",
        "Atomic mass",
        "Chemical symbol",
        "Atomic theory"
      ],
      "correct_answer": "Atomic number"
    },
    {
      "index": 96,
      "question": "What is the idea that all matter is formed from atoms and that atoms have unique structure?",
      "answers": [
        "Atomic theory",
        "Law of conservation of matter",
        "Science knowledge",
        "Chemical family"
      ],
      "correct_answer": "Atomic theory"
    },
    {
      "index": 97,
      "question": "In this law of conservation, this substance is neither created nor destroyed?",
      "answers": [
        "Matter",
        "Energy",
        "Mass",
        "Atoms"
      ],
      "correct_answer": "Matter"
    },
    {
      "index": 98,
      "question": "What is the simplest type of substance made up of identical atoms?",
      "answers": [
        "Element",
        "Molecule",
        "Compound",
        "Chemical family"
      ],
      "correct_answer": "Element"
    },
    {
      "index": 99,
      "question": "What is the term for a group of elements found in a column of the periodic table that exhibit similar properties?",
      "answers": [
        "Chemical family",
        "Nonmetals",
        "Metals",
        "Gases"
      ],
      "correct_answer": "Chemical family"
    },
    {
      "index": 100,
      "question": "Which of the following is not a characteristic of neutralization?",
      "answers": [
        "The reaction of an acid and a base together to form one oxygen atom, one hydrogen atom, and an extra electron",
        "A chemical reaction that forms the product water",
        "to bring the P H of a solution close to seven",
        "To have an equal number of hydrogen ions and hydroxide ions",
        "Its buffering capacity"
      ],
      "correct_answer": "The reaction of an acid and a base together to form one oxygen atom, one hydrogen atom, and an extra electron"
    },
    {
      "index": 101,
      "question": "What is the definition of a reactant?",
      "answers": [
        "A substance that enters into a chemical reaction",
        "A substance that is formed by a chemical reaction",
        "A substance that is formed by a chemical change",
        "A substance that enters into physical change"
      ],
      "correct_answer": "A substance that enters into a chemical reaction"
    },
    {
      "index": 102,
      "question": "What is the definition of a product?",
      "answers": [
        "A substance that is formed by a chemical change",
        "A substance that enters into a chemical reaction",
        "A substance that enters into a chemical change",
        "A substance that is formed by a physical change"
      ],
      "correct_answer": "A substance that is formed by a chemical change"
    },
    {
      "index": 103,
      "question": "What is the definition of a mixture?",
      "answers": [
        "Two or more substances combine such that each substance may retain its own identity",
        "Two or more substances combine to enter into a chemical reaction with one another",
        "A compound made of a positive ion and a negative ion",
        "A combination of two reactants in a solution"
      ],
      "correct_answer": "Two or more substances combine such that each substance may retain its own identity"
    },
    {
      "index": 104,
      "question": "Which of the following is a characteristic of bad ozone?",
      "answers": [
        "Ozone found in the troposphere",
        "Ozone found in the mesosphere",
        "Ozone found in the stratosphere",
        "Ozone found in the thermosphere"
      ],
      "correct_answer": "Ozone found in the troposphere"
    },
    {
      "index": 105,
      "question": "What is buffering capacity?",
      "answers": [
        "The ability to neutralize acid",
        "The ability of a solute to dissolve in a solvent",
        "The ability to transfer energy from a warmer substance to a cooler one",
        "The ability to hold electrons"
      ],
      "correct_answer": "The ability to neutralize acid"
    },
    {
      "index": 106,
      "question": "What is the condition in a solution when no more solute can dissolve in the solvent?",
      "answers": [
        "Saturated",
        "Precipitate",
        "Concentration",
        "Solubility"
      ],
      "correct_answer": "Saturated"
    },
    {
      "index": 107,
      "question": "Which of the following is not a universal indicator?",
      "answers": [
        "Litmus paper",
        "P H paper",
        "A test used to measure a range of P H's",
        "A measure of the concentration of hydrogen ions in a substance"
      ],
      "correct_answer": "Litmus paper"
    },
    {
      "index": 108,
      "question": "What is the P H scale?",
      "answers": [
        "A measure of the concentration of hydrogen ions in a substance",
        "A measure of the concentration of the hydroxide ions in a substance",
        "A measure of the concentration of the water molecules in a substance",
        "A measure of the concentration of the oxygen in a substance"
      ],
      "correct_answer": "A measure of the concentration of hydrogen ions in a substance"
    },
    {
      "index": 109,
      "question": "What is a Hydroxide ion?",
      "answers": [
        "One oxygen atom, one hydrogen atom, and an extra electron",
        "One oxygen atom and one hydrogen atom",
        "One hydrogen atom and an extra electron",
        "One oxygen atom and an extra electron"
      ],
      "correct_answer": "One oxygen atom, one hydrogen atom, and an extra electron"
    },
    {
      "index": 110,
      "question": "What is an ionic bond?",
      "answers": [
        "A chemical bond between a positive ion and a negative ion",
        "A magnetic bond between a positive ion and a negative ion",
        "A triple bond between a positive ion and a negative ion",
        "A chemical bond between two hydrogen ions"
      ],
      "correct_answer": "A chemical bond between a positive ion and a negative ion"
    }
  ]
});
