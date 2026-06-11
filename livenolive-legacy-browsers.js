/******************* 
 * Livenolive *
 *******************/


// store info about the experiment session:
let expName = 'livenolive';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'Пол': ["\u0412\u044b\u0431\u0440\u0430\u0442\u044c", "\u0416", "\u041c"],
    'Полный возраст': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const AT_instruction_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(AT_instruction_loopLoopBegin(AT_instruction_loopLoopScheduler));
flowScheduler.add(AT_instruction_loopLoopScheduler);
flowScheduler.add(AT_instruction_loopLoopEnd);


const AT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(AT_trialsLoopBegin(AT_trialsLoopScheduler));
flowScheduler.add(AT_trialsLoopScheduler);
flowScheduler.add(AT_trialsLoopEnd);



const AT_res_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(AT_res_loopLoopBegin(AT_res_loopLoopScheduler));
flowScheduler.add(AT_res_loopLoopScheduler);
flowScheduler.add(AT_res_loopLoopEnd);



flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'instruction.xlsx', 'path': 'instruction.xlsx'},
    {'name': 'AT_Asset/58.jpg', 'path': 'AT_Asset/58.jpg'},
    {'name': 'AT_Asset/59.jpg', 'path': 'AT_Asset/59.jpg'},
    {'name': 'AT_Asset/60.jpg', 'path': 'AT_Asset/60.jpg'},
    {'name': 'AT_Asset/61.jpg', 'path': 'AT_Asset/61.jpg'},
    {'name': 'AT_Asset/62.jpg', 'path': 'AT_Asset/62.jpg'},
    {'name': 'AT_Asset/63.jpg', 'path': 'AT_Asset/63.jpg'},
    {'name': 'AT_Asset/64.jpg', 'path': 'AT_Asset/64.jpg'},
    {'name': 'AT_Asset/65.jpg', 'path': 'AT_Asset/65.jpg'},
    {'name': 'AT_Asset/66.jpg', 'path': 'AT_Asset/66.jpg'},
    {'name': 'AT_Asset/67.jpg', 'path': 'AT_Asset/67.jpg'},
    {'name': 'AT_Asset/68.jpg', 'path': 'AT_Asset/68.jpg'},
    {'name': 'AT_Asset/69.jpg', 'path': 'AT_Asset/69.jpg'},
    {'name': 'AT_Asset/70.jpg', 'path': 'AT_Asset/70.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'AT_Asset/58.jpg', 'path': 'AT_Asset/58.jpg'},
    {'name': 'AT_Asset/59.jpg', 'path': 'AT_Asset/59.jpg'},
    {'name': 'AT_Asset/60.jpg', 'path': 'AT_Asset/60.jpg'},
    {'name': 'AT_Asset/61.jpg', 'path': 'AT_Asset/61.jpg'},
    {'name': 'AT_Asset/62.jpg', 'path': 'AT_Asset/62.jpg'},
    {'name': 'AT_Asset/63.jpg', 'path': 'AT_Asset/63.jpg'},
    {'name': 'AT_Asset/64.jpg', 'path': 'AT_Asset/64.jpg'},
    {'name': 'AT_Asset/65.jpg', 'path': 'AT_Asset/65.jpg'},
    {'name': 'AT_Asset/66.jpg', 'path': 'AT_Asset/66.jpg'},
    {'name': 'AT_Asset/67.jpg', 'path': 'AT_Asset/67.jpg'},
    {'name': 'AT_Asset/68.jpg', 'path': 'AT_Asset/68.jpg'},
    {'name': 'AT_Asset/69.jpg', 'path': 'AT_Asset/69.jpg'},
    {'name': 'AT_Asset/70.jpg', 'path': 'AT_Asset/70.jpg'},
    {'name': 'AT_Asset/Bird1.png', 'path': 'AT_Asset/Bird1.png'},
    {'name': 'AT_Asset/Bird2.png', 'path': 'AT_Asset/Bird2.png'},
    {'name': 'AT_Asset/Bird3.png', 'path': 'AT_Asset/Bird3.png'},
    {'name': 'AT_Asset/Bird4.png', 'path': 'AT_Asset/Bird4.png'},
    {'name': 'AT_Asset/Bird5.png', 'path': 'AT_Asset/Bird5.png'},
    {'name': 'AT_Asset/Bird6.png', 'path': 'AT_Asset/Bird6.png'},
    {'name': 'AT_Asset/Bird7.png', 'path': 'AT_Asset/Bird7.png'},
    {'name': 'AT_Asset/Celestial1.png', 'path': 'AT_Asset/Celestial1.png'},
    {'name': 'AT_Asset/Celestial2.png', 'path': 'AT_Asset/Celestial2.png'},
    {'name': 'AT_Asset/Celestial3.png', 'path': 'AT_Asset/Celestial3.png'},
    {'name': 'AT_Asset/Celestial4.png', 'path': 'AT_Asset/Celestial4.png'},
    {'name': 'AT_Asset/Celestial5.png', 'path': 'AT_Asset/Celestial5.png'},
    {'name': 'AT_Asset/Celestial6.png', 'path': 'AT_Asset/Celestial6.png'},
    {'name': 'AT_Asset/Celestial7.png', 'path': 'AT_Asset/Celestial7.png'},
    {'name': 'AT_Asset/end.jpg', 'path': 'AT_Asset/end.jpg'},
    {'name': 'AT_Asset/Fish1.png', 'path': 'AT_Asset/Fish1.png'},
    {'name': 'AT_Asset/Fish2.png', 'path': 'AT_Asset/Fish2.png'},
    {'name': 'AT_Asset/Fish3.png', 'path': 'AT_Asset/Fish3.png'},
    {'name': 'AT_Asset/Fish4.png', 'path': 'AT_Asset/Fish4.png'},
    {'name': 'AT_Asset/Fish5.png', 'path': 'AT_Asset/Fish5.png'},
    {'name': 'AT_Asset/Fish6.png', 'path': 'AT_Asset/Fish6.png'},
    {'name': 'AT_Asset/Fish7.png', 'path': 'AT_Asset/Fish7.png'},
    {'name': 'AT_Asset/Flower1.png', 'path': 'AT_Asset/Flower1.png'},
    {'name': 'AT_Asset/Flower2.png', 'path': 'AT_Asset/Flower2.png'},
    {'name': 'AT_Asset/Flower3.png', 'path': 'AT_Asset/Flower3.png'},
    {'name': 'AT_Asset/Flower4.png', 'path': 'AT_Asset/Flower4.png'},
    {'name': 'AT_Asset/Flower5.png', 'path': 'AT_Asset/Flower5.png'},
    {'name': 'AT_Asset/Flower6.png', 'path': 'AT_Asset/Flower6.png'},
    {'name': 'AT_Asset/Flower7.png', 'path': 'AT_Asset/Flower7.png'},
    {'name': 'AT_Asset/Insect1.png', 'path': 'AT_Asset/Insect1.png'},
    {'name': 'AT_Asset/Insect2.png', 'path': 'AT_Asset/Insect2.png'},
    {'name': 'AT_Asset/Insect3.png', 'path': 'AT_Asset/Insect3.png'},
    {'name': 'AT_Asset/Insect4.png', 'path': 'AT_Asset/Insect4.png'},
    {'name': 'AT_Asset/Insect5.png', 'path': 'AT_Asset/Insect5.png'},
    {'name': 'AT_Asset/Insect6.png', 'path': 'AT_Asset/Insect6.png'},
    {'name': 'AT_Asset/Insect7.png', 'path': 'AT_Asset/Insect7.png'},
    {'name': 'AT_Asset/Mammal1.png', 'path': 'AT_Asset/Mammal1.png'},
    {'name': 'AT_Asset/Mammal2.png', 'path': 'AT_Asset/Mammal2.png'},
    {'name': 'AT_Asset/Mammal3.png', 'path': 'AT_Asset/Mammal3.png'},
    {'name': 'AT_Asset/Mammal4.png', 'path': 'AT_Asset/Mammal4.png'},
    {'name': 'AT_Asset/Mammal5.png', 'path': 'AT_Asset/Mammal5.png'},
    {'name': 'AT_Asset/Mammal6.png', 'path': 'AT_Asset/Mammal6.png'},
    {'name': 'AT_Asset/Mammal7.png', 'path': 'AT_Asset/Mammal7.png'},
    {'name': 'AT_Asset/Reptile1.png', 'path': 'AT_Asset/Reptile1.png'},
    {'name': 'AT_Asset/Reptile2.png', 'path': 'AT_Asset/Reptile2.png'},
    {'name': 'AT_Asset/Reptile3.png', 'path': 'AT_Asset/Reptile3.png'},
    {'name': 'AT_Asset/Reptile4.png', 'path': 'AT_Asset/Reptile4.png'},
    {'name': 'AT_Asset/Reptile5.png', 'path': 'AT_Asset/Reptile5.png'},
    {'name': 'AT_Asset/Reptile6.png', 'path': 'AT_Asset/Reptile6.png'},
    {'name': 'AT_Asset/Reptile7.png', 'path': 'AT_Asset/Reptile7.png'},
    {'name': 'AT_Asset/StaticObject1.png', 'path': 'AT_Asset/StaticObject1.png'},
    {'name': 'AT_Asset/StaticObject2.png', 'path': 'AT_Asset/StaticObject2.png'},
    {'name': 'AT_Asset/StaticObject3.png', 'path': 'AT_Asset/StaticObject3.png'},
    {'name': 'AT_Asset/StaticObject4.png', 'path': 'AT_Asset/StaticObject4.png'},
    {'name': 'AT_Asset/StaticObject5.png', 'path': 'AT_Asset/StaticObject5.png'},
    {'name': 'AT_Asset/StaticObject6.png', 'path': 'AT_Asset/StaticObject6.png'},
    {'name': 'AT_Asset/StaticObject7.png', 'path': 'AT_Asset/StaticObject7.png'},
    {'name': 'AT_Asset/Tool1.png', 'path': 'AT_Asset/Tool1.png'},
    {'name': 'AT_Asset/Tool2.png', 'path': 'AT_Asset/Tool2.png'},
    {'name': 'AT_Asset/Tool3.png', 'path': 'AT_Asset/Tool3.png'},
    {'name': 'AT_Asset/Tool4.png', 'path': 'AT_Asset/Tool4.png'},
    {'name': 'AT_Asset/Tool5.png', 'path': 'AT_Asset/Tool5.png'},
    {'name': 'AT_Asset/Tool6.png', 'path': 'AT_Asset/Tool6.png'},
    {'name': 'AT_Asset/Tool7.png', 'path': 'AT_Asset/Tool7.png'},
    {'name': 'AT_Asset/Tree1.png', 'path': 'AT_Asset/Tree1.png'},
    {'name': 'AT_Asset/Tree2.png', 'path': 'AT_Asset/Tree2.png'},
    {'name': 'AT_Asset/Tree3.png', 'path': 'AT_Asset/Tree3.png'},
    {'name': 'AT_Asset/Tree4.png', 'path': 'AT_Asset/Tree4.png'},
    {'name': 'AT_Asset/Tree5.png', 'path': 'AT_Asset/Tree5.png'},
    {'name': 'AT_Asset/Tree6.png', 'path': 'AT_Asset/Tree6.png'},
    {'name': 'AT_Asset/Tree7.png', 'path': 'AT_Asset/Tree7.png'},
    {'name': 'AT_Asset/Vehicle1.png', 'path': 'AT_Asset/Vehicle1.png'},
    {'name': 'AT_Asset/Vehicle2.png', 'path': 'AT_Asset/Vehicle2.png'},
    {'name': 'AT_Asset/Vehicle3.png', 'path': 'AT_Asset/Vehicle3.png'},
    {'name': 'AT_Asset/Vehicle4.png', 'path': 'AT_Asset/Vehicle4.png'},
    {'name': 'AT_Asset/Vehicle5.png', 'path': 'AT_Asset/Vehicle5.png'},
    {'name': 'AT_Asset/Vehicle6.png', 'path': 'AT_Asset/Vehicle6.png'},
    {'name': 'AT_Asset/Vehicle7.png', 'path': 'AT_Asset/Vehicle7.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var AT_instrClock;
var AT_instr_key_resp;
var AT_instr_image;
var AT_fixationClock;
var AT_fixation_text;
var AT_trialClock;
var Am_type_list;
var l0;
var l1;
var l2;
var l3;
var l4;
var l5;
var l6;
var l7;
var l8;
var l9;
var l10;
var Am_type_string;
var AT_trial_image;
var AT_trials_key_resp;
var AT_trial_living_text;
var AT_trial_nonliving_text;
var AT_residue_trialsClock;
var AT_res_image;
var AT_res_key_resp;
var AT_trial_living_text_2;
var AT_trial_nonliving_text_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "AT_instr"
  AT_instrClock = new util.Clock();
  AT_instr_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AT_instr_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'AT_instr_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.2, 0.9],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "AT_fixation"
  AT_fixationClock = new util.Clock();
  AT_fixation_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'AT_fixation_text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "AT_trial"
  AT_trialClock = new util.Clock();
  // Run 'Begin Experiment' code from AT_trials_code
  // add a function for Array object
  // return the index of parameter
  Array.prototype.indexOf = function(val) { 
  for (var i = 0; i < this.length; i++) { 
  if (this[i] == val) return i; 
  } 
  return -1; 
  };
  
  
  // add a function for Array object
  // remove item 
  Array.prototype.remove = function(val) { 
  var index = this.indexOf(val); 
  if (index > -1) { 
  this.splice(index, 1); 
  } 
  };
  
  
  Am_type_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  l0 = [1, 2, 3, 4, 5, 6, 7];
  l1 = [1, 2, 3, 4, 5, 6, 7];
  l2 = [1, 2, 3, 4, 5, 6, 7];
  l3 = [1, 2, 3, 4, 5, 6, 7];
  l4 = [1, 2, 3, 4, 5, 6, 7];
  l5 = [1, 2, 3, 4, 5, 6, 7];
  l6 = [1, 2, 3, 4, 5, 6, 7];
  l7 = [1, 2, 3, 4, 5, 6, 7];
  l8 = [1, 2, 3, 4, 5, 6, 7];
  l9 = [1, 2, 3, 4, 5, 6, 7];
  l10 = [1, 2, 3, 4, 5, 6, 7];
  Am_type_string = ["Bird", "Fish", "Mammal", "Insect", "Reptile", "Flower", "Tree", "Celestial", "Vehicle", "StaticObject", "Tool"];
  AT_trial_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'AT_trial_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  AT_trials_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AT_trial_living_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'AT_trial_living_text',
    text: 'Живое',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -3.0 
  });
  
  AT_trial_nonliving_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'AT_trial_nonliving_text',
    text: 'Неживое',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.3)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "AT_residue_trials"
  AT_residue_trialsClock = new util.Clock();
  AT_res_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'AT_res_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  AT_res_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AT_trial_living_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AT_trial_living_text_2',
    text: 'Живое',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -3.0 
  });
  
  AT_trial_nonliving_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AT_trial_nonliving_text_2',
    text: 'Неживое',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.3)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -4.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var AT_instruction_loop;
