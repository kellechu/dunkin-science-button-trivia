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
        "Force",
        "Gravity",
        "Load",
        "Compression"
      ],
      "correct_answer": "Compression"
    },
    {
      "index": 2,
      "question": "Which science term is defined as reducing length by bending over?",
      "answers": [
        "Folding",
        "Pinching",
        "Shrinking",
        "Replicating"
      ],
      "correct_answer": "Folding"
    },
    {
      "index": 3,
      "question": "Which science term means to run an experiment again and get the same result?",
      "answers": [
        "Replicate",
        "Simulate",
        "Valid",
        "Trial"
      ],
      "correct_answer": "Replicate"
    },
    {
      "index": 4,
      "question": "What term describes one time through a procedure?",
      "answers": [
        "Iteration",
        "Simulation",
        "Repeatable",
        "Trial"
      ],
      "correct_answer": "Trial"
    },
    {
      "index": 5,
      "question": "What term describes a push or pull on an object?",
      "answers": [
        "Force",
        "Gravity",
        "Pressure",
        "Compression"
      ],
      "correct_answer": "Force"
    },
    {
      "index": 6,
      "question": "What are goals that must be satisfied to successfully achieve a challenge?",
      "answers": [
        "Criteria",
        "Recommendation",
        "Constraints",
        "Claim"
      ],
      "correct_answer": "Criteria"
    },
    {
      "index": 7,
      "question": "What are factors that limit how you can solve a problem?",
      "answers": [
        "Recommendation",
        "Criteria",
        "Variable",
        "Constraints"
      ],
      "correct_answer": "Constraints"
    },
    {
      "index": 8,
      "question": "What is the amount of space a substance or object occupies?",
      "answers": [
        "Volume",
        "Model",
        "Container",
        "Matter"
      ],
      "correct_answer": "Volume"
    },
    {
      "index": 9,
      "question": "What is defined as anything that takes up space and has mass?",
      "answers": [
        "Molecules",
        "Structure",
        "Volume",
        "Matter"
      ],
      "correct_answer": "Matter"
    },
    {
      "index": 10,
      "question": "Which science term is defined as the basic building block of matter?",
      "answers": [
        "Atom",
        "Molecule",
        "Compound",
        "Mineral"
      ],
      "correct_answer": "Atom"
    },
    {
      "index": 11,
      "question": "What is a group of atoms bonded together, representing the smallest fundamental unit of a chemical compound that can take part in a chemical reaction?",
      "answers": [
        "Model",
        "Molecules",
        "Atoms",
        "Mineral"
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
        "Stable",
        "Structure",
        "Load",
        "Strong"
      ],
      "correct_answer": "Strong"
    },
    {
      "index": 14,
      "question": "What are structures that resist folding and compressing?",
      "answers": [
        "Molecules",
        "Stable",
        "Strong Structures",
        "Atoms"
      ],
      "correct_answer": "Strong Structures"
    },
    {
      "index": 15,
      "question": "What term means to be able to resist tipping over?",
      "answers": [
        "Stable",
        "Strong",
        "Force",
        "Structure"
      ],
      "correct_answer": "Stable"
    },
    {
      "index": 16,
      "question": "What is the imaginary point on or near an object around which the object's matter is equally distributed?",
      "answers": [
        "Stable point",
        "Density",
        "Center of mass",
        "Satellite"
      ],
      "correct_answer": "Center of mass"
    },
    {
      "index": 17,
      "question": "Which science term is defined as the amount of push or pull a structure has to resist?",
      "answers": [
        "Strong",
        "Load",
        "Force",
        "Range"
      ],
      "correct_answer": "Load"
    },
    {
      "index": 18,
      "question": "What is the display of data in which each data item is shown as an x above its value on a number line?",
      "answers": [
        "Data Graph",
        "Line Plot",
        "Variable",
        "Bar Graph"
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
        "Line Plot",
        "Variation",
        "Range",
        "Precision"
      ],
      "correct_answer": "Precision"
    },
    {
      "index": 21,
      "question": "Which science term is defined as the zone between the largest and smallest solution results?",
      "answers": [
        "Bar Graph",
        "Constraints",
        "Variation",
        "Range"
      ],
      "correct_answer": "Range"
    },
    {
      "index": 22,
      "question": "What term means a wide spread of data?",
      "answers": [
        "Variation",
        "Trend",
        "Range",
        "Precision"
      ],
      "correct_answer": "Variation"
    },
    {
      "index": 23,
      "question": "Which science term is defined as a pattern or a tendency?",
      "answers": [
        "Repeatable",
        "Phenomenon",
        "Trend",
        "Line Plot"
      ],
      "correct_answer": "Trend"
    },
    {
      "index": 24,
      "question": "What is the definition of a template?",
      "answers": [
        "Criterion",
        "Repeatable",
        "Pattern",
        "Plan Briefing"
      ],
      "correct_answer": "Pattern"
    },
    {
      "index": 25,
      "question": "What is an exploratory activity that gives a chance to become familiar with the materials or the function of the design?",
      "answers": [
        "Mechanism",
        "Trial",
        "Messing About",
        "Investigation Exposition"
      ],
      "correct_answer": "Messing About"
    },
    {
      "index": 26,
      "question": "What describes the way parts of an item are put together?",
      "answers": [
        "Model",
        "Template",
        "Structure",
        "Criteria"
      ],
      "correct_answer": "Structure"
    },
    {
      "index": 27,
      "question": "What describes the way parts of an item connect and move?",
      "answers": [
        "Template",
        "Mechanism",
        "Structure",
        "Model"
      ],
      "correct_answer": "Mechanism"
    },
    {
      "index": 28,
      "question": "What is the definition of phenomenon?",
      "answers": [
        "A statement of what you understand",
        "A pattern or tendency",
        "Something that happens",
        "To find the meaning of something"
      ],
      "correct_answer": "Something that happens"
    },
    {
      "index": 29,
      "question": "What is a quantity whose value may vary over the course of an experiment?",
      "answers": [
        "Line Graph",
        "Bar Graph",
        "Variable",
        "Evidence"
      ],
      "correct_answer": "Variable"
    },
    {
      "index": 30,
      "question": "Which science term is defined as finding the meaning of something?",
      "answers": [
        "Interpret",
        "Plan Briefing",
        "Recommendation",
        "Investigation"
      ],
      "correct_answer": "Interpret"
    },
    {
      "index": 31,
      "question": "Which is a statement of what you understand or a conclusion that you have reached from investigations?",
      "answers": [
        "Plan Briefing",
        "Evidence",
        "Claim",
        "Recommendation"
      ],
      "correct_answer": "Claim"
    },
    {
      "index": 32,
      "question": "What is the definition of a fair test?",
      "answers": [
        "Things that are being compared are being tested under the same conditions",
        "A presentation of the procedure, results, and interpretations of the results from an investigation",
        "In an experiment, the variables that are kept constant",
        "An opportunity during the design process to share plans and get advice from others"
      ],
      "correct_answer": "Things that are being compared are being tested under the same conditions"
    },
    {
      "index": 33,
      "question": "Which science term is defined as a presentation of the procedure, results, and interpretations of the results from an investigation?",
      "answers": [
        "Science Knowledge",
        "Evidence",
        "Investigation Exposition",
        "Plan Briefing"
      ],
      "correct_answer": "Investigation Exposition"
    },
    {
      "index": 34,
      "question": "What is the independent variable?",
      "answers": [
        "The responding variable in an experiment",
        "The variable that the scientist intentionally changes in an experiment",
        "The variable that is kept constant in an experiment",
        "The variable whose value is measured in an experiment"
      ],
      "correct_answer": "The variable that the scientist intentionally changes in an experiment"
    },
    {
      "index": 35,
      "question": "What are the control variables?",
      "answers": [
        "The variables that the scientist intentionally change in an experiment",
        "The variables that are kept constant in an experiment",
        "The responding variables in an experiment",
        "The manipulated variables in an experiment"
      ],
      "correct_answer": "The variables that are kept constant in an experiment"
    },
    {
      "index": 36,
      "question": "What are the dependent variables?",
      "answers": [
        "The manipulated variables in an experiment",
        "The variables whose values are measured in an experiment",
        "The variables that are kept constant in an experiment",
        "The variables that the scientist intentionally change in an experiment"
      ],
      "correct_answer": "The variables whose values are measured in an experiment"
    },
    {
      "index": 37,
      "question": "Which science term is defined as the opposing push that resists the movement of an object through air?",
      "answers": [
        "Gravity",
        "Displacement",
        "Drag",
        "Viscosity"
      ],
      "correct_answer": "Drag"
    },
    {
      "index": 38,
      "question": "What is data collected during investigations and the apparent trends in that data?",
      "answers": [
        "Variables",
        "Evidence",
        "Trials",
        "Phenomena"
      ],
      "correct_answer": "Evidence"
    },
    {
      "index": 39,
      "question": "How do you find a ratio?",
      "answers": [
        "Add one number to another number",
        "Divide one number by another number",
        "Multiply one number by another number",
        "Subtract one number from another number"
      ],
      "correct_answer": "Divide one number by another number"
    },
    {
      "index": 40,
      "question": "Which of the following is not an expression of density?",
      "answers": [
        "The relationship between the mass and volume of a substance",
        "The amount of matter in an given amount of space",
        "Dividing the mass of an object by the volume",
        "Dividing the volume of an object by its mass"
      ],
      "correct_answer": "Dividing the volume of an object by its mass"
    },
    {
      "index": 41,
      "question": "Which is an example of an extensive property?",
      "answers": [
        "The mass of the matter",
        "The density of the matter",
        "The conductivity of the matter",
        "A property of the matter that does not depend on the amount of matter present in a sample"
      ],
      "correct_answer": "The mass of the matter"
    },
    {
      "index": 42,
      "question": "Which is an example of an intensive property?",
      "answers": [
        "The volume of the matter",
        "The mass of the matter",
        "The density of the matter",
        "A property of the matter that depends on the amount of matter present in a sample"
      ],
      "correct_answer": "The density of the matter"
    },
    {
      "index": 43,
      "question": "To displace something is to",
      "answers": [
        "compress it",
        "control it",
        "replace it",
        "drop it"
      ],
      "correct_answer": "replace it"
    },
    {
      "index": 44,
      "question": "Which science term is defined as the repetition to improve on the first design?",
      "answers": [
        "Standardize",
        "Model",
        "Iteration",
        "Trial"
      ],
      "correct_answer": "Iteration"
    },
    {
      "index": 45,
      "question": "What is the definition of a model?",
      "answers": [
        "A representation of something",
        "A mixture that varies in composition",
        "A mixture that has a uniform composition of substances",
        "An imitation of real-life situations"
      ],
      "correct_answer": "A representation of something"
    },
    {
      "index": 46,
      "question": "Which is the definition of pressure?",
      "answers": [
        "The amount of gravity exerted on an object",
        "The amount of compression force acting on a substance",
        "The opposing push that resists the movement of an object through air",
        "The upward force exerted by any fluid upon a body placed in it"
      ],
      "correct_answer": "The amount of compression force acting on a substance"
    },
    {
      "index": 47,
      "question": "What are royalties?",
      "answers": [
        "People from a certain lineage or ancestry",
        "Fees paid to the owner of a patent when you use it",
        "To encourage teamwork and combining ideas together",
        "To give credit to any scientists or engineers that you got ideas from"
      ],
      "correct_answer": "Fees paid to the owner of a patent when you use it"
    },
    {
      "index": 48,
      "question": "Which science term is defined as an imitation of real-life situations?",
      "answers": [
        "Simulate",
        "Plan",
        "Model",
        "Criteria"
      ],
      "correct_answer": "Simulate"
    },
    {
      "index": 49,
      "question": "What instrument is used by scientists to measure mass?",
      "answers": [
        "Scale",
        "Litmus paper",
        "Spectrometer",
        "Balance"
      ],
      "correct_answer": "Balance"
    },
    {
      "index": 50,
      "question": "What is not considered a characteristic of a theory?",
      "answers": [
        "A claim that suggests what to do in certain situations",
        "Usually developed over a long time",
        "A big idea in science",
        "Using evidence gained through observations and experimental data"
      ],
      "correct_answer": "A claim that suggests what to do in certain situations"
    },
    {
      "index": 51,
      "question": "Which science term is defined as giving credit to any scientists or engineers that anyone got their ideas from?",
      "answers": [
        "Collaborate",
        "Plan Briefing",
        "Recommendation",
        "Cite"
      ],
      "correct_answer": "Cite"
    },
    {
      "index": 52,
      "question": "What is the upward force exerted by any fluid upon a body placed in it?",
      "answers": [
        "Air Resistance",
        "Compression",
        "Buoyant Force",
        "Gravity"
      ],
      "correct_answer": "Buoyant Force"
    },
    {
      "index": 53,
      "question": "What is not the proper way to display data in a bar graph?",
      "answers": [
        "As horizontal bars",
        "As vertical bars",
        "As a X above its value",
        "As negative values"
      ],
      "correct_answer": "As a X above its value"
    },
    {
      "index": 54,
      "question": "What is the definition of teamwork where scientists combine ideas together?",
      "answers": [
        "Recommendation",
        "Plan Briefing",
        "Science Knowledge",
        "Collaborate"
      ],
      "correct_answer": "Collaborate"
    },
    {
      "index": 55,
      "question": "Which of the following does not apply to Scientific Knowledge?",
      "answers": [
        "A discussion that helps one understand why a claim is true",
        "Knowledge about how things work gathered from reading",
        "Knowledge about how things work gathered from research",
        "Goals that must be satisfied to be able to successfully achieve a challenge"
      ],
      "correct_answer": "Goals that must be satisfied to be able to successfully achieve a challenge"
    },
    {
      "index": 56,
      "question": "What is the definition of Recommendation?",
      "answers": [
        "A conclusion that one has reached from a set of investigations",
        "Factors that limit how you can solve a problem",
        "Goals that must be satisfied to be able to successfully achieve a challenge",
        "A claim that suggests what to do in certain situations"
      ],
      "correct_answer": "A claim that suggests what to do in certain situations"
    },
    {
      "index": 57,
      "question": "What is the opportunity during the design process to share plans and get advice from others?",
      "answers": [
        "Cite",
        "Messing About",
        "Recommendation",
        "Plan Briefing"
      ],
      "correct_answer": "Plan Briefing"
    },
    {
      "index": 58,
      "question": "What is the definition of dense?",
      "answers": [
        "Having an equal ratio of volume per mass",
        "Having a high mass per unit volume",
        "Having a low mass per unit volume",
        "Having a high volume per unit of mass"
      ],
      "correct_answer": "Having a high mass per unit volume"
    },
    {
      "index": 59,
      "question": "What is the scientific term for being dense or having a thick consistency?",
      "answers": [
        "Concentration",
        "Drag",
        "Saturated",
        "Viscous"
      ],
      "correct_answer": "Viscous"
    },
    {
      "index": 60,
      "question": "Which is the atmosphere that extends from about 48 kilometers to 85 kilometers (30 to 53 miles) above the Earth's surface?",
      "answers": [
        "Mesosphere",
        "Thermosphere",
        "Troposphere",
        "Stratosphere",
        "Exosphere"
      ],
      "correct_answer": "Mesosphere"
    },
    {
      "index": 61,
      "question": "Which is the atmosphere that extends from about 85 kilometers to between 500 and 1000 kilometers (53 miles to between 311 and 621 miles) above Earth's surface?",
      "answers": [
        "Stratosphere",
        "Thermosphere",
        "Troposphere",
        "Mesosphere",
        "Exosphere"
      ],
      "correct_answer": "Thermosphere"
    },
    {
      "index": 62,
      "question": "Which is the atmosphere that extends from about 10 kilometers to 48 kilometers (6 to 30 miles) above Earth's surface?",
      "answers": [
        "Troposphere",
        "Thermosphere",
        "Mesosphere",
        "Exosphere",
        "Stratosphere"
      ],
      "correct_answer": "Stratosphere"
    },
    {
      "index": 63,
      "question": "Which is the atmosphere that extends from the Earth's surface to about 10 kilometers (6 miles) up?",
      "answers": [
        "Mesosphere",
        "Exosphere",
        "Stratosphere",
        "Troposphere",
        "Thermosphere"
      ],
      "correct_answer": "Troposphere"
    },
    {
      "index": 64,
      "question": "Which is the highest level of the atmosphere, gradually becoming outer space?",
      "answers": [
        "Trophosphere",
        "Stratosphere",
        "Mesosphere",
        "Exosphere",
        "Thermosphere"
      ],
      "correct_answer": "Exosphere"
    },
    {
      "index": 65,
      "question": "What is the scientific term for water that contains compounds with calcium and magnesium?",
      "answers": [
        "Surface Water",
        "Hard Water",
        "Ground Water",
        "Soft Water"
      ],
      "correct_answer": "Hard Water"
    },
    {
      "index": 66,
      "question": "What is the scientific term for water that holds compounds with sodium and potassium but contains little calcium and magnesium?",
      "answers": [
        "Surface Water",
        "Ground Water",
        "Soft Water",
        "Hard Water"
      ],
      "correct_answer": "Soft Water"
    },
    {
      "index": 67,
      "question": "What is the name of the water that comes from melting snow, and runs into lakes and other bodies of water?",
      "answers": [
        "Acid Rain",
        "Surface Water",
        "Spring Runoff",
        "Ground Water"
      ],
      "correct_answer": "Spring Runoff"
    },
    {
      "index": 68,
      "question": "Which is not a property of noble gases?",
      "answers": [
        "Elements that are found in column eighteen in the Periodic Table of the Elements",
        "A family of elements with full electron energy levels",
        "Elements that are found on the left side and center of the Periodic Table of the Elements",
        "Elements that do not undergo chemical reactions"
      ],
      "correct_answer": "Elements that are found on the left side and center of the Periodic Table of the Elements"
    },
    {
      "index": 69,
      "question": "Which is not a property of metals?",
      "answers": [
        "Elements that are found on the left side and center of the Periodic Table of the Elements",
        "Usually a solid that is hard and shiny and can be made into a wire",
        "Can conduct electricity",
        "Elements that are found in column eighteen in the Periodic Table of the Elements"
      ],
      "correct_answer": "Elements that are found in column eighteen in the Periodic Table of the Elements"
    },
    {
      "index": 70,
      "question": "Which of the following is not a property of acids?",
      "answers": [
        "Has a P H of less than seven",
        "Has a P H of more than seven",
        "A solution that tastes sour",
        "It has more hydrogen ions that pure water"
      ],
      "correct_answer": "Has a P H of more than seven"
    },
    {
      "index": 71,
      "question": "Which of the following is not a property of bases?",
      "answers": [
        "A solution with a bitter taste",
        "Has a slippery feel",
        "Has a P H of more than seven",
        "Has a P H of less than seven"
      ],
      "correct_answer": "Has a P H of less than seven"
    },
    {
      "index": 72,
      "question": "Which of the following is the definition of crystalline?",
      "answers": [
        "The arrangement of atoms in a specific pattern",
        "A compound that contains only hydrogen and carbon atoms",
        "A pure substance made up of two or more different elements",
        "A bond where two atoms share six electrons"
      ],
      "correct_answer": "The arrangement of atoms in a specific pattern"
    },
    {
      "index": 73,
      "question": "Which of the following is not a characteristic of a liquid?",
      "answers": [
        "It takes the shape of its container",
        "The particles remain close together and slide past each other in a fluid motion",
        "The particles are far apart and move rapidly and randomly",
        "Matter that has a definite volume but not a definite shape"
      ],
      "correct_answer": "The particles are far apart and move rapidly and randomly"
    },
    {
      "index": 74,
      "question": "Which of the following is not a characteristic of a gas?",
      "answers": [
        "It takes the shape and volume of its container",
        "The particles remain close together and slide past each other in a fluid motion",
        "The particles are far apart and move rapidly and randomly",
        "Matter that has no definite shape or volume"
      ],
      "correct_answer": "The particles remain close together and slide past each other in a fluid motion"
    },
    {
      "index": 75,
      "question": "Which of the following is not a characteristic of a solid?",
      "answers": [
        "Matter that has an organized arrangement",
        "It takes the shape of its container",
        "The particles remain very close together and vibrate slowly",
        "Matter that has a definite shape and volume"
      ],
      "correct_answer": "It takes the shape of its container"
    },
    {
      "index": 76,
      "question": "What is a compound made of a positive ion and a negative ion?",
      "answers": [
        "Salt",
        "Ozone",
        "Neutron",
        "Hydroxide Ion"
      ],
      "correct_answer": "Salt"
    },
    {
      "index": 77,
      "question": "What is the name of the pollutant that reacts with nitrogen oxides to make smog?",
      "answers": [
        "Particulate Matter",
        "Ozone",
        "Volatile organic compounds",
        "Acid Rain"
      ],
      "correct_answer": "Volatile organic compounds"
    },
    {
      "index": 78,
      "question": "What is the term for water that falls to Earth's surface with a P H close to seven",
      "answers": [
        "Acid Rain",
        "Precipitation",
        "Humidity",
        "Spring Runoff"
      ],
      "correct_answer": "Precipitation"
    },
    {
      "index": 79,
      "question": "Which of the following is not a characteristic of Litmus paper?",
      "answers": [
        "It can determine whether a solution is basic",
        "It can determine whether a solution is acidic",
        "It is a paper made from wood, lichen, and other compounds",
        "It is a test used to measure a range of P H's",
        "It is an indicator"
      ],
      "correct_answer": "It is a test used to measure a range of P H's"
    },
    {
      "index": 80,
      "question": "Which of the following is a hydrocarbon?",
      "answers": [
        "One oxygen atom, one hydrogen atom, and an extra electron",
        "A compound that contains only hydrogen and carbon atoms",
        "Ozone found in the troposphere",
        "An air pollutant formed from nitrogen oxides and volatile organic compounds"
      ],
      "correct_answer": "A compound that contains only hydrogen and carbon atoms"
    },
    {
      "index": 81,
      "question": "Which of the following is two distinct organisms living as one?",
      "answers": [
        "Fungus",
        "Bacteria",
        "Algae",
        "Lichen"
      ],
      "correct_answer": "Lichen"
    },
    {
      "index": 82,
      "question": "What is the name of the small organisms, some of which live underground on the roots of specific plants, some of which can convert nitrogen into a form that plants can use?",
      "answers": [
        "Lichen",
        "Fungus",
        "Bacteria",
        "Algae"
      ],
      "correct_answer": "Bacteria"
    },
    {
      "index": 83,
      "question": "What is the name of the process through which green plants use the energy of sunlight to make food and oxygen?",
      "answers": [
        "U V light",
        "Photosynthesis",
        "Chemical reaction",
        "Food chain"
      ],
      "correct_answer": "Photosynthesis"
    },
    {
      "index": 84,
      "question": "What is the scientific term for a type of matter composed of a single type of particle?",
      "answers": [
        "Heterogeneous",
        "Pure substance",
        "Compound",
        "Molecule"
      ],
      "correct_answer": "Pure substance"
    },
    {
      "index": 85,
      "question": "What is the scientific term for any mixture that has a uniform composition of substances?",
      "answers": [
        "Compound",
        "Homogeneous",
        "Sample",
        "Heterogeneous"
      ],
      "correct_answer": "Homogeneous"
    },
    {
      "index": 86,
      "question": "What is another term for a homogeneous mixture?",
      "answers": [
        "Solute",
        "Solubility",
        "Solvent",
        "Solution"
      ],
      "correct_answer": "Solution"
    },
    {
      "index": 87,
      "question": "What is the definition of heterogeneous?",
      "answers": [
        "A mixture that has a uniform composition of substances",
        "A pure substance made up of two or more different elements",
        "A mixture that varies in composition from one part to another",
        "Matter composed of a single type of particle"
      ],
      "correct_answer": "A mixture that varies in composition from one part to another"
    },
    {
      "index": 88,
      "question": "What is the name of the things you can see with your unaided eyes?",
      "answers": [
        "Particle",
        "Nucleus",
        "Macroscopic",
        "Microscopic"
      ],
      "correct_answer": "Macroscopic"
    },
    {
      "index": 89,
      "question": "Which of the following isn't considered microscopic?",
      "answers": [
        "Subatomic particles",
        "Protons",
        "Rust",
        "Neutrons"
      ],
      "correct_answer": "Rust"
    },
    {
      "index": 90,
      "question": "Which of the following isn't considered subatomic?",
      "answers": [
        "Protons",
        "Neutrons",
        "Nucleus",
        "Electrons",
        "Atoms"
      ],
      "correct_answer": "Atoms"
    },
    {
      "index": 91,
      "question": "What is the name of the subatomic particle found in the nucleus of an atom that has a positive charge?",
      "answers": [
        "Proton",
        "Neutron",
        "Ion",
        "Electron"
      ],
      "correct_answer": "Proton"
    },
    {
      "index": 92,
      "question": "What is the name of the subatomic particle found in the nucleus of an atom that is electrically neutral?",
      "answers": [
        "Electron",
        "Ion",
        "Proton",
        "Neutron"
      ],
      "correct_answer": "Neutron"
    },
    {
      "index": 93,
      "question": "Which of the following subatomic particles are found outside the nucleus of an atom?",
      "answers": [
        "Electrons",
        "Ions",
        "Neutrons",
        "Protons"
      ],
      "correct_answer": "Electrons"
    },
    {
      "index": 94,
      "question": "What is term for the average number of total protons and neutrons in an atom's nucleus?",
      "answers": [
        "Atomic theory",
        "Atomic mass",
        "Chemical symbol",
        "Atomic number"
      ],
      "correct_answer": "Atomic mass"
    },
    {
      "index": 95,
      "question": "What is the term for the number of protons in an atom's nucleus?",
      "answers": [
        "Atomic number",
        "Chemical symbol",
        "Atomic theory",
        "Atomic mass"
      ],
      "correct_answer": "Atomic number"
    },
    {
      "index": 96,
      "question": "What is the idea that all matter is formed from atoms and that atoms have unique structure?",
      "answers": [
        "Chemical family",
        "Science knowledge",
        "Law of conservation of matter",
        "Atomic theory"
      ],
      "correct_answer": "Atomic theory"
    },
    {
      "index": 97,
      "question": "In this law of conservation, this substance is neither created nor destroyed?",
      "answers": [
        "Matter",
        "Atoms",
        "Energy",
        "Mass"
      ],
      "correct_answer": "Matter"
    },
    {
      "index": 98,
      "question": "What is the simplest type of substance made up of identical atoms?",
      "answers": [
        "Compound",
        "Chemical family",
        "Molecule",
        "Element"
      ],
      "correct_answer": "Element"
    },
    {
      "index": 99,
      "question": "What is the term for a group of elements found in a column of the periodic table that exhibit similar properties?",
      "answers": [
        "Nonmetals",
        "Chemical family",
        "Metals",
        "Gases"
      ],
      "correct_answer": "Chemical family"
    },
    {
      "index": 100,
      "question": "Which of the following is not a characteristic of neutralization?",
      "answers": [
        "To have an equal number of hydrogen ions and hydroxide ions",
        "A chemical reaction that forms the product water",
        "Its buffering capacity",
        "The reaction of an acid and a base together to form one oxygen atom, one hydrogen atom, and an extra electron",
        "to bring the P H of a solution close to seven"
      ],
      "correct_answer": "The reaction of an acid and a base together to form one oxygen atom, one hydrogen atom, and an extra electron"
    },
    {
      "index": 101,
      "question": "What is the definition of a reactant?",
      "answers": [
        "A substance that is formed by a chemical change",
        "A substance that enters into physical change",
        "A substance that is formed by a chemical reaction",
        "A substance that enters into a chemical reaction"
      ],
      "correct_answer": "A substance that enters into a chemical reaction"
    },
    {
      "index": 102,
      "question": "What is the definition of a product?",
      "answers": [
        "A substance that enters into a chemical change",
        "A substance that is formed by a chemical change",
        "A substance that enters into a chemical reaction",
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
        "Ozone found in the mesosphere",
        "Ozone found in the stratosphere",
        "Ozone found in the thermosphere",
        "Ozone found in the troposphere"
      ],
      "correct_answer": "Ozone found in the troposphere"
    },
    {
      "index": 105,
      "question": "What is buffering capacity?",
      "answers": [
        "The ability to transfer energy from a warmer substance to a cooler one",
        "The ability to neutralize acid",
        "The ability of a solute to dissolve in a solvent",
        "The ability to hold electrons"
      ],
      "correct_answer": "The ability to neutralize acid"
    },
    {
      "index": 106,
      "question": "What is the condition in a solution when no more solute can dissolve in the solvent?",
      "answers": [
        "Saturated",
        "Concentration",
        "Precipitate",
        "Solubility"
      ],
      "correct_answer": "Saturated"
    },
    {
      "index": 107,
      "question": "Which of the following is not a universal indicator?",
      "answers": [
        "A test used to measure a range of P H's",
        "A measure of the concentration of hydrogen ions in a substance",
        "P H paper",
        "Litmus paper"
      ],
      "correct_answer": "Litmus paper"
    },
    {
      "index": 108,
      "question": "What is the P H scale?",
      "answers": [
        "A measure of the concentration of the oxygen in a substance",
        "A measure of the concentration of the hydroxide ions in a substance",
        "A measure of the concentration of hydrogen ions in a substance",
        "A measure of the concentration of the water molecules in a substance"
      ],
      "correct_answer": "A measure of the concentration of hydrogen ions in a substance"
    },
    {
      "index": 109,
      "question": "What is a Hydroxide ion?",
      "answers": [
        "One oxygen atom and an extra electron",
        "One oxygen atom and one hydrogen atom",
        "One oxygen atom, one hydrogen atom, and an extra electron",
        "One hydrogen atom and an extra electron"
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
