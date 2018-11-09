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
        "Things that are compared are tested under the same conditions",
        "A presentation of the procedure, results, and interpretations of the results",
        "The variables that are kept constant in an experiment",
        "An opportunity during the design process to share plans and get advice from others"
      ],
      "correct_answer": "Things that are compared are tested under the same conditions"
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
        "The variable intentionally changed in an experiment",
        "The variable that is kept constant in an experiment",
        "The variable whose value is measured in an experiment"
      ],
      "correct_answer": "The variable intentionally changed in an experiment"
    },
    {
      "index": 35,
      "question": "What are the control variables?",
      "answers": [
        "The variables intentionally changed in an experiment",
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
        "The variables measured in an experiment",
        "The variables that are kept constant in an experiment",
        "The variables intentionally changed in an experiment"
      ],
      "correct_answer": "The variables measured in an experiment"
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
        "Goals that must be satisfied to successfully achieve a challenge"
      ],
      "correct_answer": "Goals that must be satisfied to successfully achieve a challenge"
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
        "Elements that are found in column eighteen in the Periodic Table",
        "A family of elements with full electron energy levels",
        "Elements found on the left and center of the Periodic Table",
        "Elements that do not undergo chemical reactions"
      ],
      "correct_answer": "Elements found on the left and center of the Periodic Table"
    },
    {
      "index": 69,
      "question": "Which is not a property of metals?",
      "answers": [
        "Elements found on the left and center of the Periodic Table",
        "Usually a solid that is hard and shiny and can be made into a wire",
        "Can conduct electricity",
        "Elements that are found in column eighteen in the Periodic Table"
      ],
      "correct_answer": "Elements that are found in column eighteen in the Periodic Table"
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
        "The particles slide past each other in a fluid motion",
        "The particles are far apart and move rapidly",
        "Matter that has a definite volume but not a definite shape"
      ],
      "correct_answer": "The particles are far apart and move rapidly"
    },
    {
      "index": 74,
      "question": "Which of the following is not a characteristic of a gas?",
      "answers": [
        "It takes the shape and volume of its container",
        "The particles slide past each other in a fluid motion",
        "The particles are far apart and move rapidly and randomly",
        "Matter that has no definite shape or volume"
      ],
      "correct_answer": "The particles slide past each other in a fluid motion"
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
        "A paper made from wood, lichen, and other compounds",
        "A test used to measure a range of P H's",
        "It is an indicator"
      ],
      "correct_answer": "A test used to measure a range of P H's"
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
        "A chemical reaction that forms hydroxide ions",
        "To bring the P H of a solution close to seven"
      ],
      "correct_answer": "A chemical reaction that forms hydroxide ions"
    },
    {
      "index": 101,
      "question": "What is the definition of a reactant?",
      "answers": [
        "A substance formed by a chemical change",
        "A substance that enters into physical change",
        "A substance formed by a chemical reaction",
        "A substance that enters into a chemical reaction"
      ],
      "correct_answer": "A substance that enters into a chemical reaction"
    },
    {
      "index": 102,
      "question": "What is the definition of a product?",
      "answers": [
        "A substance that enters into a chemical change",
        "A substance formed by a chemical change",
        "A substance that enters into a chemical reaction",
        "A substance formed by a physical change"
      ],
      "correct_answer": "A substance formed by a chemical change"
    },
    {
      "index": 103,
      "question": "What is the definition of a mixture?",
      "answers": [
        "Substances combine and retain own identity",
        "Substances combine into a chemical reaction",
        "A compound made of a positive and negative ions",
        "A combination of two reactants in a solution"
      ],
      "correct_answer": "Substances combine and retain own identity"
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
      "question": "What is the P H scale a measure of the concentration of?",
      "answers": [
        "the oxygen in a substance",
        "the hydroxide ions in a substance",
        "the hydrogen ions in a substance",
        "the water molecules in a substance"
      ],
      "correct_answer": "the hydrogen ions in a substance"
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
    },
    {
      "index": 111,
        "question": "What is the term for water vapor in the air?",
        "answers": [
            "Humidity",
            "Precipitation",
            "Rain",
            "Cloud"
        ],
        "correct_answer": "Humidity"
      },
      {
          "index": 112,
          "question": "Which of the following is not a characteristic of a chemical change?",
          "answers": [
              "A change only in the form or appearance of matter",
              "A chemical reaction",
              "A change in the composition",
              "A change in the chemical makeup"
          ],
          "correct_answer": "A change only in the form or appearance of matter"
      },
      {
          "index": 113,
          "question": "Which of the following is a characteristic of a physical change?",
          "answers": [
              "A change only in the form or appearance of matter",
              "A chemical reaction",
              "A change in the composition",
              "A change in the chemical makeup"
          ],
          "correct_answer": "A change only in the form or appearance of matter"
      },
      {
          "index": 114,
          "question": "What is the introduction of chemicals, particles, or organisms to air that are harmful to living things and structures called?",
          "answers": [
              "air pollution",
              "leaching",
              "fossil fuel",
              "Clean Air Act"
          ],
          "correct_answer": "air pollution"
      },
      {
          "index": 115,
          "question": "Which of the following is not a P M or particulate matter?",
          "answers": [
              "fire",
              "soot",
              "solid particles that become airborne",
              "products of combustion that can be inhaled by people"
          ],
          "correct_answer": "fire"
      },
      {
          "index": 116,
          "question": "What are atoms and molecules that make up substances?",
          "answers": [
              "particles",
              "pollutants",
              "part per million",
              "part per billion"
          ],
          "correct_answer": "particles"
      },
      {
          "index": 117,
          "question": "Which of the following is not a characteristic of smog?",
          "answers": [
              "a reaction formed from metals and oxygen",
              "a photochemical activated by sunlight",
              "an air pollutant",
              "a reaction formed from nitrogen oxides and V O C's"
          ],
          "correct_answer": "a reaction formed from metals and oxygen"
      },
      {
          "index": 118,
          "question": "Which of the following is the flow of energy stored in food from one organism to another?",
          "answers": [
              "food chain",
              "photosynthesis",
              "thermal energy",
              "convection"
          ],
          "correct_answer": "food chain"
      },
      {
          "index": 119,
          "question": "What is the shorthand method of representing the types of atoms and the numbers of atoms in a molecule?",
          "answers": [
              "molecular formula",
              "chemical symbol",
              "coefficient",
              "atomic number"
          ],
          "correct_answer": "molecular formula"
      },
      {
          "index": 120,
          "question": "Which of the following is the name for water found in ponds, lakes, streams and oceans?",
          "answers": [
              "Surface water",
              "Ground water",
              "Condensation",
              "Hard water"
          ],
          "correct_answer": "Surface water"
      },
      {
          "index": 121,
          "question": "Which of the following is not a characteristic of a nonmetal?",
          "answers": [
              "An element that is a gas",
              "An element that is a soft, brittle solid",
              "It conducts electricity",
              "It does not conduct electricity"
          ],
          "correct_answer": "it conducts electricity"
      },
      {
          "index": 122,
          "question": "What is the term for the component of a solution present in the greatest amount?",
          "answers": [
              "Solvent",
              "Solute",
              "Concentration",
              "Solubility"
          ],
          "correct_answer": "Solvent"
      },
      {
          "index": 123,
          "question": "What is the term for the component of a solution said to dissolve in the solvent?",
          "answers": [
              "Solute",
              "Solvent",
              "Solubility",
              "Concentration"
          ],
          "correct_answer": "Solute"
      },
      {
          "index": 124,
          "question": "Which of the following is not a characteristic of the term dilute?",
          "answers": [
              "when the amount of solute in a solvent is lower",
              "to decrease the concentration of a substance in a mixture",
              "to make a weaker solution",
              "when no more solute can dissolve in the solvent"
          ],
          "correct_answer": "when no more solute can dissolve in the solvent"
      },
      {
          "index": 125,
          "question": "What is the term for the amount of solute in a solvent?",
          "answers": [
              "Concentration",
              "Dilution",
              "Precipitate",
              "Condensation"
          ],
          "correct_answer": "Concentration"
      },
      {
          "index": 126,
          "question": "What is the temperature at which a solid changes to a liquid?",
          "answers": [
              "melting point",
              "boiling point",
              "evaporation",
              "freezing point"
          ],
          "correct_answer": "melting point"
      },
      {
          "index": 127,
          "question": "What is the temperature at which liquid changes to a gas?",
          "answers": [
              "melting point",
              "boiling point",
              "evaporation",
              "freezing point"
          ],
          "correct_answer": "boiling point"
      },
      {
          "index": 128,
          "question": "What is the temperature at which a liquid turns into a solid?",
          "answers": [
              "melting point",
              "boiling point",
              "condensation",
              "freezing point"
          ],
          "correct_answer": "freezing point"
      },
      {
          "index": 129,
          "question": "What is the process of a substance changing directly from a solid to a gas?",
          "answers": [
              "sublimation",
              "freezing",
              "condensation",
              "evaporation"
          ],
          "correct_answer": "sublimation"
      },
      {
          "index": 130,
          "question": "What is the process in which a liquid cools to form a solid?",
          "answers": [
              "sublimation",
              "freezing",
              "condensation",
              "evaporation"
          ],
          "correct_answer": "freezing"
      },
      {
          "index": 131,
          "question": "What is the process in which a gas cools to form a liquid?",
          "answers": [
              "evaporation",
              "sublimation",
              "condensation",
              "freezing"
          ],
          "correct_answer": "condensation"
      },
      {
          "index": 132,
          "question": "What is the state of matter that forms from gases at very high temperatures?",
          "answers": [
              "plasma",
              "precipitate",
              "smog",
              "ozone"
          ],
          "correct_answer": "plasma"
      },
      {
          "index": 133,
          "question": "What is the change from a liquid to gas at a temperature that is lower than the boiling point called?",
          "answers": [
              "evaporation",
              "plasma",
              "sublimation",
              "chemical reaction"
          ],
          "correct_answer": "evaporation"
      },
      {
          "index": 134,
          "question": "What are very short high energy rays from the Sun called?",
          "answers": [
              "ultraviolet rays",
              "infrared rays",
              "solar radiation",
              "X rays"
          ],
          "correct_answer": "ultraviolet rays"
      },
      {
          "index": 135,
          "question": "Which of the following is not a characteristic of temperature?",
          "answers": [
              "it measures warmer as the particles move faster",
              "it measures colder as the particles move slower",
              "it measures the average speed of the particles of matter",
              "it measures the total energy in a substance"
          ],
          "correct_answer": "it measures the total energy in a substance"
      },
      {
          "index": 136,
          "question": "What is the transfer of energy from a warmer substance to a cooler one called?",
          "answers": [
              "heat",
              "thermal energy",
              "temperature",
              "thermal inversion"
          ],
          "correct_answer": "heat"
      },
      {
          "index": 137,
          "question": "What is another name for a molecule that is made up of three oxygen atoms?",
          "answers": [
              "ozone",
              "triple bond",
              "ion",
              "pollutant"
          ],
          "correct_answer": "ozone"
      },
      {
          "index": 138,
          "question": "What is the name of the bond where two atoms share four electrons?",
          "answers": [
              "double bond",
              "triple bond",
              "single bond",
              "ionic bond"
          ],
          "correct_answer": "double bond"
      },
      {
          "index": 139,
          "question": "What is the name of the bond where two atoms share six electrons?",
          "answers": [
              "triple bond",
              "double bond",
              "single bond",
              "ionic bond"
          ],
          "correct_answer": "triple bond"
      },
      {
          "index": 140,
          "question": "What is the name of the bond where two atoms share two electrons?",
          "answers": [
              "single bond",
              "triple bond",
              "double bond",
              "ionic bond"
          ],
          "correct_answer": "single bond"
      },
      {
          "index": 141,
          "question": "What is the name of the bond when one atom gives up one or more electrons to another atom?",
          "answers": [
              "ionic bond",
              "single bond",
              "double bond",
              "triple bond"
          ],
          "correct_answer": "ionic bond"
      },
      {
          "index": 142,
          "question": "What is defined as something that repeats in a regular pattern?",
          "answers": [
              "period",
              "data plot",
              "evidence",
              "template"
          ],
          "correct_answer": "period"
      },
      {
          "index": 143,
          "question": "Which of the following is not a true chemical bond?",
          "answers": [
              "an attraction between atoms that share electrons",
              "covalent bonds",
              "ionic bonds",
              "hydrogen bonds"
          ],
          "correct_answer": "hydrogen bonds"
      },
      {
          "index": 144,
          "question": "What is the center part of at atom called?",
          "answers": [
              "nucleus",
              "proton",
              "neutron",
              "electron shell"
          ],
          "correct_answer": "nucleus"
      },
      {
          "index": 145,
          "question": "Which of the following is not a characteristic of rust?",
          "answers": [
              "salt water will rust metal faster than fresh water",
              "it is a product of a chemical reaction with oxygen and water",
              "it produces a reddish brown crust or green film",
              "it does not affect metals that contain iron"
          ],
          "correct_answer": "it does not affect metals that contain iron"
      },
      {
          "index": 146,
          "question": "Which is not a secondary pollutant?",
          "answers": [
              "acid rain",
              "pollutants formed directly from natural activities and human activities",
              "photochemical smog",
              "ground ozone"
          ],
          "correct_answer": "pollutants formed directly from natural activities and human activities"
      },
      {
          "index": 147,
          "question": "Which of the following is not usually in molecular formulas?",
          "answers": [
              "coefficients",
              "chemical symbols",
              "subscripts",
              "superscripts"
          ],
          "correct_answer": "superscripts"
      },
      {
          "index": 148,
          "question": "What is a substance that reacts with oxygen to produce light and heat?",
          "answers": [
              "fuel",
              "ozone",
              "plasma",
              "indicator"
          ],
          "correct_answer": "fuel"
      },
      {
          "index": 149,
          "question": "What is an atom, or group of atoms, that has lost electrons?",
          "answers": [
              "positive ion",
              "negative ion",
              "stable",
              "unstable"
          ],
          "correct_answer": "positive ion"
      },
      {
          "index": 150,
          "question": "What is an atom, or group of atoms, that has gained electrons?",
          "answers": [
              "negative ion",
              "positive ion",
              "stable",
              "unstable"
          ],
          "correct_answer": "negative ion"
      },
      {
          "index": 151,
          "question": "What is a solid substance formed from a liquid solution called?",
          "answers": [
              "precipitate",
              "fuel",
              "leaching",
              "salt"
          ],
          "correct_answer": "precipitate"
      },
      {
          "index": 152,
          "question": "What is a nonrenewable resource formed from the remains of living things over millions of years?",
          "answers": [
              "Fossil fuel",
              "Geothermal energy",
              "tidal energy",
              "biomass fuel"
          ],
          "correct_answer": "Fossil fuel"
      },
      {
          "index": 153,
          "question": "Which of the following is not a photochemical?",
          "answers": [
              "ground ozone",
              "smog",
              "rust",
              "an air pollutant formed from nitrogen oxides and V O C's"
          ],
          "correct_answer": "rust"
      },
      {
          "index": 154,
          "question": "Which of the following is a primary pollutant?",
          "answers": [
              "photochemical smog",
              "ground ozone",
              "pollutants formed directly from natural activities and human activities",
              "acid rain"
          ],
          "correct_answer": "pollutants formed directly from natural activities and human activities"
      },
      {
          "index": 155,
          "question": "What is the concentration of hydrogen ions in a solution called?",
          "answers": [
              "acidity",
              "alkalinity",
              "buffering capacity",
              "solubility"
          ],
          "correct_answer": "acidity"
      },
      {
          "index": 156,
          "question": "Which is a device providing specific information on the state or condition of something?",
          "answers": [
              "indicator",
              "balance",
              "food chain",
              "sampling"
          ],
          "correct_answer": "indicator"
      },
      {
          "index": 157,
          "question": "Which is not a condition of the Environmental Protection Agency?",
          "answers": [
              "it is run by the government",
              "it improves and restores the environment",
              "it protects public health and environmental quality",
              "it is a nonprofit agency"
          ],
          "correct_answer": "it is a nonprofit agency"
      },
      {
          "index": 158,
          "question": "Which is not a condition of the Clean Air Act?",
          "answers": [
              "it defines the government's responsibilities for protecting the nation's air quality",
              "it regulates air emissions from stationary and mobile sources",
              "it regulates emissions of hazardous air pollutants",
              "it regulates noise pollution as well"
          ],
          "correct_answer": "it regulates noise pollution as well"
      },
      {
          "index": 159,
          "question": "What is the term that describes the number of particles of one substance in one million particles of a mixture?",
          "answers": [
              "part per million",
              "part per billion",
              "percent",
              "particulate matter"
          ],
          "correct_answer": "part per million"
      },
      {
          "index": 160,
          "question": "What is one percent?",
          "answers": [
              "one out of one hundred",
              "one out of one million",
              "one out of one billion",
              "one out of thousand"
          ],
          "correct_answer": "one out of one hundred"
      },
      {
          "index": 161,
          "question": "What is the term that describes the number of particles of one substance in one billion particles of a mixture?",
          "answers": [
              "part per million",
              "part per billion",
              "percent",
              "particulate matter"
          ],
          "correct_answer": "part per billion"
      },
      {
          "index": 162,
          "question": "What is not a property of acid rain?",
          "answers": [
              "it is a secondary pollutant",
              "it is a primary pollutant",
              "it describes any of several ways acid falls out of the atmosphere",
              "it leaches nutrients from the soil"
          ],
          "correct_answer": "it is a primary pollutant"
      },
      {
          "index": 163,
          "question": "What is leaching?",
          "answers": [
              "the removal of nutrients in the soil by acids",
              "the removal of electrons from a atom",
              "the removal of a solute from its solvent",
              "the removal of pollutants from the atmosphere"
          ],
          "correct_answer": "the removal of nutrients in the soil by acids"
      },
      {
          "index": 164,
          "question": "Which is not always a characteristic of combustion?",
          "answers": [
              "it produces water and carbon dioxide",
              "it is the reaction of a fuel with oxygen",
              "it produces energy",
              "it produces soot, or carbon"
          ],
          "correct_answer": "it produces soot or carbon"
      },
      {
          "index": 165,
          "question": "What is a one or two letter shorthand notation for describing a chemical element?",
          "answers": [
              "chemical symbol",
              "coefficient",
              "chemical equation",
              "atomic mass"
          ],
          "correct_answer": "chemical symbol"
      },
      {
          "index": 166,
          "question": "In molecular formulas, this shows how many atoms of that type of element are in a molecule?",
          "answers": [
              "subscript",
              "coefficent",
              "atomic number",
              "atomic mass"
          ],
          "correct_answer": "subscript"
      },
      {
          "index": 167,
          "question": "What is a statement that expresses what is happening in a chemical reaction in a brief, abbreviated way?",
          "answers": [
              "chemical equation",
              "chemical symbol",
              "sampling",
              "coefficient"
          ],
          "correct_answer": "chemical equation"
      },
      {
          "index": 168,
          "question": "What is the number in front of each chemical formula that shows how many molecules of that compound are used or produced in a chemical reaction?",
          "answers": [
              "coefficient",
              "subscript",
              "atomic mass",
              "atomic number"
          ],
          "correct_answer": "coefficient"
      },
      {
          "index": 169,
          "question": "What is the water found in the soil and beneath the surface of the Earth called?",
          "answers": [
              "groundwater",
              "surface water",
              "spring runoff",
              "hard water"
          ],
          "correct_answer": "groundwater"
      },
      {
          "index": 170,
          "question": "What is the particulate matter that is a product of combustion?",
          "answers": [
              "soot",
              "acid rain",
              "rust",
              "ozone"
          ],
          "correct_answer": "soot"
      },
      {
          "index": 171,
          "question": "What is the energy of motion of the particles of matter in a substance called?",
          "answers": [
              "thermal energy",
              "thermal inversion",
              "convection",
              "unstable"
          ],
          "correct_answer": "thermal energy"
      },
      {
          "index": 172,
          "question": "What is the term for easily changed?",
          "answers": [
              "unstable",
              "indicator",
              "constraints",
              "heterogeneous"
          ],
          "correct_answer": "unstable"
      },
      {
          "index": 173,
          "question": "What is a table listing all the known elements and their properties?",
          "answers": [
              "Periodic Table of the Elements",
              "Periodic Table of Pure Substances",
              "Periodic Table of Chemistry",
              "Periodic Table of Ions"
          ],
          "correct_answer": "Periodic Table of the Elements"
      },
      {
          "index": 174,
          "question": "What is a pure substance made up of two or more different elements called?",
          "answers": [
              "compound",
              "heterogeneous",
              "pure substance",
              "homogeneous"
          ],
          "correct_answer": "compound"
      },
      {
          "index": 175,
          "question": "What is the ability of a solute to dissolve in a solvent called?",
          "answers": [
              "solubility",
              "concentrated",
              "chemical reaction",
              "precipitate"
          ],
          "correct_answer": "solubility"
      },
      {
          "index": 176,
          "question": "Which of the following is the definition of concentrated?",
          "answers": [
              "the amount of solute in a solvent",
              "to increase concentration of a substance in a mixture",
              "when no more solute can dissolve in the solvent",
              "the ability of a solute to dissolve in a solvent"
          ],
          "correct_answer": "to increase concentration of a substance in a mixture"
      },
      {
          "index": 177,
          "question": "What is a small part of something, or one of the many things in a set?",
          "answers": [
              "sample",
              "sampling",
              "representative",
              "microscopic"
          ],
          "correct_answer": "sample"
      },
      {
          "index": 178,
          "question": "What is the term that means to choose a part to examine?",
          "answers": [
              "sampling",
              "sample",
              "representative",
              "trial"
          ],
          "correct_answer": "sampling"
      },
      {
          "index": 179,
          "question": "Which term means typical or similar to, when referring to sampling?",
          "answers": [
              "representative",
              "evidence",
              "trend",
              "replicate"
          ],
          "correct_answer": "representative"
      },
      {
          "index": 180,
          "question": "What is another name for a substance that can make air, soil, or water harmful to organisms and structures?",
          "answers": [
              "pollutant",
              "fossil fuels",
              "solvent",
              "rust"
          ],
          "correct_answer": "pollutant"
      },
      {
          "index": 181,
          "question": "What is the condition of air in terms of the amount of pollutants it contains?",
          "answers": [
              "air quality",
              "polluted",
              "particulate matter",
              "smog"
          ],
          "correct_answer": "air quality"
      },
      {
          "index": 182,
          "question": "Which is not a characteristic of an ion?",
          "answers": [
              "it has more electrons that protons and an overall negative charge",
              "it has fewer electrons than protons and an overall positive charge",
              "can form the compound salt",
              "forms covalent bonds with other ions"
          ],
          "correct_answer": "forms covalent bonds with other ions"
      },
      {
          "index": 183,
          "question": "What is the name of the weather condition where an overlaying mass of heated air prevents the circulation of air beneath it?",
          "answers": [
              "thermal inversion",
              "convection",
              "balance",
              "stable"
          ],
          "correct_answer": "thermal inversion"
      },
      {
          "index": 184,
          "question": "What is the transfer of heat in a fluid through a current made up of warm, rising fluid and cool, sinking fluid?",
          "answers": [
              "convection",
              "thermal inversion",
              "density",
              "unstable"
          ],
          "correct_answer": "convection"
      },
      {
          "index": 185,
          "question": "What is the normal weather conditions of a region, throughout the year, averaged over a series of years?",
          "answers": [
              "climate",
              "air quality",
              "temperature",
              "period"
          ],
          "correct_answer": "climate"
      },
},
]
}