function AT_instruction_loopLoopBegin(AT_instruction_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    AT_instruction_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'instruction.xlsx',
      seed: undefined, name: 'AT_instruction_loop'
    });
    psychoJS.experiment.addLoop(AT_instruction_loop); // add the loop to the experiment
    currentLoop = AT_instruction_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    AT_instruction_loop.forEach(function() {
      snapshot = AT_instruction_loop.getSnapshot();
    
      AT_instruction_loopLoopScheduler.add(importConditions(snapshot));
      AT_instruction_loopLoopScheduler.add(AT_instrRoutineBegin(snapshot));
      AT_instruction_loopLoopScheduler.add(AT_instrRoutineEachFrame());
      AT_instruction_loopLoopScheduler.add(AT_instrRoutineEnd(snapshot));
      AT_instruction_loopLoopScheduler.add(AT_instruction_loopLoopEndIteration(AT_instruction_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function AT_instruction_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(AT_instruction_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function AT_instruction_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var AT_trials;
function AT_trialsLoopBegin(AT_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    AT_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 66, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'AT_trials'
    });
    psychoJS.experiment.addLoop(AT_trials); // add the loop to the experiment
    currentLoop = AT_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    AT_trials.forEach(function() {
      snapshot = AT_trials.getSnapshot();
    
      AT_trialsLoopScheduler.add(importConditions(snapshot));
      AT_trialsLoopScheduler.add(AT_fixationRoutineBegin(snapshot));
      AT_trialsLoopScheduler.add(AT_fixationRoutineEachFrame());
      AT_trialsLoopScheduler.add(AT_fixationRoutineEnd(snapshot));
      AT_trialsLoopScheduler.add(AT_trialRoutineBegin(snapshot));
      AT_trialsLoopScheduler.add(AT_trialRoutineEachFrame());
      AT_trialsLoopScheduler.add(AT_trialRoutineEnd(snapshot));
      AT_trialsLoopScheduler.add(AT_trialsLoopEndIteration(AT_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function AT_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(AT_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function AT_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var AT_res_loop;
function AT_res_loopLoopBegin(AT_res_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    AT_res_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 11, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'AT_res_loop'
    });
    psychoJS.experiment.addLoop(AT_res_loop); // add the loop to the experiment
    currentLoop = AT_res_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    AT_res_loop.forEach(function() {
      snapshot = AT_res_loop.getSnapshot();
    
      AT_res_loopLoopScheduler.add(importConditions(snapshot));
      AT_res_loopLoopScheduler.add(AT_fixationRoutineBegin(snapshot));
      AT_res_loopLoopScheduler.add(AT_fixationRoutineEachFrame());
      AT_res_loopLoopScheduler.add(AT_fixationRoutineEnd(snapshot));
      AT_res_loopLoopScheduler.add(AT_residue_trialsRoutineBegin(snapshot));
      AT_res_loopLoopScheduler.add(AT_residue_trialsRoutineEachFrame());
      AT_res_loopLoopScheduler.add(AT_residue_trialsRoutineEnd(snapshot));
      AT_res_loopLoopScheduler.add(AT_res_loopLoopEndIteration(AT_res_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function AT_res_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(AT_res_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function AT_res_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var AT_instrMaxDurationReached;
var _AT_instr_key_resp_allKeys;
var AT_instrMaxDuration;
var AT_instrComponents;
function AT_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AT_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AT_instrClock.reset();
    routineTimer.reset();
    AT_instrMaxDurationReached = false;
    // update component parameters for each repeat
    AT_instr_key_resp.keys = undefined;
    AT_instr_key_resp.rt = undefined;
    _AT_instr_key_resp_allKeys = [];
    AT_instr_image.setImage(ATInstrImage);
    psychoJS.experiment.addData('AT_instr.started', globalClock.getTime());
    AT_instrMaxDuration = null
    // keep track of which components have finished
    AT_instrComponents = [];
    AT_instrComponents.push(AT_instr_key_resp);
    AT_instrComponents.push(AT_instr_image);
    
    AT_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function AT_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AT_instr' ---
    // get current time
    t = AT_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *AT_instr_key_resp* updates
    if (t >= 0.0 && AT_instr_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AT_instr_key_resp.tStart = t;  // (not accounting for frame time here)
      AT_instr_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { AT_instr_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { AT_instr_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { AT_instr_key_resp.clearEvents(); });
    }
    
    // if AT_instr_key_resp is active this frame...
    if (AT_instr_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = AT_instr_key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _AT_instr_key_resp_allKeys = _AT_instr_key_resp_allKeys.concat(theseKeys);
      if (_AT_instr_key_resp_allKeys.length > 0) {
        AT_instr_key_resp.keys = _AT_instr_key_resp_allKeys[_AT_instr_key_resp_allKeys.length - 1].name;  // just the last key pressed
        AT_instr_key_resp.rt = _AT_instr_key_resp_allKeys[_AT_instr_key_resp_allKeys.length - 1].rt;
        AT_instr_key_resp.duration = _AT_instr_key_resp_allKeys[_AT_instr_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AT_instr_image* updates
    if (t >= 0.0 && AT_instr_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AT_instr_image.tStart = t;  // (not accounting for frame time here)
      AT_instr_image.frameNStart = frameN;  // exact frame index
      
      AT_instr_image.setAutoDraw(true);
    }
    
    
    // if AT_instr_image is active this frame...
    if (AT_instr_image.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AT_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AT_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AT_instr' ---
    AT_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('AT_instr.stopped', globalClock.getTime());
    AT_instr_key_resp.stop();
    // the Routine "AT_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AT_fixationMaxDurationReached;
var AT_fixationMaxDuration;
var AT_fixationComponents;
function AT_fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AT_fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AT_fixationClock.reset(routineTimer.getTime());
    routineTimer.add(0.750000);
    AT_fixationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('AT_fixation.started', globalClock.getTime());
    AT_fixationMaxDuration = null
    // keep track of which components have finished
    AT_fixationComponents = [];
    AT_fixationComponents.push(AT_fixation_text);
    
    AT_fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function AT_fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AT_fixation' ---
    // get current time
    t = AT_fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *AT_fixation_text* updates
    if (t >= 0.0 && AT_fixation_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AT_fixation_text.tStart = t;  // (not accounting for frame time here)
      AT_fixation_text.frameNStart = frameN;  // exact frame index
      
      AT_fixation_text.setAutoDraw(true);
    }
    
    
    // if AT_fixation_text is active this frame...
    if (AT_fixation_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (AT_fixation_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      AT_fixation_text.tStop = t;  // not accounting for scr refresh
      AT_fixation_text.frameNStop = frameN;  // exact frame index
      // update status
      AT_fixation_text.status = PsychoJS.Status.FINISHED;
      AT_fixation_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AT_fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AT_fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AT_fixation' ---
    AT_fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('AT_fixation.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (AT_fixationMaxDurationReached) {
        AT_fixationClock.add(AT_fixationMaxDuration);
    } else {
        AT_fixationClock.add(0.750000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AT_trialMaxDurationReached;
var Am_type;
var pic_temp_list;
var pic_num;
var Am_pic_display;
var _AT_trials_key_resp_allKeys;
var AT_trialMaxDuration;
var AT_trialComponents;
function AT_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AT_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AT_trialClock.reset();
    routineTimer.reset();
    AT_trialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from AT_trials_code
    Am_type = Am_type_list[Math.floor(Math.random()*Am_type_list.length)];
    
    
    Am_type_list.remove(Am_type);
    
    
    pic_temp_list = [l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10][Am_type]
    
    pic_num = [l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10][Am_type][Math.floor(Math.random()*pic_temp_list.length)];
    
    
    [l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10][Am_type].remove(pic_num);
    
    Am_pic_display = ((("AT_Asset/" + Am_type_string[Am_type])+ pic_num.toString()) + ".png");
    console.log(Am_type_list.length == 0)
    
    if (( Am_type_list.length === 0)) {
        Am_type_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    
    
    
    psychoJS.experiment.addData('AT_image_displayed', Am_pic_display);
    psychoJS.experiment.addData('AT_image_group_name', Am_type_string[Am_type]);
    AT_trial_image.setImage(Am_pic_display);
    AT_trials_key_resp.keys = undefined;
    AT_trials_key_resp.rt = undefined;
    _AT_trials_key_resp_allKeys = [];
    psychoJS.experiment.addData('AT_trial.started', globalClock.getTime());
    AT_trialMaxDuration = null
    // keep track of which components have finished
    AT_trialComponents = [];
    AT_trialComponents.push(AT_trial_image);
    AT_trialComponents.push(AT_trials_key_resp);
    AT_trialComponents.push(AT_trial_living_text);
    AT_trialComponents.push(AT_trial_nonliving_text);
    
    AT_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function AT_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AT_trial' ---
    // get current time
    t = AT_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *AT_trial_image* updates
    if (t >= 0.0 && AT_trial_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AT_trial_image.tStart = t;  // (not accounting for frame time here)
      AT_trial_image.frameNStart = frameN;  // exact frame index
      
      AT_trial_image.setAutoDraw(true);
    }
    
    
    // if AT_trial_image is active this frame...
    if (AT_trial_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *AT_trials_key_resp* updates
    if (t >= 0.0 && AT_trials_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AT_trials_key_resp.tStart = t;  // (not accounting for frame time here)
      AT_trials_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { AT_trials_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { AT_trials_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { AT_trials_key_resp.clearEvents(); });
    }
    
    // if AT_trials_key_resp is active this frame...
    if (AT_trials_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = AT_trials_key_resp.getKeys({
        keyList: typeof ['left','right'] === 'string' ? [['left','right']] : ['left','right'], 
        waitRelease: false
      });
      _AT_trials_key_resp_allKeys = _AT_trials_key_resp_allKeys.concat(theseKeys);
      if (_AT_trials_key_resp_allKeys.length > 0) {
        AT_trials_key_resp.keys = _AT_trials_key_resp_allKeys[_AT_trials_key_resp_allKeys.length - 1].name;  // just the last key pressed
        AT_trials_key_resp.rt = _AT_trials_key_resp_allKeys[_AT_trials_key_resp_allKeys.length - 1].rt;
        AT_trials_key_resp.duration = _AT_trials_key_resp_allKeys[_AT_trials_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AT_trial_living_text* updates
    if (t >= 0.0 && AT_trial_living_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AT_trial_living_text.tStart = t;  // (not accounting for frame time here)
      AT_trial_living_text.frameNStart = frameN;  // exact frame index
      
      AT_trial_living_text.setAutoDraw(true);
    }
    
    
    // if AT_trial_living_text is active this frame...
    if (AT_trial_living_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *AT_trial_nonliving_text* updates
    if (t >= 0.0 && AT_trial_nonliving_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AT_trial_nonliving_text.tStart = t;  // (not accounting for frame time here)
      AT_trial_nonliving_text.frameNStart = frameN;  // exact frame index
      
      AT_trial_nonliving_text.setAutoDraw(true);
    }
    
    
    // if AT_trial_nonliving_text is active this frame...
    if (AT_trial_nonliving_text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AT_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AT_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AT_trial' ---
    AT_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('AT_trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(AT_trials_key_resp.corr, level);
    }
    psychoJS.experiment.addData('AT_trials_key_resp.keys', AT_trials_key_resp.keys);
    if (typeof AT_trials_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('AT_trials_key_resp.rt', AT_trials_key_resp.rt);
        psychoJS.experiment.addData('AT_trials_key_resp.duration', AT_trials_key_resp.duration);
        routineTimer.reset();
        }
    
    AT_trials_key_resp.stop();
    // the Routine "AT_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AT_residue_trialsMaxDurationReached;
var _AT_res_key_resp_allKeys;
var AT_residue_trialsMaxDuration;
var AT_residue_trialsComponents;
function AT_residue_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AT_residue_trials' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AT_residue_trialsClock.reset();
    routineTimer.reset();
    AT_residue_trialsMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from AT_res_code
    Am_pic_display = Am_res_l[Math.floor(Math.random()*Am_res_l.length)];
    Am_res_l.remove(Am_pic_display);
    
    
    
    
    psychoJS.experiment.addData('AT_image_displayed', Am_pic_display);
    psychoJS.experiment.addData('AT_image_group_name', Am_pic_display.split("/")[1].slice(0, -4));
    AT_res_image.setImage(Am_pic_display);
    AT_res_key_resp.keys = undefined;
    AT_res_key_resp.rt = undefined;
    _AT_res_key_resp_allKeys = [];
    psychoJS.experiment.addData('AT_residue_trials.started', globalClock.getTime());
    AT_residue_trialsMaxDuration = null
    // keep track of which components have finished
    AT_residue_trialsComponents = [];
    AT_residue_trialsComponents.push(AT_res_image);
    AT_residue_trialsComponents.push(AT_res_key_resp);
    AT_residue_trialsComponents.push(AT_trial_living_text_2);
    AT_residue_trialsComponents.push(AT_trial_nonliving_text_2);
    
    AT_residue_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function AT_residue_trialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AT_residue_trials' ---
    // get current time
    t = AT_residue_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *AT_res_image* updates
    if (t >= 0.0 && AT_res_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AT_res_image.tStart = t;  // (not accounting for frame time here)
      AT_res_image.frameNStart = frameN;  // exact frame index
      
      AT_res_image.setAutoDraw(true);
    }
    
    
    // if AT_res_image is active this frame...
    if (AT_res_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *AT_res_key_resp* updates
    if (t >= 0.0 && AT_res_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AT_res_key_resp.tStart = t;  // (not accounting for frame time here)
      AT_res_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { AT_res_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { AT_res_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { AT_res_key_resp.clearEvents(); });
    }
    
    // if AT_res_key_resp is active this frame...
    if (AT_res_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = AT_res_key_resp.getKeys({
        keyList: typeof ['left','right'] === 'string' ? [['left','right']] : ['left','right'], 
        waitRelease: false
      });
      _AT_res_key_resp_allKeys = _AT_res_key_resp_allKeys.concat(theseKeys);
      if (_AT_res_key_resp_allKeys.length > 0) {
        AT_res_key_resp.keys = _AT_res_key_resp_allKeys[_AT_res_key_resp_allKeys.length - 1].name;  // just the last key pressed
        AT_res_key_resp.rt = _AT_res_key_resp_allKeys[_AT_res_key_resp_allKeys.length - 1].rt;
        AT_res_key_resp.duration = _AT_res_key_resp_allKeys[_AT_res_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AT_trial_living_text_2* updates
    if (t >= 0.0 && AT_trial_living_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AT_trial_living_text_2.tStart = t;  // (not accounting for frame time here)
      AT_trial_living_text_2.frameNStart = frameN;  // exact frame index
      
      AT_trial_living_text_2.setAutoDraw(true);
    }
    
    
    // if AT_trial_living_text_2 is active this frame...
    if (AT_trial_living_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *AT_trial_nonliving_text_2* updates
    if (t >= 0.0 && AT_trial_nonliving_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AT_trial_nonliving_text_2.tStart = t;  // (not accounting for frame time here)
      AT_trial_nonliving_text_2.frameNStart = frameN;  // exact frame index
      
      AT_trial_nonliving_text_2.setAutoDraw(true);
    }
    
    
    // if AT_trial_nonliving_text_2 is active this frame...
    if (AT_trial_nonliving_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AT_residue_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AT_residue_trialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AT_residue_trials' ---
    AT_residue_trialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('AT_residue_trials.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(AT_res_key_resp.corr, level);
    }
    psychoJS.experiment.addData('AT_res_key_resp.keys', AT_res_key_resp.keys);
    if (typeof AT_res_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('AT_res_key_resp.rt', AT_res_key_resp.rt);
        psychoJS.experiment.addData('AT_res_key_resp.duration', AT_res_key_resp.duration);
        routineTimer.reset();
        }
    
    AT_res_key_resp.stop();
    // the Routine "AT_residue_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
